import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterForm } from '../../shared/register-form/register-form';

@Component({
  selector: 'app-register',
  imports: [RegisterForm, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {}
