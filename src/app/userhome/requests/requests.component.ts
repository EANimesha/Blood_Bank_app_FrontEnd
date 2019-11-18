import { User } from './../../models/User';
import { Requests } from './../../models/Request';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from 'src/app/requests.service';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  user: User;
  donars: User[] = [];
  id;
  requests : Requests[] =[]
  constructor(private route: ActivatedRoute , private _auth: AuthenticationService, private _req: RequestsService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    // getRequests
    this._req.get(this.id)
    .subscribe((res: any) => {
      this.requests = res;
      // console.log(this.requests[0]);
    }, err => {
      console.log(err);
    });
  }


  getUser(vid){
    // this._auth.getUser(vid).subscribe((res: any) => {
    //   this.user = res[0];
    //   console.log(this.user);
    // }, err => {
    //   console.log(err);
    // });
    console.log(vid);
    return vid;
  }

}
