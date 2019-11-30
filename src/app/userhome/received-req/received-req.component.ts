import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/requests.service';
import { ActivatedRoute } from '@angular/router';
import { Requests } from 'src/app/models/Request';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-received-req',
  templateUrl: './received-req.component.html',
  styleUrls: ['./received-req.component.css']
})
export class ReceivedReqComponent implements OnInit {
  id;
  requests : Requests[] = [];
  constructor(private route: ActivatedRoute, private _req: RequestsService, private _auth: AuthenticationService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.id = params['id'];
    });

    // getRequests
    this._req.get_received_requests(this.id)
    .subscribe((res: any) => {
      this.requests = res;
      this.requests.forEach(element => {
        this._auth.getUser(element.viewer_id).subscribe((res:any)=>{
          element.donar=res[0]
        })
      });
    }, err => {
      console.log(err);
    });
  }

}
