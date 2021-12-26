package com.psl.SchoolMangementSystem;

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

import com.psl.SchoolMangementSystem.repository.StudentRepository;
import com.psl.SchoolMangementSystem.repository.TeacherRepository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Collections;
import java.util.List;

import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.model.Teacher;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class StudentTests {
	@Autowired
	private StudentRepository studentRepository;
	
	private Student student = new Student("rajesh","6/05/1989","rajesh@gmail.com","1291/a","rajesh12345","pending","Male","6");
	
	@Test
	@Order(2)
	@Rollback(value=false)
	public void testStudentList()
	{
	List<Student> student = studentRepository.findAll();
	Assertions.assertThat(student.size()).isGreaterThan(0);
	}
	
	@Test
	@Order(1)
	@Rollback(value=false)
	public void saveTeacherTest() {
		
		studentRepository.save(student);
		
		System.out.println("inside test");
		Assertions.assertThat(studentRepository.findByEmailAddress("rajesh@gmail.com").getStudent_email()).isEqualTo("rajesh@gmail.com");
	}
	
	@Test
	@Order(3)
	@Rollback(value=false)
	public void retreveStatus() {
		
		Assertions.assertThat((studentRepository.findByEmailAddress("rajesh@gmail.com")).getStudent_status()).isEqualTo("pending");
	}
	
	@Test
	@Order(4)
	@Rollback(value=false)
	public void checkPassword() {
		Assertions.assertThat(studentRepository.findByEmailAddress("rajesh@gmail.com").getStudent_password()).isEqualTo("rajesh12345");
	}
	
	@Test
	@Order(5)
	@Rollback(value=false)
	public void deleteStudent() {
		studentRepository.delete(studentRepository.findByEmailAddress("rajesh@gmail.com"));
		Assertions.assertThat(studentRepository.findByEmailAddress("rajesh@gmail.com").getStudent_email()).isNull();
	}
	
}
	

