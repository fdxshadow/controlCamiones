import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  userForm:FormGroup;

  

  constructor(private _builder:FormBuilder) {

    this.userForm = this._builder.group({
      'nombre': new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required])
    });

   }

  ngOnInit() {
    
  }


  login(formularioValue){
    console.log(formularioValue);
    //console.log(this.user)
  }

}
