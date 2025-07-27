import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from './service.service';

export const guardsGuard: CanActivateFn = (route, state) => {
  let service=inject(ServiceService);
  let router=inject(Router)
  let islogin;

  service.islogin.subscribe((data:boolean)=>{
     islogin=data;
     console.log(data)

  })
  if (islogin === false) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
