import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [ReactiveFormsModule, CommonModule]   // ← ESTA LÍNEA ES CLAVE
})
export class LoginComponent {
  /*
  errorSession: boolean = false
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  submit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Datos correctos:', this.loginForm.value);
  }
    */
}
