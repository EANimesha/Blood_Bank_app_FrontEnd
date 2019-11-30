import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';
import { User, UserDetails } from './models/User';
import { map } from 'rxjs/operators';

export class LoginUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;

  constructor(private _http: HttpClient,private _rout: Router) { }

  public saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this._rout.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

//////////////////////////////////////////////////////////////


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

  getUser(id: any){
    const headers = new HttpHeaders({Authorization: `Bearer ${this.getToken()}`}).set('Content-Type', 'application/json');
    return this._http.get('http://127.0.0.1:3000/viewers/user',{headers});
  }

  getDonars(){
    return this._http.get('http://127.0.0.1:3000/viewers/donars');
  }
}
