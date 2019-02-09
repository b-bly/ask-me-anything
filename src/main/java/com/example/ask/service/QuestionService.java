package com.example.ask.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.ask.model.Question;
import com.example.ask.model.User;
import com.example.ask.payload.QuestionRequest;
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

        System.out.println("create question: " + question);
        
        // save question
        return questionRepository.save(question);
	}    
}