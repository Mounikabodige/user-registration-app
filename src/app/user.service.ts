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
    private users : User[] =[
      { id: 1, name: 'Mounika', email: 'mounika@example.com', role: 'Admin' },
    { id: 2, name: 'Ravi', email: 'ravi@example.com', role: 'User' },
    { id: 3, name: 'Anita', email: 'anita@example.com', role: 'User' },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  }
