import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SerbisyoService {

  constructor(private http: HttpClient) {

    
   }
   baseURL: string = "http://localhost/demoproject/api/";

   send(){
    const result = this.http.get(this.baseURL + "employees")

    return result;
   }
}
