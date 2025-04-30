export enum LoginFormFields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface LoginFormType {
  [LoginFormFields.EMAIL]: any;
  [LoginFormFields.PASSWORD]: any;
}

export interface LoginFormErrorType {
  [LoginFormFields.EMAIL]?: string;
  [LoginFormFields.PASSWORD]?: string;
}

export interface LoginModel {
  [LoginFormFields.EMAIL]: string;
  [LoginFormFields.PASSWORD]: string;
}
