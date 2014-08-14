var gameState = {
	score: 0,
	currentQuestion: 0
};

var stateUpdate = function () {
	gameState.score += 20;
	gameState.currentQuestion++;
	$(".correctAnswer span").text("Correct answers: " + gameState.currentQuestion + "/5");
};

var answerCheck = function() {
	/*--- Question 1 Answer Check ---*/
	if(document.questionOneForm.answers1[0].checked == true) {
		stateUpdate();
	} 
	/*--- Question 2 Answer Check ---*/
	else if(document.questionTwoForm.answers2[2].checked == true) {
		stateUpdate();
	}
	/*--- Question 3 Answer Check ---*/
	else if(document.questionThreeForm.answers3[1].checked == true) {
		stateUpdate();
	}
	/*--- Question 4 Answer Check ---*/
	else if(document.questionFourForm.answers4[3].checked == true) {
		stateUpdate();
	}
	/*--- Question 5 Answer Check ---*/
	else if(document.questionFiveForm.answers5[2].checked == true) {
		stateUpdate();
	}
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

	/*--- Window resize ---*/
	function setHeight() {
		windowHeight = $(window).innerHeight();
		$('#windowBox').css('min-height', windowHeight);
	};
	
	setHeight();

	$(window).resize(function() {
		setHeight();
	});


	$("#instructions").on("click", "#startButton", function() {
		$("#instructions").hide();
		$("#questionOne").show();
		$(".answerDiv").show();
		$(".submitButton").show();
		$("#startButton").hide();
	});

	/*--- Question 1 ---*/
	$("#questionOne").on("click", ".submitButton", function() {
		answerCheck();
		answerShow();
		//$(".q1").text("QUESTION 1");		
	});

	$("#questionOne").on("click", ".continueButton", function() {
		$("#questionOne").hide();
		$("#questionTwo").show();
		questionShow();
	});

	/*--- Question 2 ---*/
	$("#questionTwo").on("click", ".submitButton", function() {
		answerShow();
		answerCheck();
	});

	$("#questionTwo").on("click", ".continueButton", function()	{
		$("#questionTwo").hide();
		$("#questionThree").show();
		questionShow();
	});

	/*--- Question 3 ---*/
	$("#questionThree").on("click", ".submitButton", function() {
		answerShow();
		answerCheck();
		
	});

	$("#questionThree").on("click", ".continueButton", function()	{
		$("#questionThree").hide();
		$("#questionFour").show();
		questionShow();
	});

	/*--- Question 4 ---*/
	$("#questionFour").on("click", ".submitButton", function() {
		answerShow();
		answerCheck();
		
	});	

	$("#questionFour").on("click", ".continueButton", function()	{
		$("#questionFour").hide();
		$("#questionFive").show();
		questionShow();
	});
	
	/*--- Question 5 ---*/
	$("#questionFive").on("click", ".submitButton", function() {
		answerShow();
		answerCheck();
		
	});

	$("#questionFive").on("click", ".continueButton", function() {
		$("#questionFive").hide();
		$(".continueButton").hide();
		$(".correctAnswer").hide();
		$("#scorePage").show();
		$(".submitButton").show();
		$("#finalCorrectAnswers p").text("You got " + gameState.currentQuestion + "/5 questions right");
		$("#finalScore p").text(gameState.score + "%");
	});

	/*--- New game ---*/
	$("#scorePage").on("click", ".submitButton", function() {
		location.reload(true);
	});

});

