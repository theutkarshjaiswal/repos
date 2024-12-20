import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    console.log('dededede');
    console.log(this.signupForm, 'this.signupFormthis.signupForm');
    if (this.signupForm.valid) {
      const { username, password, firstname, lastname, email } =
        this.signupForm.value;
      this.authService
        .signup(username, password, firstname, lastname, email)
        .subscribe(
          (response) => {
            console.log('Signup successful:', response);
            // Redirect to login or perform other actions
          },
          (error) => {
            console.error('Signup failed:', error);
            // Handle error, show error message, etc.
          }
        );
    }
  }
}
