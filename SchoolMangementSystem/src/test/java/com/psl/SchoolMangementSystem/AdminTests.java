package com.psl.SchoolMangementSystem;

import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.psl.SchoolMangementSystem.model.Admin;
import com.psl.SchoolMangementSystem.model.Student;
import com.psl.SchoolMangementSystem.repository.AdminRepository;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
public class AdminTests {
	
	@Autowired
	AdminRepository adminRepo;
	
	@Test
	public void testAdminList()
	{
		List<Admin> admin = adminRepo.findAll();
		Assertions.assertThat(admin.size()).isGreaterThan(0);
	}
	
//	@Test
//	public void saveAdminTest() {
//	Admin admin = new Admin(1l,"pawan","pawan12345");
//	adminRepo.save(admin);
//	System.out.println("inside test");
//    Assertions.assertThat(adminRepo.findByName("pawan").getAdmin_Name()).isEqualTo("pawan");
//	}

}
