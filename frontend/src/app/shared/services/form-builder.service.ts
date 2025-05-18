import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormType } from '../models/forms/LoginForm';
import { RegistrationFormType } from '../models/forms/RegistrationForm';
import {
  VideoSearchFormFields,
  VideoSearchFormType,
} from '../models/forms/VideoSearchForm';
import { CommentFormField, CommentFormType } from '../models/forms/CommentForm';
import {
  VideoUpdateField,
  VideoUpdateFormBuilderType,
  VideoUpdateType,
} from '../models/forms/VideoUpdateForm';
import {
  VideoUploadField,
  VideoUploadType,
} from '../models/forms/VideoUploadForm';

type FormControlOption = {
  isNotRequired?: boolean;
  maxLength?: number;
  data?: string | string[] | number | number[];
};

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}

  private getEmailFormControl() {
    return [
      '',
      [Validators.required, Validators.email, Validators.maxLength(200)],
    ];
  }

  private getPasswordFormControl() {
    return [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(50)],
    ];
  }

  private getBirthDateFormControl() {
    return ['', [Validators.required]];
  }

  private getTextFormControl(option?: FormControlOption) {
    const maxLength = option?.maxLength ?? 100;
    const data = option?.data ?? '';

    if (option?.isNotRequired) {
      return [data, [Validators.maxLength(maxLength)]];
    } else {
      return [data, [Validators.required, Validators.maxLength(maxLength)]];
    }
  }

  /**
   * Created a new form group for the login.
   * The form will contains required form controls as well.
   *
   * @returns Returns the login form group.
   */
  buildLoginForm() {
    return this.fb.group<LoginFormType>({
      email: this.getEmailFormControl(),
      password: this.getPasswordFormControl(),
    });
  }

  /**
   * Created a new form group for the registration.
   * The form will contains required form controls as well.
   *
   * @returns Returns the registration form group.
   */
  buildRegistrationForm(): FormGroup<RegistrationFormType> {
    return this.fb.group(
      {
        email: this.getEmailFormControl(),
        password: this.getPasswordFormControl(),
        repassword: this.getPasswordFormControl(),
        birthdate: this.getBirthDateFormControl(),
        username: this.getTextFormControl(),
      },
      {
        validator: this.mustMatch('password', 'repassword'),
      },
    );
  }

  private mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  /**
   * Created a new form group for the searchbar.
   * The form will contains required form controls as well.
   *
   * @returns Returns the searchbar form group.
   */
  buildVideoSearchForm() {
    return this.fb.group<VideoSearchFormType>({
      [VideoSearchFormFields.TEXT]: this.getTextFormControl({
        isNotRequired: true,
      }),
      [VideoSearchFormFields.TAG]: this.getTextFormControl({
        isNotRequired: true,
      }),
      [VideoSearchFormFields.CATEGORY]: this.getTextFormControl({
        isNotRequired: true,
      }),
    });
  }

  /**
   * Created a new form group for the comments.
   * The form will contains required form controls as well.
   *
   * @param message The message of the comment to edit
   * @returns Returns the comment form group.
   */
  buildCommentForm(message?: string) {
    return this.fb.group<CommentFormType>({
      [CommentFormField.MESSAGE]: this.getTextFormControl({
        maxLength: 500,
        data: message,
      }),
    });
  }

  /**
   * Created a new form group for the video.
   * The form will contains required form controls as well.
   *
   * @returns Returns the video form group.
   */
  buildVideoUpdateForm(builder: VideoUpdateFormBuilderType = {}) {
    return this.fb.group<VideoUpdateType>({
      [VideoUpdateField.TITLE]: this.getTextFormControl({
        maxLength: 100,
        data: builder[VideoUpdateField.TITLE],
      }),
      [VideoUpdateField.DESCRIPTION]: this.getTextFormControl({
        maxLength: 500,
        data: builder[VideoUpdateField.DESCRIPTION],
      }),
    });
  }

  /**
   * Created a new form group for the video uploads.
   * The form will contains required form controls as well.
   *
   * @returns Returns the video upload form group.
   */
  buildVideoUploadForm() {
    return this.fb.group<VideoUploadType>({
      [VideoUploadField.TITLE]: this.getTextFormControl({ data: [] }),
      [VideoUploadField.DESCRIPTION]: this.getTextFormControl({ data: [] }),
    });
  }
}
