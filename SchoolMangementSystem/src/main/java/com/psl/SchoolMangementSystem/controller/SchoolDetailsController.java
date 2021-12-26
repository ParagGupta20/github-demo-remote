package com.psl.SchoolMangementSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.psl.SchoolMangementSystem.model.SchoolDetails;
import com.psl.SchoolMangementSystem.repository.SchoolDetailsRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class SchoolDetailsController {
		
		@Autowired
		private SchoolDetailsRepository schooldetailsRepository;
	
		@GetMapping("/schooldetails")
		public List<SchoolDetails> getAllEmployee()
		{
			return schooldetailsRepository.findAll();
		}
		

}
