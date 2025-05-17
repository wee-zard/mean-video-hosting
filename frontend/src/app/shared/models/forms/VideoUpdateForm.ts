export enum VideoUpdateField {
  TITLE = 'title',
  DESCRIPTION = 'description',
}

export interface VideoUpdateType {
  [VideoUpdateField.TITLE]: any;
  [VideoUpdateField.DESCRIPTION]: any;
}

export interface VideoUpdateErrorType {
  [VideoUpdateField.TITLE]?: string;
  [VideoUpdateField.DESCRIPTION]?: string;
}

export interface VideoUpdateModel {
  [VideoUpdateField.TITLE]: string;
  [VideoUpdateField.DESCRIPTION]: string;
}

export interface VideoUpdateFormBuilderType {
  [VideoUpdateField.TITLE]?: string;
  [VideoUpdateField.DESCRIPTION]?: string;
}
