package com.psl.SchoolMangementSystem.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.Admin;
import com.psl.SchoolMangementSystem.repository.AdminService;
import com.psl.SchoolMangementSystem.repository.TeacherService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AdminLoginController {
	@Autowired
	AdminService service;
	
	@Autowired
	TeacherService teacherservice;
	
	@PostMapping("/adminLogin")
	public boolean getLoginDetails(@RequestBody Map<String,String> p) {
		long admin_id=Long.parseLong(p.get("admin_id"));
		//System.out.println(p.get("admin_id"));
		//System.out.println(p.get("admin_name")+" "+p.get("admin_password"));
		Admin admin = service.getAdmin(admin_id);
		if(admin.getAdmin_Name().equals(p.get("admin_name"))&& admin.getAdmin_password().equals(p.get("admin_password"))) {
				return true;
		}

		return false;
	}
	
	@PostMapping("/adminprofile")
	public Admin getProfile(@RequestBody String id)
	{
		long admin_id=Long.parseLong(id.substring(0,1));
		return(service.getAdmin(admin_id));
	}
	
	
	
	
}