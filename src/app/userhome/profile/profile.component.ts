import { User } from './../../models/User';
import { ProfileService } from './../../profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private _profile: ProfileService , private _auth: AuthenticationService, fb: FormBuilder) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.id = params['id'];
      // console.log(this.id)
      this._auth.getUser(this.id).subscribe((res: any) => {
        this.user = res[0];
        // console.log(this.user);
        this.updateForm.patchValue(this.user);
      }, err => {
        console.log(err);
      });
    });
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
