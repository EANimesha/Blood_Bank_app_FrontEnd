import { User } from './../../models/User';
import { ProfileService } from './../../profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id;
  user: User;

  updateForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    password:  new FormControl(null, Validators.required),
    donar: new FormControl(null, Validators.required),
    blood_type: new FormControl(),
    weight: new FormControl(),
    height : new FormControl(),
  });

  constructor(private route: Router, private _profile: ProfileService , private _auth: AuthenticationService, fb: FormBuilder) { }

  ngOnInit() {
    if (this._auth.isLoggedIn) {
      this._auth.getUser(123).subscribe((res: any) => {
        this.user = res['user'];
        this.updateForm.patchValue(this.user);
        // console.log(this.user);
      });
    } else {
      window.alert('Please Logged In');
      this.route.navigate(['/login']);
    }
  }
  update(){
    if(!this.updateForm.valid){
      console.log('invalid form');
      return;
    }
    this._profile.update(JSON.stringify(this.updateForm.value), this.id)
    .subscribe(
      data => {console.log(data); },
      error => console.error(error)
    );
    // console.log(JSON.stringify(this.updateForm.value));
  }

}
