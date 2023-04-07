//imports 
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormGroup, FormControl } from '@angular/forms';

//Component decorator
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {
  //variable declaration
  emailId: any;
  password: any;
  userForm: any;
  //interpolation --> here we have text in title which is diplayed in the html file that is sharing data from ts --> html
  title: any = 'Welcome to School App';
 
  // this is to capture all the data from the html to ts
  studentLogin = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl(''),
  });

  saveData() {
    console.log('Data captured from the html to ts file');
    console.log(this.studentLogin.value, '-- consists of entire form data');
  }

  //change in the text box the data is captured here from html to ts
  check(value: any) {
    this.emailId = value.target.value;
    console.log(
      this.emailId,
      '--from onchange that is when ever there is the change in the text box the data is captured here'
    );
  }

  constructor() {
    axios({
      method: 'post',
      url: '/login',
      data: {
       ...this.studentLogin.value
      },
      
    });
  }
  ngOnInit(): void {}
}
