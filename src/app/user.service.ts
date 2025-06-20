import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface User{
  name: string;
  id: number;
  email: string;
  role: string;
}
  
  @Injectable({
    providedIn: 'root'
  })

  export class UserService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    private users : User[] =[];

    constructor(private http: HttpClient){}
  
    getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  }
