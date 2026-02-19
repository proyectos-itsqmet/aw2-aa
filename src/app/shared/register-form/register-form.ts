import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ionMail, ionPerson, ionLockClosed, ionCall } from '@ng-icons/ionicons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { UserModel } from '../../models/user';

@Component({
  selector: 'app-register-form',
  imports: [NgIcon, FormsModule, CommonModule],
  providers: [provideIcons({ ionMail, ionPerson, ionLockClosed, ionCall })],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  private userService = inject(UserService);
  private cdr = inject(ChangeDetectorRef);

  newUser: UserModel = {
    name: '',
    email: '',
    password: '',
    phone: '',
    rol: 'EMPLOYEE',
  };

  saveUser() {
    this.userService.postUser(this.newUser).subscribe(() => {
      this.reset();
    });
  }

  reset(): void {
    this.newUser = {
      name: '',
      email: '',
      password: '',
      phone: '',
      rol: 'EMPLOYEE',
    };
    this.cdr.markForCheck();
  }
}
