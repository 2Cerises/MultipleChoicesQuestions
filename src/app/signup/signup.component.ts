import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { signUp, confirmSignUp } from '@aws-amplify/auth';
import { Amplify } from 'aws-amplify';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  error: string = '';
  success: string = '';
  showVerification: boolean = false;
  verificationForm: FormGroup;
  pendingUsername: string = '';

  constructor(private fb: FormBuilder) {

    Amplify.configure({
      Auth: {
        Cognito: {
          userPoolId: '<>',
          userPoolClientId: '<>'
        }
      }
    });

    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    this.verificationForm = this.fb.group({
      code: ['', Validators.required]
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  async onSubmit() {
    this.error = '';
    this.success = '';
    if (this.signupForm.invalid) {
      this.error = 'Please fill all fields correctly.';
      return;
    }
    const { firstName, lastName, username, email, password } = this.signupForm.value;
    try {
      await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
            given_name: firstName,
            family_name: lastName
          }
        }
      });
      this.success = 'Signup successful! Please check your email for the verification code.';
      this.pendingUsername = username;
      this.showVerification = true;
      this.signupForm.reset();
    } catch (err: any) {
      this.error = err.message || 'Signup failed.';
    }
  }

  async onVerify() {
    this.error = '';
    this.success = '';
    if (this.verificationForm.invalid) {
      this.error = 'Please enter the verification code.';
      return;
    }
    const code = this.verificationForm.value.code;
    try {
      await confirmSignUp({ username: this.pendingUsername, confirmationCode: code });
      this.success = 'Your account has been verified! You can now log in.';
      this.showVerification = false;
      this.verificationForm.reset();
    } catch (err: any) {
      this.error = err.message || 'Verification failed.';
    }
  }
}
