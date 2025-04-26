import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormBuilderService } from '../../shared/services/form-builder.service';
import { SiteRouteEnums } from '../../shared/enums/SiteRouteEnums';
import { SnackbarService } from '../../shared/services/snakbar.service';
import { UserService } from '../../shared/services/user.service';
import { BackdropComponent } from '../../component/backdrop/backdrop.component';

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
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  siteRoutes: typeof SiteRouteEnums = SiteRouteEnums;
  isLoading: boolean = false;

  constructor(
    private formBuilderService: FormBuilderService,
    private snackbarService: SnackbarService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilderService.buildRegistrationForm();
  }

  onSubmit(): void {
    this.isLoading = true;

    if (!this.registrationForm?.valid) {
      this.snackbarService.open('Login form is invalid!', true);
      this.isLoading = false;
      return;
    }

    this.isLoading = false;
  }
}
