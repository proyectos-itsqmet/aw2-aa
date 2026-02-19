import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionMail, ionLockClosed, ionLogInOutline } from '@ng-icons/ionicons';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [NgIcon, FormsModule, CommonModule],
  providers: [provideIcons({ ionMail, ionLockClosed, ionLogInOutline })],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  email: string = '';
  password: string = '';

  private authService = inject(AuthService);

  private router = inject(Router);

  login() {
    this.authService.login(this.email, this.password).subscribe((success) => {
      if (success) {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['home']);
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
