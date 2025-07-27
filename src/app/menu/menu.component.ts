import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { stringify } from 'node:querystring';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  loading:boolean=false
  boolen:boolean=false
  // binding:number=1
  // mainCourse:any[]=[]
  cartitems:any=[]
  expensive:any[]=[]
  selectedItems: any[] = [];
  selectedRestaurant: string = '';
constructor(private _service:ServiceService , private _route:Router){}


ngOnInit(): void {
  this.getdata()
  this.expensive.splice(0,1)

}

getdata(){
  this.loading=true
  this._service.catgory().subscribe((res:any)=>{
    console.log(res);
    this.expensive=res
    this.expensive.splice(1,1)
    this.loading=false
    })
}

showItemsForRestaurant(restaurant: any) {
  this.loading=true
  console.log(restaurant);

  this.selectedRestaurant = restaurant.restaurantName;
  this._service.singlecatgory(restaurant.restaurantID).subscribe((res: any) => {
    console.log(res);
    this.selectedItems = res.map((item: any) => ({
      ...item,
      quantity: 1
    }));    
    this.boolen=true
    this.loading=false

  });
}



showdata(data: any) {
  const itemdata = { ...data, quantity: data.quantity };
  console.log("📦 itemdata:", itemdata);

  try {
    const stored = localStorage.getItem("Food");
    const parsed = stored ? JSON.parse(stored) : [];

    this.cartitems = Array.isArray(parsed) ? parsed : [];

    let exist = this.cartitems.find((item: any) => 
      item.itemID === itemdata.itemID && item.restaurantName === itemdata.restaurantName
    );

    if (exist) {
      alert("This item already exists.");
    } else {
      this.cartitems.push(itemdata);
      localStorage.setItem("Food", JSON.stringify(this.cartitems));
      alert("تمت الإضافة بنجاح");
    }
  } catch (error) {
    console.error("❌ localStorage error:", error);
    this.cartitems = [];
  }
}


  back(){
    this._route.navigate(["menu"])
  }

}
