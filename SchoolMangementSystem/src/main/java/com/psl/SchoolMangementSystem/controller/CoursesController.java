package com.psl.SchoolMangementSystem.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Courses;
import com.psl.SchoolMangementSystem.repository.CourseRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CoursesController {
	
	@Autowired
	private CourseRepository courseRepository;
	
	//get all Courses
	@GetMapping("/courses")
	public List<Courses> getAllCourses(){
		//System.out.println(courseRepository.findAll());
		return courseRepository.findAll();
		
	}
	
	@PostMapping("/addcourses")
	public void  addCourses(@RequestBody Courses courses)
	{
		//System.out.println("done1");
		courseRepository.save(courses);
		//System.out.println("done");
	}
	

}
