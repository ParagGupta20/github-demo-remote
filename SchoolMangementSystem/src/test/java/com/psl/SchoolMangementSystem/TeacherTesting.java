package com.psl.SchoolMangementSystem;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ActiveProfiles;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;
import com.psl.SchoolMangementSystem.repository.StudentRepository;
import com.psl.SchoolMangementSystem.repository.TeacherRepository;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class TeacherTesting {
	@Autowired
	private TeacherRepository teacherRepository;
	
	private Teacher teach = new Teacher("sheetal","sheetal@gmail.com","6/05/1989","1291/a","sheetal12345","pending","female");
	
	@Test
	@Order(2)
	@Rollback(value=false)
	public void testTeacherList()
	{
	List<Teacher> teacher = teacherRepository.findAll();
	Assertions.assertThat(teacher.size()).isGreaterThan(0);
	}
	
	@Test
	@Order(1)
	@Rollback(value=false)
	public void saveTeacherTest() {
		
		teacherRepository.save(teach);
		
		System.out.println("inside test");
		Assertions.assertThat(teacherRepository.findByEmailAddress("sheetal@gmail.com").getTeacher_email()).isEqualTo("sheetal@gmail.com");
	}
	
	@Test
	@Order(3)
	@Rollback(value=false)
	public void retreveStatus() {
		Assertions.assertThat(teacherRepository.findByEmailAddress("sheetal@gmail.com").getTeacher_status()).isEqualTo("pending");
	}
	
	@Test
	@Order(4)
	@Rollback(value=false)
	public void checkPassword() {
		Assertions.assertThat(teacherRepository.findByEmailAddress("sheetal@gmail.com").getTeacher_password()).isEqualTo("sheetal12345");
	}
	
	@Test
	@Order(5)
	@Rollback(value=false)
	public void deleteTeacher() {
		teacherRepository.delete(teacherRepository.findByEmailAddress("sheetal@gmail.com"));
		Assertions.assertThat(teacherRepository.findByEmailAddress("sheetal@gmail.com").getTeacher_email()).isEmpty();
	}
}
