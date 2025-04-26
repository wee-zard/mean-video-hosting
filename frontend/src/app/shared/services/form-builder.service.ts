import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private formBuilder: FormBuilder) {}

  buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(200)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  buildRegistrationForm(): FormGroup {
    return this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(8),
          Validators.maxLength(200),
        ],
      ],
    });
  }
}
