package com.psl.SchoolMangementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {
	@Id
	@Column(name="admin_id")
	private long admin_id;
	
	@Column(name="admin_Name")
	private String admin_Name;
	
	@Column(name="admin_password")
	private String admin_password;
	
	public long getAdmin_id() {
		return admin_id;
	}
	
	public Admin() {}
	
	public Admin(long admin_id, String admin_Name, String admin_password) {
		super();
		this.admin_id = admin_id;
		this.admin_Name = admin_Name;
		this.admin_password = admin_password;
	}


	public void setAdmin_id(long admin_id) {
		this.admin_id = admin_id;
	}
	public String getAdmin_Name() {
		return admin_Name;
	}
	public void setAdmin_Name(String admin_Name) {
		this.admin_Name = admin_Name;
	}
	public String getAdmin_password() {
		return admin_password;
	}
	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}
	
	
	
}
