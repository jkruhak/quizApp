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

$(document).ready(function() {

	/*--- Question 1 ---*/
	$("#instructions").on("click", "#startButton", function() {
		$("#instructions").hide();
		$("#questionOne").show();
		$(".q1").show();
		$(".q1").text("QUESTION 1");
		$(".q2").hide();
		$(".q3").hide();
		$(".q4").hide();
		$(".q5").hide();
	});

	/*--- Question 2 ---*/
	$("#questionOne").on("click", ".submitButton", function() {
		$("#questionOne").hide();
		$("#questionTwo").show();
		$(".q1").text("QUESTION 1");
		$(".q2").show();
		$(".q2").text("QUESTION 2");
		answerOneCheck();
		console.log(correctAnswerCount.totalCorrectAnswers());
	});

	/*--- Question 3 ---*/
	$("#questionTwo").on("click", ".submitButton", function() {
		$("#questionTwo").hide();
		$("#questionThree").show();
		$(".q3").show();
		$(".q3").text("QUESTION 3");
		answerTwoCheck();
		console.log(correctAnswerCount.totalCorrectAnswers());
	});

	/*--- Question 4 ---*/
	$("#questionThree").on("click", ".submitButton", function() {
		$("#questionThree").hide();
		$("#questionFour").show();
		$(".q4").show();
		$(".q4").text("QUESTION 4");
		answerThreeCheck();
		console.log(correctAnswerCount.totalCorrectAnswers());
	});

	/*--- Question 5 ---*/
	$("#questionFour").on("click", ".submitButton", function() {
		$("#questionFour").hide();
		$("#questionFive").show();
		$(".q5").show();
		$(".q5").text("QUESTION 5");
		answerFourCheck();
		console.log(correctAnswerCount.totalCorrectAnswers());
	});

	/*--- Score pge ---*/
	$("#questionFive").on("click", ".submitButton", function() {
		$("#questionFive").hide();
		$("#scorePage").show();
		answerFiveCheck();
		$("#finalCorrectAnswers p").text("You got " + correctAnswerCount.totalCorrectAnswers() + "/5 questions right");
		$("#finalScore p").text(correctAnswerCount.totalScore() + "%");
	});

	/*--- New game ---*/
	$("#scorePage").on("click", ".submitButton", function() {
		location.reload(true);
	});
});