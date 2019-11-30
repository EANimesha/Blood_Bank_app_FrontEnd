import { AuthenticationService } from './../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  token: string;

  loginForm: FormGroup= new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password:  new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private _auth: AuthenticationService) { }

  moveToRegister(){
    this._router.navigate(['/register']);
  }
  ngOnInit() {
  }

  login(){
    if (!this.loginForm.valid) {
      console.log('invalid form');
      return;
    }
    // console.log(JSON.stringify(this.loginForm.value));
    this._auth.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      (data:any) => {
        this.token = data;
        this._auth.saveToken(this.token);
        // this.user = data;
        // // console.log(this.user._id);
        // this._router.navigate(['/user/', this.user._id]);
        this._router.navigate(['/user']);
      } ,
      error => console.error(error)
    );
  }

}
