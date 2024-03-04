import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
      studentName:string ="meera"
      studentUrl:string="https://www.pngitem.com/pimgs/m/546-5468612_banner-library-college-vector-graduated-student-transparent-student.png"

      studentAddr:string=""
      studentph:string=""
      studentemail:string=""

      addStudent=()=>{
        alert("Please enter a student name")
      }

      getStudentName=(event:any)=>{
          console.log(event.target.value); 
      }

      username(username:any){
        console.log(username.value);
        alert(`${username.value} added`)
        
      }

      studentDetails(){
        alert(`Student Address:${this.studentAddr},
        Student Phone number : ${this.studentph},
        Student Email :${this.studentemail}
        `)
      }

    }
