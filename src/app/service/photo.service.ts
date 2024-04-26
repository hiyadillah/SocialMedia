import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interfaces/photo';
import { environment } from '../../environments/environment.example';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  httpHeader = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  getPhoto(id: number): Observable<HttpResponse<Photo>> {
    return this.http.get<Photo>(`${environment.baseUrl}photos/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
}
