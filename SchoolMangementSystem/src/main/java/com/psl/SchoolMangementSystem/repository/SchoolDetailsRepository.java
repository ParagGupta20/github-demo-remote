package com.psl.SchoolMangementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.psl.SchoolMangementSystem.model.SchoolDetails;



@Repository
public interface SchoolDetailsRepository extends JpaRepository<SchoolDetails, Long> {

}
