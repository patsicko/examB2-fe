import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isLoginVisible:false;
  submitted:boolean=false

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private toastr: ToastrService){
    this.loginForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required]]
    })
  }
  ngOnInit(): void {
    
  }
 
  submitLogin(){
    this.submitted=true;
    if(this.loginForm.valid){
      const formdata= this.loginForm.value;
      console.log("formdata", formdata);
      this.authService.login(formdata).subscribe({
        next:(response=>{
          console.log("responses", response);
          localStorage.setItem("loggedUser",JSON.stringify(response))
          this.authService.adminLogged(true)
          this.authService.loginCloseButtonClicked(false)
          this.toastr.success('Login successful!');
        }), error:(error=>{
          this.toastr.error('Invalid email or password!');
        })
      })
      this.loginForm.reset()
    } else{
      return;
    }
    this.submitted=false;
    
  };

  closeLogin(value:boolean){
    this.authService.loginCloseButtonClicked(value)
  
  }
  showSignup(value:boolean){
    this.authService.signupButtonClicked(value);
    this.authService.loginButtonClicked(false)
  }

}
