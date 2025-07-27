import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { guardsGuard } from './guards.guard';

export const routes: Routes = [
    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path:'home' ,component:HomeComponent ,canActivate:[guardsGuard]},
    {path:'menu' ,component:MenuComponent ,canActivate:[guardsGuard]},
    {path:'about' ,component:AboutComponent ,canActivate:[guardsGuard]},
    {path:'product/:itemname' ,component:SingleproductComponent ,canActivate:[guardsGuard]},
    {path:'contact' ,component:ContactComponent ,canActivate:[guardsGuard]},
    {path:'cart',component:CartComponent ,canActivate:[guardsGuard]},
    {path:'register', component:RegisterComponent },
    {path:'login',component:LoginComponent },

];
