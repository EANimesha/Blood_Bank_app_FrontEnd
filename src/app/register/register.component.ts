import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    password:  new FormControl(null, Validators.required)
  });
  constructor(private _router: Router,private _auth: AuthenticationService) { }

  ngOnInit() {
  }

  // moveToLogin(){
  //   this._router.navigate(['/login']);
  // }
  register(){
    if(!this.registerForm.valid){
      console.log('invalid form');
      return;
    }
    this._auth.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
  }
}
