package com.example.ask.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ask.model.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
	Optional<Answer> findById(Long questionId);
}
