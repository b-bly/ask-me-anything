package com.example.ask.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.ask.model.Question;
import com.example.ask.payload.ApiResponse;
import com.example.ask.payload.PagedResponse;
import com.example.ask.payload.QuestionAndAnswerResponse;
import com.example.ask.payload.QuestionRequest;
import com.example.ask.payload.QuestionUpdateRequest;
import com.example.ask.repository.QuestionRepository;
import com.example.ask.security.CurrentUser;
import com.example.ask.security.UserPrincipal;
import com.example.ask.service.QuestionService;

@RestController
@RequestMapping("/api/question")
public class QuestionController {
	@Autowired
	private QuestionService questionService;

	@Autowired
	private QuestionRepository questionRepository;

	@PostMapping
	public ResponseEntity<?> createQuestion(@RequestBody QuestionRequest questionRequest,
			@CurrentUser UserPrincipal currentUser) {
		System.out.println("Question post");
		Question question = questionService.createQuestion(questionRequest, currentUser);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{questionId}")
				.buildAndExpand(question.getId()).toUri();

		return ResponseEntity.created(location) // 201
				.body(new ApiResponse(true, "Question Created Successfully"));
	}

	@GetMapping
	public List<?> getAllQuestions() {
		return questionService.getAllQuestions();
	}
	
	//To do: Get page and size from request body
	@GetMapping("/questions-and-answers/{page}/{size}")
	public PagedResponse<QuestionAndAnswerResponse> getAllQuestionsAndAnswers(
			@PathVariable int page, @PathVariable int size,
			@CurrentUser UserPrincipal currentUser) {
		return questionService.getAllQuestionsAndAnswers(currentUser, page, size);
	}

	@PutMapping
	public ResponseEntity<?> updateQuestion(@RequestBody QuestionUpdateRequest questionUpdateRequest,
			@CurrentUser UserPrincipal currentUser) {
		questionService.updateQuestion(questionUpdateRequest, currentUser);

		return ResponseEntity.ok().body(new ApiResponse(true, "Question updated successfully"));

	}

	@DeleteMapping("/{questionId}")
	public ResponseEntity<?> deleteQuestion(@PathVariable(value = "questionId") Long questionId,
			@CurrentUser UserPrincipal currentUser) {
		System.out.println("delete questionId: " + questionId);

		Question question = questionRepository.getOne(questionId);
		Long authorId = question.getUser().getId();
		if (authorId != currentUser.getId()) {
			return ResponseEntity.ok().body(new ApiResponse(true, "Not authorized"));
		} else {

			questionService.deleteQuestion(questionId);
			return ResponseEntity.ok().body(new ApiResponse(true, "Question deleted successfully"));
		}
	}
}
