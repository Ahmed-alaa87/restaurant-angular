import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  shareregister(){
  const form =localStorage.getItem("form")
  return form ? JSON.parse(form): [];
}
  sharedata() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartitems = localStorage.getItem("Food");
      try {
        return cartitems ? JSON.parse(cartitems) : [];
      } catch (e) {
        console.error('JSON parse error:', e);
        return [];
      }
    }
    return [];
  }
  
  
  constructor(private _http:HttpClient) { }

  getAllFoods() :Observable<any>{
    return this._http.get('/api/Restaurant/items')

  }
 
  getsingle(itemName: string): Observable<any> {
    return this._http.get(`/api/Restaurant/items?ItemName=${itemName}`);
  }
  catgory(): Observable<any> {
    return this._http.get('/api/Restaurant');
  }

  singlecatgory(id: number) :Observable<any>{
    return this._http.get(`/api/Restaurant/${id}/menu`);   
   }
    islogin=new BehaviorSubject(false)  
}
