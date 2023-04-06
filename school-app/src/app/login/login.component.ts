import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {
   emailId :any ;
  password :any;
  title: any = 'Welcome to School App';

  userForm: any;
  studentLogin = new FormGroup({
    emailId: new FormControl(''),
    password : new FormControl('')
  });
  saveData(){
    console.log("hello");
    console.log(this.studentLogin.value,"-- consists of entire form data");
  }
  constructor() {
    axios({
      method: 'post',
      url: '/login',
      data: {
        firstName: 'Finn',
        lastName: 'Williams',
      },
    });
  }
  ngOnInit(): void {}
}
