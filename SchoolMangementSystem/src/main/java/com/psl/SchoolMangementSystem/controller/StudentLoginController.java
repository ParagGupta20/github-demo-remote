package com.psl.SchoolMangementSystem.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Admin;
import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.repository.StudentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StudentLoginController {
	
	@Autowired
	private StudentService service;
	
	
	@PostMapping("/studentLogin")
	public String getLoginDetails(@RequestBody Map<String,String> email_pass ) {
		
		String email = email_pass.get("student_email");
		String password = email_pass.get("student_password");
		
		if(service.getStudent(email,password))
			return "login successful";
		
		
		return "fail for student";
	}
	
	@PostMapping("/studentprofile")
	public Student getProfile(@RequestBody Map<String,String> s)
	{
		//System.out.println(s.get("student_email"));
		return(service.getStudentbyId(s.get("student_email")));
	}
	
}
