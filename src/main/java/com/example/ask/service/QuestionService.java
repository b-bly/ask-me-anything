package com.example.ask.service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.ask.model.Question;
import com.example.ask.model.User;
import com.example.ask.payload.QuestionRequest;
import com.example.ask.payload.QuestionResponse;
import com.example.ask.payload.QuestionUpdateRequest;
import com.example.ask.repository.QuestionRepository;
import com.example.ask.repository.UserRepository;
import com.example.ask.security.UserPrincipal;

@Service
public class QuestionService {

	@Autowired
	private QuestionRepository questionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	
	public Question createQuestion(QuestionRequest questionRequest, UserPrincipal currentUser) {
		// query db for user
		User user = userRepository.getOne(currentUser.getId());
		
        // create new question
        Question question = new Question(questionRequest.getQuestionText());
        question.setUser(user);

        // save question
        return questionRepository.save(question);
	}    
	
	public Question updateQuestion(QuestionUpdateRequest questionUpdateRequest, UserPrincipal currentUser) {
		User user = userRepository.getOne(currentUser.getId());
		
		Question question = new Question(questionUpdateRequest.getQuestionText());
		question.setId(questionUpdateRequest.getId());
		question.setUser(user);
		
		return questionRepository.save(question);
	}
	
	public List<?> getAllQuestions() {
		List<?> questions = questionRepository.findAll();
		
		@SuppressWarnings({ "rawtypes", "unchecked" })
		List<QuestionResponse> questionResponse = (questions).stream().map(question -> {
			return new QuestionResponse(((Question) question).getId(), ((Question) question).getQuestionText(), ((Question) question).getUser().getUsername());
		}).collect(Collectors.toList());
		
		return questionResponse;
	}
	
	public void deleteQuestion(Long questionId) {
		questionRepository.deleteById(questionId);
		
	}
}