import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.example';
import { Commentary } from '../interfaces/commentary';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpHeader = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }
  getPost(id: number): Observable<HttpResponse<Post>> {
    return this.http.get<Post>(`${environment.baseUrl}posts/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
  getPostComment(id: number): Observable<HttpResponse<Commentary[]>> {
    return this.http.get<Commentary[]>(`${environment.baseUrl}posts/${id}/comments`, { headers: this.httpHeader, observe: 'response' })
  }

  createPost(body: Post): Observable<HttpResponse<Post>> {
    return this.http.post<Post>(`${environment.baseUrl}posts`, JSON.stringify(body), { headers: this.httpHeader, observe: 'response' })
  }
  updatePost(body: Post): Observable<HttpResponse<Post>> {
    return this.http.put<Post>(`${environment.baseUrl}posts/${body.id}`, JSON.stringify(body), { headers: this.httpHeader, observe: 'response' })
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.baseUrl}posts/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
}
