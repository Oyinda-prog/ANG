import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BigparentComponent } from './bigparent/bigparent.component';
import { Big1Component } from './big1/big1.component';
import { Big2Component } from './big2/big2.component';
import { Emit1Component } from './emit1/emit1.component';
import { Emit2Component } from './emit2/emit2.component';
import { Emit3Component } from './emit3/emit3.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateContactComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    AdminComponent,
    BigparentComponent,
    Big1Component,
    Big2Component,
    Emit1Component,
    Emit2Component,
    Emit3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
