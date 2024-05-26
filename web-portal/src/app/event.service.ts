import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _registerUrl = 'http://localhost:3001/api';


  constructor(private http:HttpClient) { }

  getEvents(){
    return this.http.get<any>(`${this._registerUrl}/events`);
  }

  getEventSpecials(){
    return this.http.get<any>(`${this._registerUrl}/specials`);
  }




}
