import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getPosts():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}