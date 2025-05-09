import fs from 'fs';
import { google, youtube_v3 } from 'googleapis';
import { GaxiosResponse, BodyResponseCallback, OAuth2Client } from 'googleapis-common';
import { port } from '..';
import dotenv from 'dotenv';
import { VideoUploadRequest } from '../model/request/VideoUploadRequest';
import path from 'path';
dotenv.config();

const clientId = process.env.USE_OAUTH_CLIENT_ID as string;
const clientSecret = process.env.USE_OAUTH_CLIENT_SECRET as string;
const accessToken = process.env.USE_ACCESS_TOKEN as string;
const refreshToken = process.env.USE_REFRESH_TOKEN as string;

export default abstract class VideoUploadHelper {
  private static oauth2Client: OAuth2Client | undefined;

  /**
   * Function to get a new access token using the refresh token
   * @returns
   */
  public static refreshAccessToken = (): Promise<string> => {
    return new Promise<string>(async (resolve, reject) => {
      if (!this.oauth2Client) {
        return;
      }

      try {
        const newTokens = await this.oauth2Client.refreshAccessToken();
        this.oauth2Client.setCredentials(newTokens.credentials);
        console.log('Access token refreshed:', newTokens.credentials.access_token);
        resolve(newTokens.credentials.access_token as string);
      } catch (error) {
        console.error('Error refreshing access token:', error);
        reject(error);
      }
    });
  };

  /**
   * Inits the OAuth2 Client.
   */
  public static initOauth2Client = () => {
    console.log('Initializing OAuth2Client');

    this.oauth2Client = new google.auth.OAuth2(
      clientId, //CLIENT_ID
      clientSecret, // CLIENT_SECRET
      `http://localhost:${port}/oauth2callback` //REDIRECT URL
    );

    this.getAuthorizationUrl();
  };

  private static getAuthorizationUrl = () => {
    if (!this.oauth2Client) {
      return;
    }

    if (accessToken && refreshToken) {
      this.setOAth2ClientCredential();
      return;
    }

    console.log('Fetching the authorization url for OAuth2Client');

    const authorizationUrl = this.oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/youtube.upload'],
      // Enable incremental authorization. Recommended as a best practice.
      include_granted_scopes: true,
    });

    console.log('Auth url', authorizationUrl);
  };

  private static setOAth2ClientCredential = () => {
    if (!this.oauth2Client || !accessToken || !refreshToken) {
      return;
    }

    console.log('setOAth2ClientCredential');

    this.oauth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  };

  public static handleOAth2ClientToken = (code: string) => {
    if (!this.oauth2Client) {
      return;
    }

    this.oauth2Client.getToken(code).then((value) => {
      if (!this.oauth2Client) {
        return;
      }

      console.log('token values', value.tokens);
      this.oauth2Client.setCredentials(value.tokens);
    });
  };

  /**
   * Uploads a video to YouTube.
   */
  public static uploadVideoRoot = async (video: VideoUploadRequest): Promise<string> => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        // Refresh access token.
        await VideoUploadHelper.refreshAccessToken();

        // Upload the video to youtube.
        const result = await VideoUploadHelper.uploadVideo(video);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  /**
   * Uploads a video to YouTube.
   */
  private static uploadVideo = (video: VideoUploadRequest): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Instantiate a YouTube object which allows us to interact with the YouTube API
      const youtube = google.youtube({
        version: 'v3',
        auth: this.oauth2Client,
      });

      const params: youtube_v3.Params$Resource$Videos$Insert = {
        requestBody: {
          snippet: {
            title: video.title, // Video title
            description: video.description, // Video description
          },
          status: {
            privacyStatus: 'unlisted', // Every video will be unlisted.
          },
        },
        part: ['snippet', 'status'], // Define the parts of the video object we are setting/updating
        media: {
          body: fs.createReadStream(this.getVideoPathByVideoName(video.videoPath)), // Read the video file
        },
      };

      const videoResponseCallback: BodyResponseCallback<youtube_v3.Schema$Video> = (
        err: Error | null,
        data?: GaxiosResponse<youtube_v3.Schema$Video> | null
      ) => {
        // Handle the callback after attempting the upload
        if (err) {
          console.error('error', err); // Log the error if there's one
          reject(err);
        } else {
          const generatedVideoId = data?.data.id;

          if (!generatedVideoId) {
            reject(generatedVideoId);
          } else {
            console.log('Video uploaded successfully. Generated video_id is: ', generatedVideoId);

            // TODO: Should I upload a video thumbnail to the video?

            resolve(generatedVideoId);
          }
        }
      };

      // Use the `videos.insert` method to upload a video
      youtube.videos.insert(params, videoResponseCallback);
    });
  };

  private static generateRandomHex(): string {
    const character = Math.round(Math.random() * 16);
    return character.toString(16);
  }

  /**
   * Generates a new filename for the uploaded video.
   * @returns The new name of the video.
   */
  public static getFileName(): string {
    return `video_${this.getUniqueSequenceForFilename()}.mp4`;
  }

  /**
   * Generate a unique sequence for video path.
   */
  private static getUniqueSequenceForFilename(): string {
    let uniqueSequence: string = '';

    for (let i = 0; i < 16; i++) {
      uniqueSequence += this.generateRandomHex();
    }

    return uniqueSequence;
  }

  public static getVideoPathByVideoName(videoName: string): string {
    const rootFolderPath = path.normalize(path.join(__dirname, '..', '..'));
    const videoUploadPath = path.join(rootFolderPath, 'uploads', videoName);
    return videoUploadPath;
  }

  public static removeVideoFromPublicFolder = (videoName: string): Promise<boolean> => {
    return new Promise<boolean>(async (resolve, reject) => {
      fs.unlink(this.getVideoPathByVideoName(videoName), (err) => reject(err));
      console.log('File removed successfully!', videoName);
      resolve(true);
    });
  };
}
