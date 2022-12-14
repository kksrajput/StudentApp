import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {  Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl: string;
  public isUpdated:string|undefined;
  
  constructor(private http:HttpClient) {
    this.studentUrl = "http://localhost:8080/students";
   }
   
  public findAll():Observable<Student[]>{
   
    return this.http.get<Student[]>(this.studentUrl);
  }
  public findById(studentId:String):Observable<Student>{
    this.isUpdated = "true";
    // return this.http.get<Student>(this.studentUrl+'Details?id='+studentId);
    return this.http.get<Student>(this.studentUrl+'/'+studentId);
  }
  public save(student: Student){
    return this.http.post<Student[]>(this.studentUrl,student);
  }
  delete(studentId: string):Observable<string>{
    // let httpHeaders = new HttpHeaders().
    // set('Content-type','application/Json');
    // let options={
    //   Headers:httpHeaders
    // };
    // console.log("delete");
    return this.http.delete<string>(this.studentUrl+'/'+studentId);
  }
}
