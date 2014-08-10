var correctAnswerCount = {
	correctAnswer1: 0,
	correctAnswer2: 0,
	correctAnswer3: 0,
	correctAnswer4: 0,
	correctAnswer5: 0
};

var answerOneCheck = function() {
	var chosen = document.getElementsByName("answers1");

	if(chosen[0].checked == true) {
		correctAnswerCount.correctAnswer1 = 1;
	} 
};

var answerTwoCheck = function() {
	var chosen = document.getElementsByName("answers2");

	if(chosen[2].checked == true) {
		correctAnswerCount.correctAnswer2 = 1;
	}
};

var answerThreeCheck = function() {
	var chosen = document.getElementsByName("answers3");

	if(chosen[1].checked == true) {
		correctAnswerCount.correctAnswer3 = 1;
	}
};

var answerFourCheck = function() {
	var chosen = document.getElementsByName("answers4");

	if(chosen[3].checked == true) {
		correctAnswerCount.correctAnswer4 = 1;
	}
};

var answerFiveCheck = function() {
	var chosen = document.getElementsByName("answers5");

	if(chosen[2].checked == true) {
		correctAnswerCount.correctAnswer5 = 1;
	}
};



correctAnswerCount.total = function() {
	return correctAnswerCount.correctAnswer1 + correctAnswerCount.correctAnswer2 + correctAnswerCount.correctAnswer3 + correctAnswerCount.correctAnswer4 + correctAnswerCount.correctAnswer5;
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
		console.log(correctAnswerCount.total());
	});

	/*--- Question 3 ---*/
	$("#questionTwo").on("click", ".submitButton", function() {
		$("#questionTwo").hide();
		$("#questionThree").show();
		$(".q3").show();
		$(".q3").text("QUESTION 3");
		answerTwoCheck();
		console.log(correctAnswerCount.total());
	});

	/*--- Question 4 ---*/
	$("#questionThree").on("click", ".submitButton", function() {
		$("#questionThree").hide();
		$("#questionFour").show();
		$(".q4").show();
		$(".q4").text("QUESTION 4");
		answerThreeCheck();
		console.log(correctAnswerCount.total());
	});

	/*--- Question 5 ---*/
	$("#questionFour").on("click", ".submitButton", function() {
		$("#questionFour").hide();
		$("#questionFive").show();
		$(".q5").show();
		$(".q5").text("QUESTION 5");
		answerFourCheck();
		console.log(correctAnswerCount.total());
	});

	/*--- Score pge ---*/
	$("#questionFive").on("click", ".submitButton", function() {
		$("#questionFive").hide();
		$("#scorePage").show();
		answerFiveCheck();
		$("#finalScore p").text(correctAnswerCount.total() + "/5");
	});

	/*--- New game ---*/
	$("#scorePage").on("click", ".submitButton", function() {
		location.reload(true);
	});

	

});