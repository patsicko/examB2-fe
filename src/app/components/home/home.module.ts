import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component'



@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    HomepageComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    DashboardComponent,
    LandingpageComponent
  ]
})
export class HomeModule { }
