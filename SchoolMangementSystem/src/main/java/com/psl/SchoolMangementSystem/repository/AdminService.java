package com.psl.SchoolMangementSystem.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.SchoolMangementSystem.model.Admin;


@Service
public class AdminService {
	@Autowired
	AdminRepository adminRepo;
	
	public Admin getAdmin(long adminId){
		Admin admin = adminRepo.findById(adminId).orElse(new Admin());
		//System.out.println(admin.getAdminUserName()+" "+admin.getPassword());
		return admin;
	}
	
	
	

	
}
