package com.psl.SchoolMangementSystem.repository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;


@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studRepo;
	
	public boolean getStudent(String email,String password) {
		boolean flag = false;
		//System.out.println(studRepo.findByEmailAddress(email).getStudent_email());
		//System.out.println(studRepo.findByEmailAddress(email).getStudent_password());
		Student student = studRepo.findByEmailAddress(email);
		if(student.getStudent_email().equals(email)&& student.getStudent_password().equals(password))
			flag = true;
		return flag;
	}
	
	public String updateApproveStatus(Long id) {
		Student student = studRepo.getById(id);
		student.setStudent_status("approved");
		studRepo.save(student);
		//System.out.println("updated the status of student");
		return("Status approved for: "+student.getStudent_name());
	}

	public Student getStudentbyId(String email)
	{
		return(studRepo.findByEmailAddress(email));
	}
}
