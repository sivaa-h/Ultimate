import { Component, OnInit } from '@angular/core';
import { userService } from 'domain/services/UserService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    userService().getUsers().then((response: any) => {
      this.users = response
      console.log(this.users)
    });
  }

}
