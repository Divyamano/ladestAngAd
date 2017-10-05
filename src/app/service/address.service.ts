import { Injectable } from '@angular/core'; 
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'; 

import 'rxjs/add/operator/toPromise';

@Injectable() 
export class AddressService {
constructor(private http: Http) 
{}
getDetails(){
    return this.http.get("https://addresspring.herokuapp.com/addressbook")
         .map(res => res.json());
 }
 addAdress(info){
    return this.http.post("https://addresspring.herokuapp.com/addressbook",info).map(res => res.json());
  }
  removeAddress(info){
    return this.http.delete("https://addresspring.herokuapp.com/addressbook/"+info).map(res => res.json());
  }

}