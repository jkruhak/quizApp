var gameState = {
	score: 0,
	currentQuestion: 0,
	correctAnswers: 0,
	index: 0
};

var quizSetup = [
	{
		"question": "Where was the M*A*S*H team stationed?",
		"image": "<img src='images/question1.jpg' alt='Question One'>",
		"choices": ["South Korea", "Vietnam", "Iraq", "Russia"],
		"answer": "choice1",
		"correctAnswer": "M*A*S*H team was stationed in South Korea"
	},
	{
		"question": "What was Corporal O'Riley's favorite drink?",
		"image": "<img src='images/question2.jpg' alt='Question Two'>",
		"choices": ["Beer", "Orange Soda", "Grape Nehi", "Coca-Cola"],
		"answer": "choice3",
		"correctAnswer": "Corporal O'Riley's favorite drink was Grape Nehi"
	},
	{
		"question": "Which actor played the role of Hawkeye?",
		"image": "<img src='images/question3.jpg' alt='Question Three'>",
		"choices": ["Jamie Farr", "Alan Alda", "Larry Linville", "Charles S. Dubin"],
		"answer": "choice2",
		"correctAnswer": "Alan Alda played the part of Hawkeye"
	},
	{
		"question": "What happend to Lt. Colonel Henry Blake?",
		"image": "<img src='images/question4.jpg' alt='Question Four'>",
		"choices": ["He was sent home", "He was sent to a different unit", "He went AWOL", "He died in a plane crash"],
		"answer": "choice4",
		"correctAnswer": "Lt. Colonel Henry Blake died in a plane crash on his way back home"
	},
	{
		"question": "What was Major Margaret Houlihan's nickname?",
		"image": "<img src='images/question5.jpg' alt='Question Five'>",
		"choices": ["Hotstuff", "Hell nurse", "Hotlips", "Maggie"],
		"answer": "choice3",
		"correctAnswer": "Major Margaret Houlihan's nickname was Hotlips"
	}
];

var choices = function() {
	document.getElementById("questionTable").innerHTML = "";

	for(var i = 0; i<4; i++) {
		var radioValue = $("#questionTable tr").length + 1;
	
		$("#questionTable").append("<tr><td>" + "<input type='radio' name='question"+[gameState.index+1]+"' value='choice"+radioValue+"'>" + "</td>" + "<td>" + quizSetup[gameState.currentQuestion]["choices"][i] + "</td></tr>");
	}
};

var nextQuestion = function() {

	$("#newQuestion").text(quizSetup[gameState.currentQuestion]["question"]);
	$("#newQuestion").append(quizSetup[gameState.currentQuestion]["image"]);

	choices();

	console.log("Percentage is " + gameState.score);
	console.log("Correct answers are " + gameState.correctAnswers);
};

var playGame = function() {
	if($('input:radio:checked').val() == quizSetup[gameState.currentQuestion]["answer"]) {
		console.log($('input:radio:checked').val());
		console.log(quizSetup[gameState.currentQuestion]["answer"]);
		gameState.score += 20;
		gameState.correctAnswers++;
	}
	
	gameState.currentQuestion++;

	if(gameState.currentQuestion >= quizSetup.length) {
		document.getElementById("question").style.display="none";
		document.getElementById("end").style.display="block";
		document.getElementById("newGame").style.display="block";
		
		$("#end p").first().text("Your final score is " + gameState.score + "%");
		return false;
	} else {
		nextQuestion();
	}
	
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
		$("#start").hide();
		$("#question").show();
		nextQuestion();
	});

	$("#question").on("click", "#next", function() {
		playGame();
	});

	$("#end").on("click", "#newGame", function() {
		location.reload(true);
	});
});