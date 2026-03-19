import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [ ReactiveFormsModule, CommonModule, FormsModule ]   // ← ESTA LÍNEA ES CLAVE
})
export class Login {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  email: string = '';
  password: string = '';
  errorMessage = '';
  
  ingresar() {    
    if (this.email === 'admin@admin.com' && this.password === '1234') {
      console.log('Login correcto');

      // Redirigir al dashboard
      this.router.navigate(['/dashboard']);

    } else {
      console.log('Datos incorrectos');
    }      
  }

}
