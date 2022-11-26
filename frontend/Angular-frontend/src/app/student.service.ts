import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {  Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl: string;
  
  constructor(private http:HttpClient) {
    this.studentUrl = "http://localhost:8080/students";
   }
   
  public findAll():Observable<Student[]>{
   
    return this.http.get<Student[]>(this.studentUrl);
  }
  public save(student: Student){
    return this.http.post<Student[]>(this.studentUrl,student);
  }
  delete(studentId: String):Observable<number>{
    // let httpHeaders = new HttpHeaders().
    // set('Content-type','application/Json');
    // let options={
    //   Headers:httpHeaders
    // };
    return this.http.delete<number>(this.studentUrl+'/'+studentId);
  }
}
