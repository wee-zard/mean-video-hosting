export enum VideoSearchFormFields {
  TEXT = 'text',
  TAG = 'tag',
  CATEGORY = 'category',
}

export interface VideoSearchFormType {
  [VideoSearchFormFields.TEXT]: any;
  [VideoSearchFormFields.TAG]: any;
  [VideoSearchFormFields.CATEGORY]: any;
}

export interface VideoSearchModel {
  [VideoSearchFormFields.TEXT]: string;
  [VideoSearchFormFields.TAG]: string;
  [VideoSearchFormFields.CATEGORY]: string;
}
