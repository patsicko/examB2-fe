import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  studentForm: FormGroup;
  marksForm: FormGroup;
  showStudentRegistration:boolean=false;
  submitted:boolean=false;
  showFormOfMarks:boolean=false;



constructor(private authService:AuthService, private studentFormBuilder: FormBuilder){
  this.studentForm= this.studentFormBuilder.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]]
  });

  this.marksForm= this.studentFormBuilder.group({
    subject: ['', [Validators.required]],
    marks: ['', [Validators.required]],
    type: ['',[Validators.required]]
  })
}


pollingSubscription:Subscription
startPolling():void{
  this.pollingSubscription=interval(1000)
  .subscribe(()=>{
    this.getStudent()
  })
}

ngOnDestroy(): void {
  if(this.pollingSubscription){
    this.pollingSubscription.unsubscribe()
  }
}
ngOnInit(): void {
 this.startPolling()
}

registrationIsClicked(value:boolean){
  this.showStudentRegistration=value;
}
closeRegistrationForm(value:boolean){
  this.showStudentRegistration=value
}

studentAddMarksClicked(value:boolean){
  this.showFormOfMarks=value
}
closeFormOfMarks(value:boolean){
  this.showFormOfMarks=value;
}

studentId:number;

addMarks(id:number){
 this.studentId=id
}


logout(){
  this.authService.adminLogged(false);
 window.location.reload()
  
}


insertMarks(){
  this.submitted=true;
 if(this.marksForm.valid) {
  const newMarks=this.marksForm.value;
  this.authService.addMarks(newMarks,this.studentId).subscribe({
    next:(response)=>{
      console.log("response",response);
      this.showFormOfMarks=false
    },error:(error)=>{
      console.log("error",error)
    }
  })

 }else{
  return;
 }
 this.submitted=false
}


registerStudent(){
  this.submitted=true;
  if(this.studentForm.valid){
    const studentData= this.studentForm.value;
    this.authService.addStudent(studentData).subscribe({
      next:(response)=>{
        console.log("new student", response);
        this.showStudentRegistration=false
      },error:(error)=>{
        console.log("error message for student",error)
      }
    })
   
  }else{
    return
  }
  this.submitted=false
}





students:any=null

exams:any=null





  getStudent(){
 this.authService.getStudent().subscribe({
  next:(result)=>{
    console.log(result);

    this.students=result
    this.exams=null
  },
  error:(error)=>{
    console.log(error)
  }
 })
  }


  calculate(){
    this.authService.calculate().subscribe({
      next:(response)=>{
        console.log("maRKS",response);
        this.exams=response
        this.students=null
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
