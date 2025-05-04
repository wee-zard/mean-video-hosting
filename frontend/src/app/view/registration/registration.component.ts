import {
  RegistrationFormErrorType,
  RegistrationFormField,
  RegistrationFormType,
  RegistrationModel,
} from './../../shared/models/forms/RegistrationForm';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormBuilderService } from '../../shared/services/form-builder.service';
import { SiteRouteEnums } from '../../shared/enums/SiteRouteEnums';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { BackdropComponent } from '../../component/backdrop/backdrop.component';
import { FormValidationService } from '../../shared/services/form-validation.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { convertFormToModel } from '../../shared/helper/ConversionHelper';
import { StorageKeyEnum } from '../../shared/enums/StorageKeyEnums';
import { AuthService } from '../../shared/services/auth.service';
import { SeverityEnums } from '../../shared/enums/SeverityEnums';

@Component({
  selector: 'app-registration',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    BackdropComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup<RegistrationFormType>;
  formError?: RegistrationFormErrorType;
  formFields: typeof RegistrationFormField = RegistrationFormField;
  siteRoutes: typeof SiteRouteEnums = SiteRouteEnums;
  isLoading: boolean = false;
  birthDateLowerLimit = new Date(
    new Date().setFullYear(
      new Date().getFullYear() - 12,
      new Date().getMonth(),
      new Date().getDate(),
    ),
  );
  constructor(
    private formBuilderService: FormBuilderService,
    private formValidationService: FormValidationService,
    private snackbarService: SnackbarService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilderService.buildRegistrationForm();
  }

  onSubmit(): void {
    this.isLoading = true;

    if (!this.form?.valid) {
      this.formError =
        this.formValidationService.getErrorMessages<RegistrationFormType>(
          this.form.controls,
          this.formFields,
        );
      this.isLoading = false;
      return;
    }

    const model = convertFormToModel<RegistrationModel>(this.form.value);
    const birthday = new Date(model[RegistrationFormField.BIRTHDATE])
      .toISOString()
      .split('T')[0];
    model[RegistrationFormField.BIRTHDATE] = birthday;

    this.authService
      .register(model)
      .then((result) => {
        localStorage.setItem(
          StorageKeyEnum.AUTHENTICATED_USER,
          JSON.stringify(result),
        );
        this.snackbarService.open(
          SeverityEnums.SUCCESS,
          'Registration is successfully finished.',
        );
        this.router.navigateByUrl(`/${SiteRouteEnums.HOME_PAGE}`);
      })
      .catch((error) =>
        this.snackbarService.open(
          SeverityEnums.ERROR,
          error?.error?.error ?? error.message,
        ),
      )
      .finally(() => {
        this.isLoading = false;
      });
  }
}
