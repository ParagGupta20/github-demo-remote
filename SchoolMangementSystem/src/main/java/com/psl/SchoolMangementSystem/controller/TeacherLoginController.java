package com.psl.SchoolMangementSystem.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Admin;
import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;
import com.psl.SchoolMangementSystem.repository.AdminService;
import com.psl.SchoolMangementSystem.repository.StudentRepository;
import com.psl.SchoolMangementSystem.repository.StudentService;
import com.psl.SchoolMangementSystem.repository.TeacherService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class TeacherLoginController {
	
	@Autowired
	private TeacherService service;
	
	
	@PostMapping("/teacherLogin")
	public String getLoginDetails(@RequestBody Map<String,String> email_pass ) {
		
	     String email = email_pass.get("teacher_email");
	     String password = email_pass.get("teacher_password");
	     		
		if(service.getTeacher(email,password))
			return "login successful";
		
		
		return "fail for student";
	}
	
	@PostMapping("/teacherprofile")
	public Teacher getProfile(@RequestBody Map<String,String> t)
	{
		//System.out.println(t.get("teacher_email"));
		return(service.getTeacherbyId(t.get("teacher_email")));
	}
}
	