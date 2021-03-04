import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //dummy data 
  users: User[] = [
    {
      ticketNo: 111,
      name: "Jordan Sharma",
      movie: "Rockstar",
      seat: 18
    },
    {
      ticketNo: 191,
      name: "Anubhav Tomar",
      movie: "Mr India",
      seat: 54
    }
  ]

  constructor() { }

  onGet(){
    // displaying the dummy data
    return this.users
  }

  onGetUser(ticketNo: number){
    return this.users.find(x=>x.ticketNo === ticketNo);
  }

  onAdd(user : User){
    this.users.push(user);
  }

  onDelete(id:Number){
    let user = this.users.find(x=>x.ticketNo === id);
    let index = this.users.indexOf(user,0);
    this.users.splice(index,1);

  }

  onUpdate( user: User){

    let oldUser = this.users.find(x=>x.ticketNo === user.ticketNo);

    oldUser.name = user.name;
    oldUser.movie = user.movie;
    oldUser.seat = user.seat;

  }
}
