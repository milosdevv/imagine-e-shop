import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../Model/User';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../../../Model/Admin';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  constructor(
    private userService: UsersService,
    private router: Router,
    private http: HttpClient
  ) {}

  @ViewChild('registerForm') registerForm: NgForm;
  @ViewChild('adminForm') adminForm: NgForm;

  onUserFormSubmitted() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    console.log('Email:', email);
    console.log('Password:', password);

    const user = new User(email, password, '');

    this.userService
      .findUserByEmailAndPassword(user.email, user.password)
      .subscribe((existingUser) => {
        if (existingUser) {
          console.log('User with the same email and password already exists.');
        } else {
          this.userService.registerUser(user).subscribe((response) => {
            this.registerForm.reset();
            this.router.navigate(['/home']);
          });
        }
      });
  }

  onAdminFormSubmitted() {
    const email = this.adminForm.value.email;
    const password = this.adminForm.value.password;

    console.log('Email:', email);
    console.log('Password:', password);

    this.http
      .post<any>('https://664489c36c6a6565870afa77.mockapi.io/admin', {
        email: email,
        password: password,
      })
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/admin']);
      });
  }
}
