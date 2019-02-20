use `ask_me_anything`;


INSERT INTO `answers` (`answer_text`, `author_id`, `question_id`) values (
	'brain energy', 1, 1), 
	('who knows', 1, 1),
	('they are tired', 1, 2);

INSERT INTO `questions` (`question_text`, `author_id`) values (
	'Why does it take so long for humans to reach maturity?', 1
), (
	'Why do cats sleep so much?', 1
), (
	'Why are there Jahova\'s wittnesses?',
    1
), (
	'Is it nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them?',
    1
);
