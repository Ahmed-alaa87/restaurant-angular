import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  forms:any[]=[]

constructor(private _register:ServiceService , private _route:Router){
  this.forms=this._register.shareregister()
  let random=this._register.shareregister().email
  console.log(random)
  let random2=this._register.shareregister().password
  console.log(random2)


}
form=new FormGroup({
  email:new FormControl('',[Validators.maxLength(30),Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ,Validators.required ]),
  password:new FormControl('',[Validators.maxLength(20),Validators.minLength(8) ,Validators.required ])
    })




    submit(form:any){
      // login
    let random3=form.value.email
      console.log(random3)
     let random4=form.value.password
      console.log(random4)
//  register
let random=this._register.shareregister().email
  console.log(random)
  let random2=this._register.shareregister().password
  console.log(random2)
      // 
if (random === random3 && random2 ===random4 ) {
  this._route.navigate(["./home"])
  this._register.islogin.next(true)

  
}else{
  alert('please Entre Correct')
}
    }


    navigate(){
      this._route.navigate(["register"])
    }
}
