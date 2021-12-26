package com.psl.SchoolMangementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="school_details")
public class SchoolDetails {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int school_id;
	@Column(name="school_name")
	private String school_name;
	@Column(name="school_address")
	private String school_address;
	@Column(name="school_contact_number")
	private long school_contact_number;
	@Column(name="school_medium_of_study")
	private String school_medium_of_study;
	@Column(name="school_affiliated_by")
	private String school_affiliated_by;
	
	public SchoolDetails()
	{
		
	}

	public SchoolDetails(String school_name, String school_address, long school_contact_number,
			String school_medium_of_study, String school_affiliated_by) {
		super();
		this.school_name = school_name;
		this.school_address = school_address;
		this.school_contact_number = school_contact_number;
		this.school_medium_of_study = school_medium_of_study;
		this.school_affiliated_by = school_affiliated_by;
	}

	public int getSchool_id() {
		return school_id;
	}

	public void setSchool_id(int school_id) {
		this.school_id = school_id;
	}

	public String getSchool_name() {
		return school_name;
	}

	public void setSchool_name(String school_name) {
		this.school_name = school_name;
	}

	public String getSchool_address() {
		return school_address;
	}

	public void setSchool_address(String school_address) {
		this.school_address = school_address;
	}

	public long getSchool_contact_number() {
		return school_contact_number;
	}

	public void setSchool_contact_number(long school_contact_number) {
		this.school_contact_number = school_contact_number;
	}

	public String getSchool_medium_of_study() {
		return school_medium_of_study;
	}

	public void setSchool_medium_of_study(String school_medium_of_study) {
		this.school_medium_of_study = school_medium_of_study;
	}

	public String getSchool_affiliated_by() {
		return school_affiliated_by;
	}

	public void setSchool_affiliated_by(String school_affiliated_by) {
		this.school_affiliated_by = school_affiliated_by;
	}
	
	
	
	

}
