package com.studentApp.repo;
import org.springframework.data.repository.CrudRepository;

import com.studentApp.entity.*;

public interface StudentRepository extends CrudRepository<Student, Long>{
	

}
