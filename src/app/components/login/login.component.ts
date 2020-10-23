import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  login(): string {
    let userLogged = 'invalid_form';

    if (this.loginForm.valid) {
      if (this.loginForm.value.email === 'phils@gmail.com' && this.loginForm.value.password === '123456') {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
    }
    return userLogged;
  }

}
