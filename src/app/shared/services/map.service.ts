import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  private locationsUrl = 'https://gulf.carpulla.com/public/api/v1/front/locations';
  private areasUrl = 'https://gulf.carpulla.com/public/api/v1/front/areas';
  private apiPassword = '@#$gulf@#$GENIO';
  private apiUrl = 'https://gulf.carpulla.com/public/api/v1/front/locations';

  constructor(private http: HttpClient) { }

  getLocations(areaId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });
    const url = `${this.locationsUrl}?area_id=${areaId}`;
    return this.http.get<any>(url, { headers });
  }

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLocationsAll(): Observable<any> {
    const headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });
    const url = `${this.locationsUrl}`;
    return this.http.get<any>(url, { headers });
  }
  getAreas(): Observable<any> {
    const headers = new HttpHeaders({
      'Apipassword': this.apiPassword
    });
    return this.http.get<any>(this.areasUrl, { headers });
  }
}




