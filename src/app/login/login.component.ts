import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string="";//user email
  password: string="";//user password

  constructor(private loginRouter:Router,private ds:DataService){}

  login(){
    if(this.email && this.password){

      this.ds.dsemail=this.email;
      this.ds.dspassword=this.password

      this.loginRouter.navigateByUrl('dashboard')
    }
    else{
      alert('Please fill the form')
    }
    
  }
}
