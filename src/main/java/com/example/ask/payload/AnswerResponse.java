package com.example.ask.payload;

public class AnswerResponse {
	private Long id;
	private String answerText;
	private String username;
	private Long questionId;
	
	public AnswerResponse() {}

	public AnswerResponse(Long id, String answerText, String username, Long questionId) {
		this.id = id;
		this.answerText = answerText;
		this.username = username;
		this.questionId = questionId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAnswerText() {
		return answerText;
	}

	public void setAnswerText(String answerText) {
		this.answerText = answerText;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}
	
	
}
