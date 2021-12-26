package com.psl.SchoolMangementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.psl.SchoolMangementSystem.model.Admin;
import com.psl.SchoolMangementSystem.model.Teacher;



@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	
	
	
}
