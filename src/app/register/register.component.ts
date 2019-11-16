import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // type: 1;
  options: FormGroup;
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    password:  new FormControl(null, Validators.required),
    donar: new FormControl(null, Validators.required),
    blood_type: new FormControl(),
    weight: new FormControl(),
    height : new FormControl(),
  });

  constructor(private _router: Router,private _auth: AuthenticationService, fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: 1,
    });
   }

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
  // changeType(){
  //   this.type=this.options.value.floatLabel;
  //   console.log(this.type);
  // }
  // loadForm(){
  //   if(this.type===1){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
}
