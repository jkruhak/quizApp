/*--- Game stat ---*/
var gameState = {
	score: 0,
	currentQuestion: 0,
	correctAnswers: 0,
	index: 0
};

/*--- Slide setup ---*/
var quizSetup = [
	{
		"question": "Where was the M*A*S*H team stationed?",
		"image": "<img src='images/question1.jpg' alt='Picture for Question One'>",
		"choices": ["South Korea", "Vietnam", "Iraq", "Russia"],
		"answer": "choice1",
		"correctAnswer": "M*A*S*H team was stationed in South Korea"
	},
	{
		"question": "What was Corporal O'Riley's favorite drink?",
		"image": "<img src='images/question2.jpg' alt='Picture for Question Two'>",
		"choices": ["Beer", "Orange Soda", "Grape Nehi", "Coca-Cola"],
		"answer": "choice3",
		"correctAnswer": "Corporal O'Riley's favorite drink was Grape Nehi"
	},
	{
		"question": "Which actor played the role of Hawkeye?",
		"image": "<img src='images/question3.jpg' alt='Picture for Question Three'>",
		"choices": ["Jamie Farr", "Alan Alda", "Larry Linville", "Charles S. Dubin"],
		"answer": "choice2",
		"correctAnswer": "Alan Alda played the part of Hawkeye"
	},
	{
		"question": "What happend to Lt. Colonel Henry Blake?",
		"image": "<img src='images/question4.jpg' alt='Picture for Question Four'>",
		"choices": ["He was sent home", "He was sent to a different unit", "He went AWOL", "He died in a plane crash"],
		"answer": "choice4",
		"correctAnswer": "Lt. Colonel Henry Blake died in a plane crash on his way back home"
	},
	{
		"question": "What was Major Margaret Houlihan's nickname?",
		"image": "<img src='images/question5.jpg' alt='Picture for Question Five'>",
		"choices": ["Hotstuff", "Hell nurse", "Hotlips", "Maggie"],
		"answer": "choice3",
		"correctAnswer": "Major Margaret Houlihan's nickname was Hotlips"
	}
];

/*--- Add queston options ---*/
var addQuestionOptions = function() {
	document.getElementById("questionTable").innerHTML = "";

	for(var i = 0; i<4; i++) {
		var radioValue = $("#questionTable tr").length + 1;
	
		$("#questionTable").append("<tr><td>" + "<input type='radio' name='question"+[gameState.index+1]+"' value='choice"+radioValue+"'>" + "</td>" + "<td>" + quizSetup[gameState.currentQuestion]["choices"][i] + "</td></tr>");
	}
};

/*--- Move on to next question ---*/
var askNextQuestion = function() {

	$("#newQuestion").text(quizSetup[gameState.currentQuestion]["question"]);
	$("#newQuestion").append(quizSetup[gameState.currentQuestion]["image"]);

	addQuestionOptions();

	$("#left p").text(gameState.currentQuestion+1 + "/" + quizSetup.length);
};

/*--- Go through quiz ---*/
var playGame = function() {
	if($('input:radio:checked').val() === quizSetup[gameState.currentQuestion]["answer"]) {
		gameState.score += 20;
		gameState.correctAnswers++;
	}
	
	gameState.currentQuestion++;

	$("#right p").text(gameState.correctAnswers);

	if(gameState.currentQuestion >= quizSetup.length) {
		finalScorePage();

		return false;
	} else {
		askNextQuestion();
	}
};

/*--- Validate that radio button is checked ---*/
var validate = function() {
	if(!$("input:radio:checked").val()) {
		result = false;
	} else {
		result = true;
	}
	return result;
};

var checkAnswer = function(answer) {
	
	var isValid = validate(answer);
	
	if(isValid){
		playGame();
	}
	else{
		alert("Please make a choice");
	}
}

/*--- Start game ---*/
var startGame = function() {
	$("#start").hide();
	$("#question").fadeIn(500);

	askNextQuestion();
};

/*--- Show final score ---*/
var finalScorePage = function() {
	document.getElementById("question").style.display="none";
	document.getElementById("end").style.display="block";
	document.getElementById("newGame").style.display="block";
	
	$("#end p").first().text("Your final score is " + gameState.score + "%");
};

/*--- End game ---*/
var endGame = function() {
	gameState.score = 0;
	gameState.currentQuestion = 0;
	gameState.correctAnswers = 0;

	document.getElementById("end").style.display="none";
	document.getElementById("start").style.display="block";

	$("#left p").text("");
	$("#right p").text("");
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

	$("#start").on("click", "#startGame", function() {
		startGame();
	});

	/*--- Mouse events ---*/
	$("#question").on("click", "#next", function() {
		checkAnswer();
	});

	$("#end").on("click", "#newGame", function() {
		endGame();
	});

	/*--- Keyboard events ---*/
	$("body").on("keypress", function(event) {
		if(event.which == '115') {
			event.preventDefault();
			startGame();
		}

		if(event.which == '13') {
			event.preventDefault();
			checkAnswer();
		}
		if(event.which == '110') {
			event.preventDefault();
			endGame();
		}
	});

});