package com.studentApp.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.studentApp.repo.StudentRepository;
import com.studentApp.entity.Student;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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
	public void saveStudents(@RequestBody Student st) {
		studRepo.save(st);
	}
	@GetMapping("/students/{id}")
	public Optional<Student> getAStudent(@PathVariable(value = "id")Long id) {
		return this.studRepo.findById(id);
	}
	
	@GetMapping("/studentsDetails")
	public Optional<Student> getOneStudent(@RequestParam Long id) {
		return this.studRepo.findById(id);
	}
	
	@DeleteMapping("/students/{id}")
	public  Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long id)
	   {

	    studRepo.deleteById(id);
	    Map<String, Boolean> response = new HashMap<>();
	    response.put("deleted", Boolean.TRUE);
	    
	    return response;
	}
}
