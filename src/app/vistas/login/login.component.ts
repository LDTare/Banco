import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    Username : new FormControl('', Validators.required),
    Password : new FormControl('', Validators.required)
  })

  constructor(private titulo:Title) {
    titulo.setTitle("Little Are")
   }

  ngOnInit(): void {
  }

  onLogin(form: any){
    console.log(form)
  }
}
