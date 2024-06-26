import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseurl:string = 'https://gulf.carpulla.com/public';
  private apiPassword = '@#$gulf@#$GENIO';

  constructor(private _HttpClient:HttpClient) { }



  
  sendContactMain(contactForm:FormGroup) : Observable<any>
  {
    const headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });
   return this._HttpClient.post(`${this.baseurl}/api/v1/front/contacts`,contactForm, {headers})
  }
}
