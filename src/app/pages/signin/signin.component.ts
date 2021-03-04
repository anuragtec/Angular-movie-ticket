import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userName: string;
  userEmail: string;
  userPassword: string;
  userGender: string;

  constructor(private router :Router) { }

  ngOnInit(): void {
  }

  loginUser(signInForm: NgForm){
    this.userName = signInForm.value.nameField;
    this.userEmail = signInForm.value.emailField;
    this.userPassword = signInForm.value.passwordField;
    this.userGender = signInForm.value.genderField;



    //  console.log(this.userName)
    // console.log(signInForm.value.nameField)
    this.router.navigateByUrl('');
  }
  
}
