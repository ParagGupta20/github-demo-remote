package com.psl.SchoolMangementSystem.repository;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;


@Service
public class TeacherService {
	
	@Autowired
	private TeacherRepository teachRepo;
	
	public boolean getTeacher(String email,String password) {
		boolean flag = false;
		//System.out.println(studRepo.findByEmailAddress(email).getStudent_email());
		//System.out.println(studRepo.findByEmailAddress(email).getStudent_password());
		Teacher teacher = teachRepo.findByEmailAddress(email);
		if(teacher.getTeacher_email().equals(email)&& teacher.getTeacher_password().equals(password))
			flag = true;
		
		return flag;
	}
	
	public String updateApproveStatus(Long id) 
	{
	Teacher teacher = teachRepo.getById(id);
	teacher.setTeacher_status("approved");
	teachRepo.save(teacher);
	//System.out.println("updated the status");
	return(" Approved status of: "+teacher.getTeacher_name());
   }
	
	public Teacher getTeacherbyId(String email)
	{
		return(teachRepo.findByEmailAddress(email));
	}

}