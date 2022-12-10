import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {  StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // students: Student[] ;
  // constructor(private studentService: StudentService) { }

  // ngOnInit() {
  //   this.studentService.findAll().subscribe(data =>{
  //     this.students = data;
  //   });
  // }
  students: Student[]|undefined;
  isDeleted: string|undefined;
  // s:string|undefined;
  deletedId:number|undefined;
  isUpdated: string|undefined;
  constructor(private studentService: StudentService) {
    this.isUpdated = "false";
  }
  deleteStudent(studentId:  string){
    this.studentService.delete(studentId).subscribe(data =>{
        // console.log(data.hasOwnProperty('deleted'));
        this.isDeleted = data;
        
       
        // console.log(data['deleted']);
        // if(data['deleted'] == "true")
        // this.isDeleted = "yes";
        this.populateStudentTable();
      });
    
  }
  populateStudentTable(){
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }
  ngOnInit() {
   
    this.populateStudentTable();
  }

}
