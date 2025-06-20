import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  standalone:true,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((a => (
      this.users = a)      
    ));
  }

}
