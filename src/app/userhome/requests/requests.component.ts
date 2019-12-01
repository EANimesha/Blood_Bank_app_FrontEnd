import { User } from './../../models/User';
import { Requests } from './../../models/Request';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: Router , private _auth: AuthenticationService, private _req: RequestsService ) { }

  ngOnInit() {
    if (this._auth.isLoggedIn) {
      this._auth.getUser(123).subscribe((res: any) => {
        this.user = res['user'];
        // console.log(this.user);


        // getRequests
        this._req.get(this.user._id)
        .subscribe((res: any) => {
          this.requests = res;
          this.requests.forEach(element => {
            this._auth.getUser(element.donar_id).subscribe((res:any)=>{
              element.donar=res[0]
            })
          });
          // console.log(this.requests);

        }, err => {
          console.log(err);
        });
    });
    } else {
      window.alert('Please Logged In');
      this.route.navigate(['/login']);
    }

  }


  getUser(vid){
    // this._auth.getUser(vid).subscribe((res: any) => {
    //   this.user = res[0];
    //   console.log(this.user);
    // }, err => {
    //   console.log(err);
    // });
    // console.log(vid);
    return vid;
  }

}
