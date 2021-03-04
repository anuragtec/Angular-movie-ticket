import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  ticketNo: number;
  header: string;
  user: User = {
    ticketNo: 0,
    name: '',
    movie: '',
    seat: 0
  }

  constructor(private router :Router ,private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    //explicitely converting back to number
    this.ticketNo = +this.route.snapshot.paramMap.get('ticketNo');

    this.header = this.ticketNo === 0? 'Add Ticket' : 'Edit User'

    if(this.ticketNo != 0){
      // this.user = this.userService.onGet(this.ticketNo)
      this.user = this.userService.onGetUser(this.ticketNo)

    }
  }

  onSubmit(form: NgForm){
    let user : User = {
      ticketNo: form.value.id,
      name: form.value.name,
      movie: form.value.movie,
      seat: form.value.seat,

    }
    if(this.ticketNo === 0){
      this.userService.onAdd(user);

    }else{
      this.userService.onUpdate(user)
    }

    //going back to home page
    this.router.navigateByUrl('');
  }

}
