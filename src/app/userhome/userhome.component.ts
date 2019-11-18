import { RequestsService } from './../requests.service';
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
  searchText;
  user: User;
  donars : User[] = [];
  id;
  first_name: string;
  donar:Boolean;
  constructor(private route: ActivatedRoute , private _auth: AuthenticationService, private _req: RequestsService) {
    // console.log()
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
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

  submitRequest(donar_id: any,event){
    this._req.add(JSON.stringify({viewer_id: this.id, donar_id:donar_id}))
    .subscribe(
      data=> {console.log(data); window.alert(JSON.stringify(data))},
      error=>{console.error(error);window.alert(JSON.stringify(error));}
    )
  }

}
