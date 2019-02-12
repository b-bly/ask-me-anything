package com.example.ask.payload;

import java.util.List;

public class QuestionResponse<T> {
	private Long id;
	private String question;
	private String username;
	
	public QuestionResponse() {
		
	}
	
	public QuestionResponse(Long id, String question, String username) {
		this.id = id;
		this.question = question;
		this.username = username;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}
