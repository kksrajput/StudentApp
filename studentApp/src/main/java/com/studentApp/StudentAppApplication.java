package com.studentApp;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.studentApp.entity.Student;
import com.studentApp.repo.StudentRepository;

@SpringBootApplication
public class StudentAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentAppApplication.class, args);
	}
	@Bean
	  public CommandLineRunner dataLoader(StudentRepository repo) {
	    return new CommandLineRunner() {
	      @Override
	      public void run(String... args) throws Exception {
	        repo.save(new Student("kks", "kks@gmail.com"));
	        repo.save(new Student("ram", "ram@gmail.com"));
	      }
	    };
	  }
	


}
