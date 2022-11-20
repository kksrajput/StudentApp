package com.studentApp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentApp.repo.StudentRepository;
import com.studentApp.entity.Student;

@RestController
//@RequestMapping(path="/api/",produces="application/json")
@CrossOrigin(origins = "http:/localhost:4200")
public class StudentController {
	
	private final StudentRepository studRepo;
	
	@Autowired
	public StudentController(StudentRepository studRepo) {
		this.studRepo = studRepo;
	}

	@GetMapping("/students")
	public List<Student> getStudents() {
		return (List<Student>)this.studRepo.findAll();
	}
	
	@GetMapping("/")
	public String getMessage() {
		return "<h1>StudentApp</h1>";
	}
	@PostMapping("/students")
	public void saveStudents(Student st) {
		studRepo.save(st);
	}
}
