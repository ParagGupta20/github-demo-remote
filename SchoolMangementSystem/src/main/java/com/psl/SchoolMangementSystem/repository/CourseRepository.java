package com.psl.SchoolMangementSystem.repository;

import java.util.List;
import java.util.Map;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.psl.SchoolMangementSystem.model.Courses;

@Repository
public interface CourseRepository extends JpaRepository<Courses,Long> {
	
	
	
//	@Query(value="select course_id,course_description,course_title,teacher_name from courses,teacher where courses.teacher_id=teacher.teacher_id ",nativeQuery=true)
//	public List<String> findAllCourses();
	

}
