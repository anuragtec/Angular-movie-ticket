import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: User[];


  //injecting the user service
  constructor( private userService: UserService) { }

  ngOnInit(): void {

     this.users = this.userService.onGet();
  }

  onDelete(id:Number){
    this.userService.onDelete(id);
  }

}
