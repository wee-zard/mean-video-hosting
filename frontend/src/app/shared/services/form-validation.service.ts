import { Injectable } from '@angular/core';
import { ValidationErrorEnums } from '../enums/ValidationErrorEnums';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {
  private getValidationMessageFromKey(
    key: string,
    value: any,
  ): string | undefined {
    switch (key) {
      case ValidationErrorEnums.REQUIRED:
        return 'Field is required!';
      case ValidationErrorEnums.EMAIL:
        return 'Please provide a valid email address!';
      case ValidationErrorEnums.MIN_LENGTH:
        return `The input must be at least ${value.requiredLength} characters long!`;
      case ValidationErrorEnums.PASSWORD_MUST_MATCH:
        return 'The password and re-password are not matching!';
      default:
        return 'Unknown error occurred!';
    }
  }

  private getValidations(validator: any) {
    const errorKey = Object.keys(validator)[0];

    return this.getValidationMessageFromKey(errorKey, validator[errorKey]);
  }

  getErrorMessages<T>(errorObj: any, enumToIterate: {}): T {
    const keys: string[] = Object.values(enumToIterate);

    return keys
      .map((key) => ({
        [key]: !!errorObj[key].errors
          ? this.getValidations(errorObj[key].errors)
          : undefined,
      }))
      .reduce((a, b) => ({
        ...a,
        ...b,
      })) as T;
  }
}
