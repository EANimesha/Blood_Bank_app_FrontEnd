import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/authentication.service";
import { RequestsService } from "src/app/requests.service";
import { User } from "src/app/models/User";
import { FilterPipe } from "ngx-filter-pipe";
import { Route } from "@angular/compiler/src/core";

@Component({
  selector: "app-donars",
  templateUrl: "./donars.component.html",
  styleUrls: ["./donars.component.css"]
})
export class DonarsComponent implements OnInit {
  searchText;
  user: User;
  id;
  first_name: string;
  donar: Boolean;
  donars: User[] = [];
  userFilter: any = { first_name: "" };
  constructor(
    private route: Router,
    private _auth: AuthenticationService,
    private _req: RequestsService,
    private filterPipe: FilterPipe
  ) { }

  ngOnInit() {
    // this.route.parent.params.subscribe(params => {
    //   this.id = params['id'];
    //   // console.log(this.id)
    //   this._auth.getUser(this.id).subscribe((res: any) => {
    //     // this.user = res[0];
    //     console.log(res);
    //   }, err => {
    //     console.log(err);
    //   });
    // });

    if (this._auth.isLoggedIn) {
      this._auth.getUser(123).subscribe((res: any) => {
        this.user = res['user']
      });

      //getDonars
      this._auth.getDonars().subscribe(
        (res: any) => {
          this.donars = res;
          // console.log(this.donars);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      window.alert('Please Logged In');
      this.route.navigate(['/login']);
    }
  }

  submitRequest(donar_id: any, event) {
    this._req
      .add(JSON.stringify({ viewer_id: this.id, donar_id: donar_id }))
      .subscribe(
        data => {
          console.log(data);
          window.alert(JSON.stringify(data));
        },
        error => {
          console.error(error);
          window.alert(JSON.stringify(error));
        }
      );
  }
}
