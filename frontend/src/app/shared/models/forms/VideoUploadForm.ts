export enum VideoUploadField {
  TITLE = 'title',
  DESCRIPTION = 'description',
}

export interface VideoUploadType {
  [VideoUploadField.TITLE]: any;
  [VideoUploadField.DESCRIPTION]: any;
}

export interface VideoUploadErrorType {
  [VideoUploadField.TITLE]?: string;
  [VideoUploadField.DESCRIPTION]?: string;
}

export interface VideoUploadModel {
  [VideoUploadField.TITLE]: string;
  [VideoUploadField.DESCRIPTION]: string;
}

export interface VideoUploadFormBuilderType {
  [VideoUploadField.TITLE]?: string;
  [VideoUploadField.DESCRIPTION]?: string;
}
