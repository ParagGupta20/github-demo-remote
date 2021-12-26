package com.psl.SchoolMangementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;
import com.psl.SchoolMangementSystem.repository.StudentRepository;
import com.psl.SchoolMangementSystem.repository.StudentService;
import com.psl.SchoolMangementSystem.repository.TeacherRepository;
import com.psl.SchoolMangementSystem.repository.TeacherService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AdminController {
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Autowired
	private TeacherService teacherService;
	
	@Autowired
	private StudentService studentService;
	
	
	@GetMapping("/getPendingStudents")
	public List<Student> getPendingStudents()
	{
		return studentRepository.findByStatus_Pending();
	}
	
	@GetMapping("/getPendingTeachers")
	public List<Teacher> getPendingTeachers()
	{
		return teacherRepository.findByStatus_Pending();
	}
	
	@GetMapping("/getApprovedStudents")
	public List<Student> getApprovedStudents()
	{
		return studentRepository.findByStatus_Approved();
	}
	
	@GetMapping("/getApprovedTeachers")
	public List<Teacher> getApprovedTeachers()
	{
		return teacherRepository.findByStatus_Approved();
	}
	
	@PostMapping("/approveTeachers")
	public String ApproveTeacher(@RequestBody String  id)
	{
		Long teacherid=Long.parseLong(id.substring(0, id.length()-1));
		//System.out.println(teacherid);
		return(teacherService.updateApproveStatus(teacherid));
	}
	
	@PostMapping("/approveStudents")
	public String ApproveStudents(@RequestBody String  id)
	{
		Long studentid=Long.parseLong(id.substring(0, id.length()-1));
		//System.out.println(studentid);
		return(studentService.updateApproveStatus(studentid));
	}
	
	@PostMapping("/deleteTeachers")
	public String deleteTeachers(@RequestBody String  id) {
		Long teacherid=Long.parseLong(id.substring(0, id.length()-1));
		String name=(teacherRepository.getById(teacherid)).getTeacher_name();
	    teacherRepository.deleteById(teacherid);
	    return("Details of "+name+" deleted ");
	}
	
	@PostMapping("/deleteStudents")
	public String deleteStudents(@RequestBody String  id) {
		Long studentid=Long.parseLong(id.substring(0, id.length()-1));
		String name=(studentRepository.getById(studentid)).getStudent_name();
		studentRepository.deleteById(studentid);
		return("Details of "+name+" deleted ");
	}
	

}
