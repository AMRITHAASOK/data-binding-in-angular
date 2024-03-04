import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

dbemail: string="";
dbpassword: string="";

dataShowStatus: boolean = false;

status:string = 'Pending'

userDetails:any=[
  {username:"Amal",age:24},
  {username:"Kiran",age:34},
  {username:"Neethu",age:27},
  {username:"Mili",age:25},
  {username:"Ann",age:21},
]

  constructor( private ds:DataService){
    this.dbemail=this.ds.dsemail
    this.dbpassword=this.ds.dspassword
  }

  dataShow(){
    this.dataShowStatus=!this.dataShowStatus
  }

}
