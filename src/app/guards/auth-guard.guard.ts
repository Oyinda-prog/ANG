import { inject } from '@angular/core';
import { CanActivateFn,  Router } from '@angular/router';
inject
export const authGuardGuard: CanActivateFn = (route, state) => {
 let router=inject(Router)
 let  token=localStorage['Tokens'];
 if(token){
   return true
}
else{
  router.navigate(['login'])
  return false
}
}
