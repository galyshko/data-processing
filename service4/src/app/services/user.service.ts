import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list = new BehaviorSubject<IUser[]>([])


  //url:string="http://localhost:8080/users/Servlet1"
  url:string="http://localhost:8076/lab4/Servlet1"
  //USERS:IUser[]=[{id:1, name:"Roman",age:49}, {id:2, name:"Olena",age:29}]

  constructor(private http:HttpClient) { }

getUsers():Observable<IUser[]>{
 return this.http.get<IUser[]>(this.url);
}
postUser(user:IUser):Observable<IUser[]>{
  return this.http.post<IUser[]>(this.url,user);
 }

 putUser(user:IUser):Observable<IUser[]>{
  return this.http.put<IUser[]>(this.url+"/"+user.id, user);
 }
 deleteUser(user:IUser):Observable<IUser[]>{
  return this.http.delete<IUser[]>(this.url+"/"+user.id);
 }

}
