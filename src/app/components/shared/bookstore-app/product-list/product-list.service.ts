import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private url = 'http://localhost:8080/book';
  
  private httpOptions = {
    Headers: new HttpHeaders({'content-type' : 'application/json'})
  }

  constructor(private http:HttpClient) { }

  getBook(){
    return this.http.get(this.url);
  }
}
