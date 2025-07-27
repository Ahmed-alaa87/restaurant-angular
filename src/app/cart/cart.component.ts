import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  gatdata:any=[]
  forms:any=[]
  total:any=0
  select:boolean=false
  orderSuccess = false;
 constructor(private _share:ServiceService){}
ngOnInit(): void {
  this.getdata()
  this.gettotal()
}

 getdata(){
  this.gatdata=this._share.sharedata()
  console.log(this.gatdata)
 }

 delet(id:number){
  console.log(id)
  this.gatdata.splice(id,1)
  localStorage.setItem("Food" , JSON.stringify(this.gatdata))
  this.gettotal()
 }

 deletall(){
  this.gatdata=[];
  localStorage.setItem("Food" , JSON.stringify(this.gatdata))
  this.gettotal()

 }

 form= new FormGroup({
  name:new FormControl(null,[Validators.maxLength(8) ,Validators.required ,Validators.minLength(3) ]),
  email:new FormControl(null,[Validators.maxLength(5) , Validators.required ,Validators.minLength(1)]),
  massage:new FormControl(null,[Validators.maxLength(50) , Validators.required ,Validators.minLength(3) ]),

})
data(form:any){
  console.log(form.valid)
  this.forms =this.form.value
  console.log(this.forms)
  }

  gettotal(){
    this.total = 0;
    for (let x in this.gatdata) {
      this.total += this.gatdata[x].itemPrice * this.gatdata[x].quantity;
    }
    // localStorage.setItem("Food", JSON.stringify(this.total) )
  }
    

  // part order
     submitfirm=new FormGroup({
    Firstname:new FormControl('' ,[Validators.minLength(3),Validators.maxLength(20), Validators.required]),
    Lastname:new FormControl('' ,[Validators.minLength(3),Validators.maxLength(20), Validators.required]),
    phone:new FormControl('' ,[Validators.minLength(10),Validators.maxLength(15) ,Validators.required ]),
    Address:new FormControl('' ,[Validators.minLength(3),Validators.maxLength(30), Validators.required]),
    Apartment:new FormControl('' , [Validators.minLength(3),Validators.maxLength(30), Validators.required]),
    Postal:new FormControl('' ,[Validators.minLength(2),Validators.maxLength(7), Validators.required]),
    City:new FormControl('',[Validators.minLength(3),Validators.maxLength(20), Validators.required]),



  })
  submit(data:any){

  if (data.valid) {
    console.log(data.value);
    alert('تم الطلب بنجاح ')
    this.submitfirm.reset();
  }  
  
}
}
