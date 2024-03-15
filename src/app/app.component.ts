import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService:AuthService){}

  title = 'examB2-fe';
  isAdmin:boolean;

  ngOnInit(): void{
    this.authService.isAdmin.subscribe(value=>{
      this.isAdmin=true
     })
  }

}
