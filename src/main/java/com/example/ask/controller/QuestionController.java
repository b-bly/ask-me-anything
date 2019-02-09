package com.example.ask.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.ask.model.Question;
import com.example.ask.model.User;
import com.example.ask.payload.ApiResponse;
import com.example.ask.payload.QuestionRequest;
import com.example.ask.repository.UserRepository;
import com.example.ask.security.CurrentUser;
import com.example.ask.security.UserPrincipal;
import com.example.ask.service.QuestionService;

@RestController
@RequestMapping("/api/question")
public class QuestionController {
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping
	public ResponseEntity<?> createQuestion(@RequestBody QuestionRequest questionRequest, @CurrentUser UserPrincipal currentUser) {
		System.out.println("Question post");
		Question question = questionService.createQuestion(questionRequest, currentUser);
		
		 URI location = ServletUriComponentsBuilder
	                .fromCurrentRequest().path("/{pollId}")
	                .buildAndExpand(question.getId()).toUri();

		 return ResponseEntity.created(location)
	                .body(new ApiResponse(true, "Poll Created Successfully"));
	}
}
