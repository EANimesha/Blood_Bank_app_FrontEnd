import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private _http: HttpClient) { }

  // submit request
  add(body: any) {
    return this._http.post('http://localhost:3000/request/add',body,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // get All requests
  get(id){
    return this._http.get('http://127.0.0.1:3000/request/sent/' + id);
  }

  // get requests received for donars
  get_received_requests(id){
    return this._http.get('http://127.0.0.1:3000/request/received/' + id);
  }
}
