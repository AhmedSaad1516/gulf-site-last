import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private postUrl = 'https://gulf.carpulla.com/public/api/v1/front/posts';
  private postUrlTeam = 'https://gulf.carpulla.com/public/api/v1/front/teams';
  private postUrlhistories = 'https://gulf.carpulla.com/public/api/v1/front/histories';
  private postUrlhsettings = 'https://gulf.carpulla.com/public/api/v1/front/settings';
  private postUrlinvestments = 'https://gulf.carpulla.com/public/api/v1/front/investments';
  private postUrlactivitiess = 'https://gulf.carpulla.com/public/api/v1/front/activities';



  private apiPassword = '@#$gulf@#$GENIO';
  lang: any;

  constructor(private http: HttpClient) { }

  private createHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });

    if ('lang' in localStorage) {
      this.lang = localStorage.getItem('lang');
      headers = headers.append('lang', this.lang as string);
    }

    return headers;
  }

  getAllPost(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.postUrl, { headers });
  }

  getAllTeams(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.postUrlTeam, { headers });
  }

  getAllhistories(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.postUrlhistories, { headers });
  }

  getAllsettings(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.postUrlhsettings, { headers });
  }

  getAllinvestments(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.postUrlinvestments, { headers });
  }
  getAllactivities(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.postUrlactivitiess, { headers });
  }

}
