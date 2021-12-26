package com.psl.SchoolMangementSystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResourceNotFoundExceptionForTeacher extends RuntimeException {

	private static final long serialVersionUID=1L;
	public ResourceNotFoundExceptionForTeacher(String message)
	{
		super(message);
	}
}