package com.example.ask.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="answers")
public class Answer {    
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="answer_text")
    private String answer;
    
    @ManyToOne(fetch=FetchType.LAZY, optional=false)
    @JoinColumn(name="question_id", nullable=false)
    private Question question;
    
    @ManyToOne(fetch=FetchType.LAZY, optional=false)
    @JoinColumn(name="author_id", nullable=false)
    private User user;
    
    public Answer () {}

	public Answer(String answer) {
		this.answer = answer;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}
	
    
    
}
