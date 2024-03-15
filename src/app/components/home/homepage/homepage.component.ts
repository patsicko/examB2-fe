import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private authService:AuthService){}

  showSignupForm(value:boolean){
  this.authService.signupButtonClicked(value)
  }

  showLoginForm(value:boolean){
    this.showLogin=value
  }

  logout(){
    window.location.reload()
  }


  showLogin:boolean=false;
  showSignup:boolean=false;
  isAdmin:boolean=false;
  ngOnInit(): void {
    this.authService.showSignupForm.subscribe(value=>{
     this.showSignup=value
    });

    this.authService.showLoginForm.subscribe(value=>{
      this.showLogin=value
    })

    this.authService.isAdmin.subscribe(value=>{
     this.isAdmin=true
    })
  }

 

  

}
