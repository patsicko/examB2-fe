import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  submitted:boolean=false

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    this.signupForm= this.formBuilder.group({
     firstName:['', [Validators.required]],
     lastName: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required]]
    })
  }
 
  ngOnInit(): void {
   
  }

  submitSignup(){
    this.submitted=true;
    if(this.signupForm.valid){
      const formdata=this.signupForm.value;
      console.log("formdata", this.signupForm.value );
  this.authService.createUser(formdata).subscribe({
    next:(response=>{
      console.log("response from server",response);
      this.authService.signupCloseButtonClicked(false)
      this.authService.loginButtonClicked(true)
    }), error:(error=>{
      console.log("error from server",error)
    })
  })

      this.signupForm.reset();
    }else{
      return;
    }
    this.submitted=false;
   

  }

  closeSignup(value:boolean){
    this.authService.signupCloseButtonClicked(value)
  }


  showLogin(value:boolean){
  this.authService.loginButtonClicked(value)
  this.authService.signupButtonClicked(false)
  }
}
