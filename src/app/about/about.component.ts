import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  product:any=[]
  loading:boolean=false
constructor(private _service:ServiceService){
  this.loading=true
  this._service.getAllFoods().subscribe((res:any)=>{
this.product=res
this.loading=false

  })
}
}
