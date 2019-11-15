import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';
import {User} from './models/User';
import { map } from 'rxjs/operators';

export class LoginUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  register(body: any) {
    return this._http.post('http://127.0.0.1:3000/viewers/register',body,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any) {
    return this._http.post('http://127.0.0.1:3000/viewers/login',body,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
