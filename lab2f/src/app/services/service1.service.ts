import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../interfaces/entity'; 
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
url:string="http://localhost:8078/lab2/servlet1"

constructor(private http:HttpClient){}

  getEntities():Observable<Entity[]>{
    return this.http.get<Entity[]>(this.url);
  }



}

