import { Component, OnInit } from '@angular/core';
import { LoginActionService } from './login-action.service';
import { JsonpInterceptor } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  login = '';
  password = '';
  loginError = false;
  constructor( private loginService: LoginActionService,
                private router: Router) { }

  ngOnInit() {
  }

  onLoginButtonClick(login: string, password: string): boolean {
    return this.loginService.authenticateUser(login, password)
      .subscribe((response) => {
        if (response.success === 'true') {
          this.loginService.createLocalSession(login);
          this.router.navigate(['/search']);
        } else if (response.success === 'false') {
          this.loginError = true;
        }
      },
      (error) => {
        this.loginError = true;
        alert(error);
      });
  }

  onRegisterButtonClick(): void {
    this.router.navigate(['/register']);
  }

}
