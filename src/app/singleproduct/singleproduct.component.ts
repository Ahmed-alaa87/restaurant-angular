import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singleproduct',
  standalone: true,
  imports: [CommonModule ,FormsModule ],
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent implements OnInit {
singleproduct:any={}
Quantity:number=1;
cartitems:any=[]
  constructor(private _single:ServiceService,private _route:Router, private Activ:ActivatedRoute){}

  ngOnInit(): void {
    this.Activ.params.subscribe((res)=>{
     console.log(res)
     this._single.getsingle(res['itemname']).subscribe((data)=>{
      this.singleproduct=data[0]
      console.log(this.singleproduct)
      console.log(this.Quantity)


     })
    })
  }

  show(data: any) {
    const dataFromStorage = localStorage.getItem("Food");
    try {
      const parsed = dataFromStorage ? JSON.parse(dataFromStorage) : [];
      this.cartitems = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("❌ localStorage parsing error", e);
      this.cartitems = [];
    }
  
    let exist = this.cartitems.find((item: any) => item.itemID == data.itemID);
  
    if (exist) {
      alert("This item already exists.");
    } else {
      data.quantity = this.Quantity;
      this.cartitems.push(data);
      localStorage.setItem("Food", JSON.stringify(this.cartitems));
      alert("تمت الإضافة بنجاح ✅");
      console.log(this.cartitems);
    }
  }
  
  back(){
    this._route.navigate(["home"])
  }
}
