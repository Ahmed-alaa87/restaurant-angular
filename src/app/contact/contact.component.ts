import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 forms:any=[]
 product:any=[]
 loading:boolean=false
constructor(private _service:ServiceService){
  this.loading=true
this._service.getAllFoods().subscribe((res:any)=>{
this.product=res
this.loading=false
})
}
  form= new FormGroup({
    name:new FormControl(null,[Validators.maxLength(8) ,Validators.required ,Validators.minLength(3) ]),
    email:new FormControl(null,[Validators.maxLength(15) , Validators.required ,Validators.minLength(3)]),
    massage:new FormControl(null,[Validators.maxLength(50) , Validators.required ,Validators.minLength(3) ]),

  })
data(form:any){
console.log(form.valid)
this.forms =this.form.value
console.log(this.forms)
}
}
