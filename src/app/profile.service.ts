import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }

  update(body: any, id: any) {
    return this._http.put('http://localhost:3000/profile/' + id, body, {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


}
