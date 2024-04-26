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

  private errorHandler(error: HttpErrorResponse) {
    alert(`${error.statusText}`)
    return throwError(() => new Error(`${error.message}`))
  }
}
