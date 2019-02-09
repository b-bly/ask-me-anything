package com.example.ask.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.ask.model.Question;
import com.example.ask.model.User;
import com.example.ask.payload.QuestionRequest;
import com.example.ask.repository.QuestionRepository;

@Service
public class QuestionService {

	@Autowired
	private QuestionRepository questionRepository;
	
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	
	public Question createQuestion(QuestionRequest questionRequest) {
		// get user from authentication
        User user = (User) authentication.getPrincipal();
		
        // create new question
        Question question = new Question();
        question.setQuestionText(questionRequest.getQuestionText());
        question.setUser(user);
        
        System.out.println("questionService: Question: " + question);
        
        // save question
        return questionRepository.save(question);
	}    
}
