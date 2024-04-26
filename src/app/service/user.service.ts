import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment.example';
import { Post } from '../interfaces/post';
import { Album } from '../interfaces/album';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeader = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }
  getAllUser(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(`${environment.baseUrl}users`, { headers: this.httpHeader, observe: 'response' })
  }
  getUser(id: number): Observable<HttpResponse<User>> {
    return this.http.get<User>(`${environment.baseUrl}users/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
  getUserPost(id: number): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(`${environment.baseUrl}users/${id}/posts`, { headers: this.httpHeader, observe: 'response' })
  }
  getUserAlbum(id: number): Observable<HttpResponse<Album[]>> {
    return this.http.get<Album[]>(`${environment.baseUrl}users/${id}/albums`, { headers: this.httpHeader, observe: 'response' })
  }
}
