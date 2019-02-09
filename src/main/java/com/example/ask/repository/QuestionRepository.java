package com.example.ask.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ask.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	Optional<Question> findById(Long questionId);
	
}
