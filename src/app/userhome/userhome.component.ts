import { RequestsService } from './../requests.service';
import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  searchText;
  user: User;
  id;
  first_name: string;
  donar: boolean;
  constructor(private route: Router , private _auth: AuthenticationService, private _req: RequestsService) {
    // console.log()
  }

  ngOnInit() {
    if (this._auth.isLoggedIn) {
      this._auth.getUser(123).subscribe((res: any) => {
        this.user = res['user'];
        // console.log(this.user);
      });
    } else {
      window.alert('Please Logged In');
      this.route.navigate(['/login']);
    }
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   // console.log(this.id)
    //   this._auth.getUser(this.id).subscribe((res: any) => {
    //     this.user = res[0];
    //     console.log(this.user);
    //   }, err => {
    //     console.log(err);
    //   });
  }

    // //getDonars
    // this._auth.getDonars()
    // .subscribe((res: any) => {
    //   this.donars = res;
    //   // console.log(this.donars);
    // }, err => {
    //   console.log(err);
    // });

  }
