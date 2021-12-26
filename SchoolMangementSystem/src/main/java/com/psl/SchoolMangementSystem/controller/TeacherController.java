package com.psl.SchoolMangementSystem.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;
import com.psl.SchoolMangementSystem.repository.TeacherRepository;
import com.psl.SchoolMangementSystem.repository.TeacherService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TeacherController {
	
	@Autowired
	private TeacherRepository teacherRepository; 
	
//	@Autowired
//	private TeacherService service;
	
	@GetMapping("/teacher")
	public List<Teacher> getAllTeacher()
	{
		return teacherRepository.findAll();
	}	
	
	@InitBinder
	public void InitBinder(WebDataBinder dataBinder) {
		StringTrimmerEditor ste = new StringTrimmerEditor(true);
		dataBinder.registerCustomEditor(String.class, ste);
	}
	
	@PostMapping("/TeachersignUp")
	public boolean TeacherSignUp(@RequestBody Teacher teacher,BindingResult br){
		
		
		//System.out.println(teacher.toString());
		teacher.setTeacher_status("pending");
		try {
		teacherRepository.save(teacher);
		
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