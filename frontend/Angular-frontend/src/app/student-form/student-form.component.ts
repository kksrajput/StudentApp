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
    public route:ActivatedRoute,
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
 ngOnInit(){
  // s: any = this.route.snapshot.params;
  // const a = this.route.snapshot.params;
  // console.log(a['id']);
  
  const editId = this.route.snapshot.params['id'];
  // console.log(editId);
  // if(editId ! = undefined){
    
  //  console.log(editId);
   if(this.route.snapshot.params.hasOwnProperty('id')){
    this.studentService.findById(editId).subscribe(data =>{
      this.student = data;
      
    });
    // console.log(this.student);
  }
  // }
  
  // console.log(this.route.snapshot.params['id']);
  // console.log(this.route.snapshot.params.hasOwnProperty('id'));
 }

}
