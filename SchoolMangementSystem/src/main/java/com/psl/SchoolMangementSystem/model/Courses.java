package com.psl.SchoolMangementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="courses")
public class Courses {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long course_id;
	
	@Column(name ="course_title")
	private String course_title;
	
	@Column(name ="course_description",columnDefinition = "varchar(400)")
	private String course_description;
	
	@Column(name="teacher_name")
	private String teacher_name;
	
	
	
	public Courses() {
		
	}



	public Courses(String course_title, String course_description, String teacher_name) {
		super();
		this.course_title = course_title;
		this.course_description = course_description;
		this.teacher_name = teacher_name;
	}



	public long getCourse_id() {
		return course_id;
	}



	public void setCourse_id(long course_id) {
		this.course_id = course_id;
	}



	public String getCourse_title() {
		return course_title;
	}



	public void setCourse_title(String course_title) {
		this.course_title = course_title;
	}



	public String getCourse_description() {
		return course_description;
	}



	public void setCourse_description(String course_description) {
		this.course_description = course_description;
	}



	public String getTeacher_name() {
		return teacher_name;
	}



	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}



	@Override
	public String toString() {
		return "Courses [course_id=" + course_id + ", course_title=" + course_title + ", course_description="
				+ course_description + ", teacher_name=" + teacher_name + "]";
	}
	
	
}