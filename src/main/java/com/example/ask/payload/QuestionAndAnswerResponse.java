package com.example.ask.payload;

import java.util.List;

public class QuestionAndAnswerResponse {
	private Long id;
	private String questionText;
	private String username;
	private List<AnswerResponse> answers;
	
	public QuestionAndAnswerResponse() {
		
	}

	public QuestionAndAnswerResponse(Long id, String questionText, String username, List<AnswerResponse> answers) {
		this.id = id;
		this.questionText = questionText;
		this.username = username;
		this.answers = answers;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public List<AnswerResponse> getAnswers() {
		return answers;
	}

	public void setAnswers(List<AnswerResponse> answers) {
		this.answers = answers;
	}
	
	
}
