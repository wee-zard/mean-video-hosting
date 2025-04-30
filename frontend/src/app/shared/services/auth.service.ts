import { Injectable } from '@angular/core';
import { getHeaderWithCredential } from '../helper/HttpHeaderHelper';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/models/UserModels';
import { LoginModel } from '../models/forms/LoginForm';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { RegistrationModel } from '../models/forms/RegistrationForm';
import { BaseResponse } from '../models/response/BaseResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  server: string = `${environment.serverUrl}/user`;

  constructor(private http: HttpClient) {}

  /**
   * Login the user with an email and passwords.
   *
   * @param form Holds the email and passwords of the user in an object.
   * @returns Returns a {@link UserModel} if the login finished successfully.
   */
  login(form: LoginModel): Promise<UserModel> {
    return lastValueFrom(
      this.http.post<UserModel>(
        `${this.server}/login`,
        form,
        getHeaderWithCredential(true),
      ),
    );
  }

  /**
   * Creates a new normal user.
   *
   * @param form The form that contains the information about the new user to create
   * @returns Returns a user model that has been created at the db.
   */
  register(form: RegistrationModel): Promise<UserModel> {
    return lastValueFrom(
      this.http.post<UserModel>(
        `${this.server}/register`,
        form,
        getHeaderWithCredential(),
      ),
    );
  }

  /**
   * Checks the authentication of the user.
   *
   * @returns true if the user is logged in properly.
   */
  checkAuth(): Promise<boolean> {
    return lastValueFrom(
      this.http.get<boolean>(`${this.server}/checkAuth`, {
        withCredentials: true,
      }),
    );
  }

  /**
   * Logout the user from the application.
   *
   * @returns true if the user is logged in properly.
   */
  logout(): Promise<BaseResponse> {
    return lastValueFrom(
      this.http.get<BaseResponse>(`${this.server}/logout`, {
        withCredentials: true,
      }),
    );
  }
}
