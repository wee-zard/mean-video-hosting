import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormBuilderService } from '../../shared/services/form-builder.service';
import { SiteRouteEnums } from '../../shared/enums/SiteRouteEnums';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { BackdropComponent } from '../../component/backdrop/backdrop.component';
import {
  LoginFormErrorType,
  LoginFormFields,
  LoginFormType,
  LoginModel,
} from '../../shared/models/forms/LoginForm';
import { AutoUnsubscribe } from '../../shared/decorators/AutoUnsubscribe';
import { FormValidationService } from '../../shared/services/form-validation.service';
import { convertFormToModel } from '../../shared/helper/ConversionHelper';
import { AuthService } from '../../shared/services/auth.service';
import { SeverityEnums } from '../../shared/enums/SeverityEnums';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatCardModule,
    BackdropComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
@AutoUnsubscribe
export class LoginComponent implements OnInit {
  form!: FormGroup<LoginFormType>;
  formError?: LoginFormErrorType;
  formFields: typeof LoginFormFields = LoginFormFields;
  siteRoutes: typeof SiteRouteEnums = SiteRouteEnums;
  isLoading: boolean = false;

  constructor(
    private formBuilderService: FormBuilderService,
    private formValidationService: FormValidationService,
    private snackbarService: SnackbarService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilderService.buildLoginForm();
  }

  onSubmit(): void {
    this.isLoading = true;

    if (!this.form?.valid) {
      this.formError =
        this.formValidationService.getErrorMessages<LoginFormErrorType>(
          this.form.controls,
          typeof LoginFormFields,
        );
      this.isLoading = false;
      return;
    }

    const model = convertFormToModel<LoginModel>(this.form.value);
    this.authService
      .login(model)
      .then((userModel) => {
        this.snackbarService.open(
          SeverityEnums.SUCCESS,
          'Login is successfully finished.',
        );
        this.userService.updateUserModel(userModel);
        this.router.navigateByUrl(`/${SiteRouteEnums.HOME_PAGE}`);
      })
      .catch((error) =>
        this.snackbarService.open(
          SeverityEnums.ERROR,
          error?.error?.error ?? error.message,
        ),
      )
      .finally(() => (this.isLoading = false));
  }
}
