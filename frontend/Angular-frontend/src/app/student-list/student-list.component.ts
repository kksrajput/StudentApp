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

  constructor(private studentService: StudentService) {
  }
  deleteStudent(studentId:  string){
    this.studentService.delete(studentId);
  }
  ngOnInit() {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    });
  }

}
