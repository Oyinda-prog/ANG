import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { BigparentComponent } from './bigparent/bigparent.component';
import { Big1Component } from './big1/big1.component';
import { Big2Component } from './big2/big2.component';
import { Emit1Component } from './emit1/emit1.component';
import { Emit2Component } from './emit2/emit2.component';

const routes: Routes = [
 {path:"", component:HomeComponent},
 {path:'state', component:BigparentComponent},
 {path:'states', component:Big2Component},
 {path:'emit', component:Emit1Component},
 {path:'emitt', component:Emit2Component},
 {path:'big', component:Big1Component},
 {path:"home",redirectTo:'',pathMatch:'prefix'},
 {path:'signup', component:SignupComponent},
 {path:'co',children:[
  {path:'',component:CreateContactComponent},
  {path:'contact',component:SignupComponent}
 ]},
{path:"signin",redirectTo:'',pathMatch:'prefix'},
{path:"admin", component:AdminComponent, canActivate:[authGuardGuard]},

// {path:'**',component:NotFoundComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
