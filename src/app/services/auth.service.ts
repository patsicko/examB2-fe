import { EventEmitter, Injectable } from '@angular/core';
import { CreateUserDto, LoginData, Marks, Student } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  headers=new HttpHeaders({
    'Content-Type':'application/json'
  });

  appUrl="http://localhost:3000/api";

  showSignupForm:EventEmitter<boolean>=new EventEmitter<boolean>();
  showLoginForm:EventEmitter<boolean>=new EventEmitter<boolean>();
  isAdmin:EventEmitter<boolean>= new EventEmitter<boolean>();

  adminLogged(value:boolean){
    this.isAdmin.emit(value);
  }

  signupButtonClicked(value:boolean){
    this.showSignupForm.emit(value);
  }
  signupCloseButtonClicked(value:boolean){
    this.showSignupForm.emit(value);
  }

  loginButtonClicked(value:boolean){
    this.showLoginForm.emit(value);
  }
  loginCloseButtonClicked(value:boolean){
    this.showLoginForm.emit(value);
  }
  

  createUser(user:CreateUserDto):Observable<any>{
  return this.http.post<CreateUserDto>(`${this.appUrl}/user/create`,user,{headers:this.headers}).pipe(
      tap(result=>{
    console.log(result)
      })
    )
  }

  login(user:LoginData):Observable<any>{
    return this.http.post<LoginData>(`${this.appUrl}/user/login`, user, {headers:this.headers}).pipe(
      tap(result=>{
        return result
      })
    )
  }


  getStudent():Observable<any>{
    return this.http.get(`${this.appUrl}/student/all`,{headers:this.headers}).pipe(
        tap(result=>{
      console.log(result)
        })
      )
    }


    calculate():Observable<any>{
      return this.http.get(`${this.appUrl}/student/calculateMarks`,{headers:this.headers}).pipe(
          tap(result=>{
        console.log(result)
          })
        )
    }

    addMarks(marks:Marks, id:number):Observable<any>{
      return this.http.post<Marks>(`${this.appUrl}/student/addExam/${id}`,marks,{headers:this.headers}).pipe(
          tap(result=>{
        console.log(result)
          })
        )
    }

    addStudent(student:Student):Observable<any>{
      return this.http.post<Student>(`${this.appUrl}/student/create`,student,{headers:this.headers}).pipe(
          tap(result=>{
        console.log(result)
          })
        )
    }

    deleteStudent(id:number):Observable<any>{
      return this.http.delete(`${this.appUrl}/student/${id}`, {headers:this.headers}).pipe(
        tap(deletedStudent=>{
          console.log("student deleted",deletedStudent)
        })
      )
    }
}
