import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
products:any[]=[]
loading:boolean=false
constructor(private _data:ServiceService , private _route:Router){}

ngOnInit(): void {
  // this.products.splice(16,1)
  AOS.init({
    duration: 600, 
    easing: 'ease-in-out', 
    once: false,        
    mirror: true,      
    delay: 100  
  });
  this.getall()
  AOS.refresh()

}

getall(){
  this.loading=true
this._data.getAllFoods().subscribe((res:any)=>{
this.products=res
this.loading=false
console.log(this.products)
})
}

getdata(product:any){
  console.log(product)
}

single(itemname: string): void {
  this._route.navigate(['product', itemname]);
}
}
