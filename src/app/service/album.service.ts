import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.example';
import { Album } from '../interfaces/album';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  httpHeader = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  getAlbum(id: number): Observable<HttpResponse<Album>> {
    return this.http.get<Album>(`${environment.baseUrl}albums/${id}`, { headers: this.httpHeader, observe: 'response' })
  }
  getAlbumPhoto(id: number): Observable<HttpResponse<Photo[]>> {
    return this.http.get<Photo[]>(`${environment.baseUrl}albums/${id}/photos`, { headers: this.httpHeader, observe: 'response' })
  }
}
