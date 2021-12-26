package com.psl.SchoolMangementSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.psl.SchoolMangementSystem.model.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

	@Query(value = "select * from teacher where teacher_email = ?1", nativeQuery = true)
	public Teacher findByEmailAddress(String email);
	
	
	@Query(value = "select * from teacher where teacher_status = 'pending'", nativeQuery = true)
	public List<Teacher> findByStatus_Pending();
	
	@Query(value = "select * from teacher where teacher_status = 'approved'", nativeQuery = true)
	public List<Teacher> findByStatus_Approved();
	
	
}
