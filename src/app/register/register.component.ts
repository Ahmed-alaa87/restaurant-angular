import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
regiser:any=[]
login:boolean=false
  constructor(private _route:Router , private _service:ServiceService){
    this._service.islogin.subscribe((res:boolean)=>{
console.log(res)
    })
  }






  form=new FormGroup({
first:new FormControl('',[Validators.maxLength(8),Validators.minLength(3) ,Validators.required ]),
last: new FormControl('',[Validators.maxLength(8),Validators.minLength(3) ,Validators.required ]),
email:new FormControl('',[Validators.maxLength(30),Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ,Validators.required ]),
password:new FormControl('',[Validators.maxLength(20),Validators.minLength(8) ,Validators.required ])
  })
  submit(form:any){
        if (form.valid) {
          this._route.navigate(['login'])  
          this.local()
          }else{
            alert('please Entre data')
          }
      }

local(){
if (this.form.valid) {
  this.regiser=JSON.parse(localStorage.getItem("Form")!)
this.regiser=this.form.value
localStorage.setItem("form", JSON.stringify(this.regiser))
}
      }
  }

  

