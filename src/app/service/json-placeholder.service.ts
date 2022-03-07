import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonPLaceholderService {

  url = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

    getData(): Observable<any> {
    return this.http.get<any>(this.url+"/albums")

  }

  postData(dat: any){

    return this.http.post(this.url+"/albums", dat)

    }

 
}
