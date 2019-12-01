import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Requests } from 'src/app/models/Request';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-received-req',
  templateUrl: './received-req.component.html',
  styleUrls: ['./received-req.component.css']
})
export class ReceivedReqComponent implements OnInit {
  id;
  user: User;
  requests : Requests[] = [];
  constructor(private route: Router, private _req: RequestsService, private _auth: AuthenticationService) { }

  ngOnInit() {
    if (this._auth.isLoggedIn) {
      this._auth.getUser(123).subscribe((res: any) => {
        this.user = res['user'];
        // console.log(this.user);
      // getRequests
        this._req.get_received_requests(this.user._id)
        .subscribe((res: any) => {
          this.requests = res;
          console.log(this.requests);
          this.requests.forEach(element => {
            this._auth.getUserById(element.viewer_id).subscribe((res:any)=>{
              element.donar=res[0]
            })
          });
        }, err => {
          console.log(err);
        });
    });
    } else {
      window.alert('Please Logged In');
      this.route.navigate(['/login']);
    }
  }

}
