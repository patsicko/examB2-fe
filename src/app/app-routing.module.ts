import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { HomepageComponent } from './components/home/homepage/homepage.component';
import { LandingpageComponent } from './components/home/landingpage/landingpage.component';

const routes: Routes = [
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
