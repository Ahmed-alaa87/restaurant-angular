import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule , RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  login:any;
constructor(private _service:ServiceService , private _route:Router){}

ngOnInit(): void {
  this._service.islogin.subscribe((res:boolean)=>{
    console.log(res)
    this.login=res

      })
}
navigete(){
this._service.islogin.next(true)
this._route.navigate(['login'])
}
}
