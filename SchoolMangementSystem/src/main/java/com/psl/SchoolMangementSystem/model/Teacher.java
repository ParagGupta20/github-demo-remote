package com.psl.SchoolMangementSystem.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Builder;

@Builder
@Entity
@Table(name="teacher")
public class Teacher {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long teacher_id;
	
	
	@NotBlank(message = "Enter the Teacher Name")
	@Column(name="teacher_name",nullable=false)
	private String teacher_name;
	
	@NotBlank(message = "Enter the Email")
	@Email(message = "Enter valid email")
	@Column(name="teacher_email",nullable=false ,unique=true)
	private String teacher_email;
	
	@NotBlank(message = "Enter the DOB")
	@Column(name="teacher_dob",nullable=false)
	private String teacher_dob;
	
	@NotBlank(message = "Enter the Permanent Address")
	@Column(name="teacher_address",nullable=false)
	private String teacher_address;
	
	@NotBlank(message = "Enter password")
	@Length(min = 6,message = "minimum length 6 char")
	@Column(name="teacher_password",nullable=false)
	private String teacher_password;
	
	
	@Column(name="teacher_status",columnDefinition = "varchar(255) default 'pending'")
	private String teacher_status;
	
	@NotBlank(message = "Enter the gender")
	@Column(name="teacher_gender",nullable=false)
	private String teacher_gender;

	
	public Teacher()
	{
		
	}
	
	

	public Teacher(String teacher_name, String teacher_email, String teacher_dob, String teacher_address,
			String teacher_password,String teacher_status,String teacher_gender) {
		super();
		this.teacher_name = teacher_name;
		this.teacher_email = teacher_email;
		this.teacher_dob = teacher_dob;
		this.teacher_address = teacher_address;
		this.teacher_password = teacher_password;
		this.teacher_status = teacher_status;
		this.teacher_gender = teacher_gender;
	}



	public long getTeacher_id() {
		return teacher_id;
	}

	public void setTeacher_id(int teacher_id) {
		this.teacher_id = teacher_id;
	}

	public String getTeacher_name() {
		return teacher_name;
	}

	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}

	public String getTeacher_email() {
		return teacher_email;
	}

	public void setTeacher_email(String teacher_email) {
		this.teacher_email = teacher_email;
	}

	public String getTeacher_dob() {
		return teacher_dob;
	}

	public void setTeacher_dob(String teacher_dob) {
		this.teacher_dob = teacher_dob;
	}

	public String getTeacher_address() {
		return teacher_address;
	}

	public void setTeacher_address(String teacher_address) {
		this.teacher_address = teacher_address;
	}

	public String getTeacher_password() {
		return teacher_password;
	}

	public void setTeacher_password(String teacher_password) {
		this.teacher_password = teacher_password;
	}



	public String getTeacher_status() {
		return teacher_status;
	}



	public void setTeacher_status(String teacher_status) {
		this.teacher_status = teacher_status;
	}



	public String getTeacher_gender() {
		return teacher_gender;
	}



	public void setTeacher_gender(String teacher_gender) {
		this.teacher_gender = teacher_gender;
	}
	
	@Override
	public String toString() {
		return "Teacher [id=" + teacher_id + ", teacher_name=" + teacher_name + ", teacher_dob=" + teacher_dob
				+ ", teacher_email=" + teacher_email + ", teacher_address=" + teacher_address + ", teacher_password="
				+ teacher_password + ", teacher_status=" + teacher_status + ", teacher_gender=" + teacher_gender+ "]";
	}


}
