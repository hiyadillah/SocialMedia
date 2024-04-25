import { Injectable } from '@angular/core';
import { Commentary } from '../interfaces/commentary';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.example';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  httpHeader = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  createComment(body: Commentary): Observable<HttpResponse<Commentary>> {
    return this.http.post<Commentary>(`${environment.baseUrl}posts`, JSON.stringify(body), { headers: this.httpHeader, observe: 'response' })
  }
  updateComment(body: Commentary): Observable<HttpResponse<Commentary>> {
    return this.http.put<Commentary>(`${environment.baseUrl}posts/${body.id}`, JSON.stringify(body), { headers: this.httpHeader, observe: 'response' })
  }
  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.baseUrl}posts/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
}
