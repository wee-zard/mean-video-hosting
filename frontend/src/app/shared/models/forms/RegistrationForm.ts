export enum RegistrationFormField {
  EMAIL = 'email',
  PASSWORD = 'password',
  RE_PASSWORD = 'repassword',
  USERNAME = 'username',
  BIRTHDATE = 'birthdate',
}

export interface RegistrationFormType {
  [RegistrationFormField.EMAIL]: any;
  [RegistrationFormField.PASSWORD]: any;
  [RegistrationFormField.RE_PASSWORD]: any;
  [RegistrationFormField.USERNAME]: any;
  [RegistrationFormField.BIRTHDATE]: any;
}

export interface RegistrationFormErrorType {
  [RegistrationFormField.EMAIL]?: string;
  [RegistrationFormField.PASSWORD]?: string;
  [RegistrationFormField.RE_PASSWORD]?: string;
  [RegistrationFormField.USERNAME]?: string;
  [RegistrationFormField.BIRTHDATE]?: string;
}

export interface RegistrationModel {
  [RegistrationFormField.EMAIL]: string;
  [RegistrationFormField.PASSWORD]: string;
  [RegistrationFormField.RE_PASSWORD]: string;
  [RegistrationFormField.USERNAME]: string;
  [RegistrationFormField.BIRTHDATE]: string;
}
