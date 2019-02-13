package com.example.ask.payload;

import java.util.List;

public class QuestionResponse<T> {
	private Long id;
	private String questionText;
	private String username;
	
	public QuestionResponse() {
		
	}
	
	public QuestionResponse(Long id, String questionText, String username) {
		this.id = id;
		this.questionText = questionText;
		this.username = username;
	}
	public String getQuestionText() {
		return questionText;
	}
	public void setQuestionText(String questionText) {
		this.questionText = questionText;
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
