import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.example';
import { User } from '../interfaces/user';
import { Observable, throwError } from 'rxjs';
import { Post } from '../interfaces/post';
import { Album } from '../interfaces/album';
import { Commentary } from '../interfaces/commentary';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
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
  getPost(id: number): Observable<HttpResponse<Post>> {
    return this.http.get<Post>(`${environment.baseUrl}posts/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
  getPostComment(id: number): Observable<HttpResponse<Commentary[]>> {
    return this.http.get<Commentary[]>(`${environment.baseUrl}posts/${id}/comments`, { headers: this.httpHeader, observe: 'response' })
  }
  getAlbum(id: number): Observable<HttpResponse<Album>> {
    return this.http.get<Album>(`${environment.baseUrl}albums/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
  getAlbumPhoto(id: number): Observable<HttpResponse<Photo[]>> {
    return this.http.get<Photo[]>(`${environment.baseUrl}albums/${id}/photos`, { headers: this.httpHeader, observe: 'response' })
  }
  getPhoto(id: number): Observable<HttpResponse<Photo>> {
    return this.http.get<Photo>(`${environment.baseUrl}photos/${id}`, { headers: this.httpHeader, observe: 'response' })
  }

  private errorHandler(error: HttpErrorResponse) {
    alert(`${error.statusText}`)
    return throwError(() => new Error(`${error.message}`))
  }
}
