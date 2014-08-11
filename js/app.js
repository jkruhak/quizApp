var correctAnswerCount = {
	score: 0,
	correctAnswer: 0
};

/*--- Question 1 Answer Check ---*/
var answerOneCheck = function() {
	if(document.questionOneForm.answers1[0].checked == true) {
		correctAnswerCount.score += 20;
		correctAnswerCount.correctAnswer++;
	} 
};

/*--- Question 2 Answer Check ---*/
var answerTwoCheck = function() {
	if(document.questionTwoForm.answers2[2].checked == true) {
		correctAnswerCount.score += 20;
		correctAnswerCount.correctAnswer++;
	}
};

/*--- Question 3 Answer Check ---*/
var answerThreeCheck = function() {
	if(document.questionThreeForm[1].checked == true) {
		correctAnswerCount.score += 20;
		correctAnswerCount.correctAnswer++;
	}
};

/*--- Question 4 Answer Check ---*/
var answerFourCheck = function() {
	if(document.questionFourForm[3].checked == true) {
		correctAnswerCount.score += 20;
		correctAnswerCount.correctAnswer++;
	}
};

/*--- Question 5 Answer Check ---*/
var answerFiveCheck = function() {
	if(document.questionFiveForm[2].checked == true) {
		correctAnswerCount.score += 20;
		correctAnswerCount.correctAnswer++;
	}
};

/*--- Score ---*/
correctAnswerCount.totalScore = function() {
	return correctAnswerCount.score;
};

/*--- Correct Answers ---*/
correctAnswerCount.totalCorrectAnswers = function() {
	return correctAnswerCount.correctAnswer;
};

var answerShow = function() {
	$(".answerDiv").hide();
	$(".correctAnswer").fadeIn(500);
	$(".submitButton").hide();
	$(".continueButton").show();
};

var questionShow = function() {
	$(".continueButton").hide();
	$(".correctAnswer").hide();
	$(".answerDiv").show();
	$(".submitButton").show();
};

$(document).ready(function() {

	
	$("#instructions").on("click", "#startButton", function() {
		$("#instructions").hide();
		$("#questionOne").show();
		$(".answerDiv").show();
		$(".submitButton").show();
		$(".q1").show();
		$(".q1").text("QUESTION 1");
		$(".q2").hide();
		$(".q3").hide();
		$(".q4").hide();
		$(".q5").hide();
	});

	/*--- Question 1 ---*/
	$("#questionOne").on("click", ".submitButton", function() {
		answerShow();
		$(".q1").text("QUESTION 1");
		answerOneCheck();
		$(".correctAnswer span").text("Correct answers: " + correctAnswerCount.totalCorrectAnswers() + "/5");
	});

	$("#questionOne").on("click", ".continueButton", function() {
		$("#questionOne").hide();
		$("#questionTwo").show();
		$(".q2").show();
		$(".q2").text("QUESTION 2");
		questionShow();
	});

	/*--- Question 2 ---*/
	$("#questionTwo").on("click", ".submitButton", function() {
		answerShow();
		answerTwoCheck();
		$(".correctAnswer span").text("Correct answers: " + correctAnswerCount.totalCorrectAnswers() + "/5");
	});

	$("#questionTwo").on("click", ".continueButton", function()	{
		$("#questionTwo").hide();
		$("#questionThree").show();
		$(".q3").show();
		$(".q3").text("QUESTION 3");
		questionShow();
	});

	/*--- Question 3 ---*/
	$("#questionThree").on("click", ".submitButton", function() {
		answerShow();
		answerThreeCheck();
		$(".correctAnswer span").text("Correct answers: " + correctAnswerCount.totalCorrectAnswers() + "/5");
	});

	$("#questionThree").on("click", ".continueButton", function()	{
		$("#questionThree").hide();
		$("#questionFour").show();
		$(".q4").show();
		$(".q4").text("QUESTION 4");
		questionShow();
	});

	/*--- Question 4 ---*/
	$("#questionFour").on("click", ".submitButton", function() {
		answerShow();
		answerFourCheck();
		$(".correctAnswer span").text("Correct answers: " + correctAnswerCount.totalCorrectAnswers() + "/5");
	});	

	$("#questionFour").on("click", ".continueButton", function()	{
		$("#questionFour").hide();
		$("#questionFive").show();
		$(".q5").show();
		$(".q5").text("QUESTION 5");
		questionShow();
	});
	
	/*--- Question 5 ---*/
	$("#questionFive").on("click", ".submitButton", function() {
		answerShow();
		answerFiveCheck();
		$(".correctAnswer span").text("Correct answers: " + correctAnswerCount.totalCorrectAnswers() + "/5");
	});

	$("#questionFive").on("click", ".continueButton", function() {
		$("#questionFive").hide();
		$(".continueButton").hide();
		$(".correctAnswer").hide();
		$("#scorePage").show();
		$(".submitButton").show();
		$("#finalCorrectAnswers p").text("You got " + correctAnswerCount.totalCorrectAnswers() + "/5 questions right");
		$("#finalScore p").text(correctAnswerCount.totalScore() + "%");
	});

	/*--- New game ---*/
	$("#scorePage").on("click", ".submitButton", function() {
		location.reload(true);
	});
});