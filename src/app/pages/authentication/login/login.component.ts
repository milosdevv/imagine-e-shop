import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  @ViewChild('loginForm') loginForm: NgForm;
  onFormSubmitted() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe((loggedIn) => {
        if (loggedIn) {
          this.router.navigate(['/admin']);
        } else {
          alert('Invalid email or password');
        }
      });
    }
    console.log('login succesful');
    console.log(this.loginForm.value);
  }
}
