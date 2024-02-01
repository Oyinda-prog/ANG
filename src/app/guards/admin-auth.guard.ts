import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  let routes= inject(Router);
  let token=localStorage['tokens'];
  if(token){

    return true;
  }else{
    routes.navigate(['']);
    return false
  }

};
