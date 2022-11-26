import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student:  Student;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private studentService:StudentService
  ) { 
    this.student = new Student();
  }

 onSubmit(){
  this.studentService.save(this.student).subscribe(result =>
    this.gotoStudentList());
 }
 gotoStudentList(){
  this.router.navigate(['/students']);
 }

}
