import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  user: User;
  donars : User[] = [];
  id;
  first_name: string;
  constructor(private route: ActivatedRoute , private _auth: AuthenticationService) {
    // console.log()
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
      // console.log(this.id)
      this._auth.getUser(this.id).subscribe((res: any) => {
        this.user = res[0];
        console.log(this.user);
      }, err => {
        console.log(err);
      });
    });

    //getDonars
    this._auth.getDonars()
    .subscribe((res: any) => {
      this.donars = res;
      // console.log(this.donars);
    }, err => {
      console.log(err);
    });

  }

}
