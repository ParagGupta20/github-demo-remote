package com.psl.SchoolMangementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.repository.StudentRepository;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class StudentController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	//get all Student
	@GetMapping("/students")
	public List<Student> getAllStudent()
	{
		return studentRepository.findAll();
	}
	
	@InitBinder
	public void InitBinder(WebDataBinder dataBinder) {
		StringTrimmerEditor ste = new StringTrimmerEditor(true);
		dataBinder.registerCustomEditor(String.class, ste);
	}
	
	@PostMapping("/StudentsignUp")
	public boolean StudentSignUp(@Valid @RequestBody Student student,BindingResult br){
		
		
		//System.out.println(student.toString());
		student.setStudent_status("pending");
		try {
		studentRepository.save(student);
		
		if(br.hasErrors()) {
			return false;
		}

		return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}

}
