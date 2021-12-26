package com.psl.SchoolMangementSystem.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.psl.SchoolMangementSystem.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
	
	@Query(value = "select * from student where student_email = ?1", nativeQuery = true)
	public Student findByEmailAddress(String email);
	
	@Query(value = "select * from student where student_status = 'pending'", nativeQuery = true)
	public List<Student> findByStatus_Pending();
	
	@Query(value = "select * from student where student_status = 'approved'", nativeQuery = true)
	public List<Student> findByStatus_Approved();

}
