import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { formatDate } from '@angular/common';

 
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginform=new FormGroup({
    mobilenumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    password:new FormControl( "",Validators.required),
   })
   login(){
    console.dir(this.loginform)
    this.loginform.reset();
  }
   today = Date.now();
    movingTimezone = this.today;
}