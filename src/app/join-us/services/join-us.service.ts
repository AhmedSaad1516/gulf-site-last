import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinUsService {

  constructor(private _HttpClient:HttpClient) { }
  baseurl:string = 'https://gulf.carpulla.com/public';
  private apiPassword = '@#$gulf@#$GENIO';

  sendChanceMain(joinUsFrom:any) : Observable<any>
  {
    const headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });
   return this._HttpClient.post(`${this.baseurl}/api/v1/front/chance`,joinUsFrom, {headers})
  }

  getAllFlagsMain() : Observable<any>
  {
   return this._HttpClient.get<any[]>('https://restcountries.com/v2/all')
  }

  getAllCountriesInfoMain() : Observable<any>
  {
    return this._HttpClient.get('https://restcountries.com/v3.1/all')
  }
}
