package com.example.ask.controller;


import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.ask.model.Answer;
import com.example.ask.payload.AnswerRequest;
import com.example.ask.payload.ApiResponse;
import com.example.ask.security.CurrentUser;
import com.example.ask.security.UserPrincipal;
import com.example.ask.service.AnswerService;

@RestController
@RequestMapping("/api/answer")
public class AnswerController {
	@Autowired
	private AnswerService answerService;
	
	@PostMapping
	public ResponseEntity<?> createAnswer(@RequestBody AnswerRequest answerRequest,
			@CurrentUser UserPrincipal currentUser) {
		
		System.out.println("Answer request: ");
		System.out.println(answerRequest.getAnswerText());
		
		Answer answer = answerService.createAnswer(answerRequest, currentUser);

		// attach answerId to uri
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{answerId}")
				.buildAndExpand(answer.getId()).toUri();

		return ResponseEntity.created(location) 
				.body(new ApiResponse(true, "Answer Created Successfully"));
	}
}
