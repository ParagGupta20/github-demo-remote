package com.psl.SchoolMangementSystem.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;
@Entity
@Table(name = "student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotBlank(message = "Enter the Student Name")
	@Column(name ="student_name",nullable=false)
	private String student_name;
	
	@NotBlank(message = "Enter the DOB")
	@Column(name ="student_dob",nullable=false)
    private String student_dob ;
	
	@NotBlank(message = "Enter the Email")
	@Email(message = "Enter valid email")
	@Column(name ="student_email",nullable=false,unique=true)
	private String student_email;
	
	@NotBlank(message = "Enter the Permanent Address")
	@Column(name ="student_address",nullable=false)
	private String student_address;
	
	@NotBlank(message = "Enter password")
	@Length(min = 6,message = "minimum length 6 char")
	@Column(name ="student_password",nullable=false)
	private String student_password;
	
	@Column(name="student_status",columnDefinition = "varchar(255) default 'pending'")
	private String student_status;
	
	@NotBlank(message = "Enter the gender")
	@Column(name="student_gender",nullable=false)
	private String student_gender;
	
	@NotBlank(message = "Enter class")
	@Column(name="student_class",nullable=false)
	private String student_class;
	
	public Student() {}
	
	public Student(String student_name, String student_dob, String student_email, String student_address,
			String student_password,String student_status,String student_gender,String student_class) {
		super();
		this.student_name = student_name;
		this.student_dob = student_dob;
		this.student_email = student_email;
		this.student_address = student_address;
		this.student_password = student_password;
		this.student_status = student_status;
		this.student_gender = student_gender;
		this.student_class = student_class;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getStudent_name() {
		return student_name;
	}

	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}

	public String getStudent_dob() {
		return student_dob;
	}

	public void setStudent_dob(String student_dob) {
		this.student_dob = student_dob;
	}

	public String getStudent_email() {
		return student_email;
	}

	public void setStudent_email(String student_email) {
		this.student_email = student_email;
	}

	public String getStudent_address() {
		return student_address;
	}

	public void setStudent_address(String student_address) {
		this.student_address = student_address;
	}

	public String getStudent_password() {
		return student_password;
	}

	public void setStudent_password(String student_password) {
		this.student_password = student_password;
	}

	public String getStudent_status() {
		return student_status;
	}

	public void setStudent_status(String student_status) {
		this.student_status = student_status;
	}

	public String getStudent_gender() {
		return student_gender;
	}

	public void setStudent_gender(String student_gender) {
		this.student_gender = student_gender;
	}

	public String getStudent_class() {
		return student_class;
	}

	public void setStudent_class(String student_class) {
		this.student_class = student_class;
	}

	@Override
	public String toString() {
		return "Student [id=" + id + ", student_name=" + student_name + ", student_dob=" + student_dob
				+ ", student_email=" + student_email + ", student_address=" + student_address + ", student_password="
				+ student_password + ", student_status=" + student_status + ", student_gender=" + student_gender
				+ ", student_class=" + student_class + "]";
	}

	
	
	
}
