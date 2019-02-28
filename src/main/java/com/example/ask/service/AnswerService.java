package com.example.ask.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ask.model.Answer;
import com.example.ask.model.Question;
import com.example.ask.model.User;
import com.example.ask.payload.AnswerRequest;
import com.example.ask.payload.AnswerResponse;
import com.example.ask.payload.AnswerUpdateRequest;
import com.example.ask.payload.QuestionUpdateRequest;
import com.example.ask.repository.AnswerRepository;
import com.example.ask.repository.QuestionRepository;
import com.example.ask.repository.UserRepository;
import com.example.ask.security.UserPrincipal;

@Service
public class AnswerService {
	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private AnswerRepository answerRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public Answer createAnswer(AnswerRequest answerRequest, UserPrincipal currentUser) {
		// query db for user
		User user = userRepository.getOne(currentUser.getId());
		
		// query db for question
		Question question = questionRepository.getOne(answerRequest.getQuestionId());
		
		// create new answer
		Answer answer = new Answer(answerRequest.getAnswerText());
		answer.setUser(user);
		answer.setQuestion(question);		
		
		// save answer to db
		return answerRepository.save(answer);
	}
	
	public List<?> getAllAnswers() {
		List<?> answers = answerRepository.findAll();
		
		List<AnswerResponse> answerResponse = answers.stream().map(answer -> {
			return new AnswerResponse(((Answer) answer).getId(), 
					((Answer) answer).getAnswerText(), 
					((Answer) answer).getUser().getUsername(), 
					((Answer) answer).getQuestion().getId());
		}).collect(Collectors.toList());
		
		return answerResponse;
	}
	
	public Question updateQuestion(QuestionUpdateRequest questionUpdateRequest, UserPrincipal currentUser) {
		User user = userRepository.getOne(currentUser.getId());

		Question question = new Question(questionUpdateRequest.getQuestionText());
		question.setId(questionUpdateRequest.getId());
		question.setUser(user);

		return questionRepository.save(question);
	}
	
	public Answer updateAnswer(AnswerUpdateRequest answerUpdateRequest,
			UserPrincipal currentUser) {
//		User user = userRepository.getOne(answerUpdateRequest.getId());
		
		Answer answer = answerRepository.getOne(answerUpdateRequest.getId());
		answer.setAnswerText(answerUpdateRequest.getAnswerText());
		
		return answerRepository.save(answer);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
