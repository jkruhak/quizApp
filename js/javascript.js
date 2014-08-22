var answers = ["choice1", "choice3", "choice2", "choice4", "choice3"];

var question = ["Where was the M*A*S*H team stationed?", 
				"What was Corporal O'Riley's favorite drink?", 
				"Which actor played the role of Hawkeye?", 
				"What happend to Lt. Colonel Henry Blake?", 
				"What was Major Margaret Houlihan's nickname?"];

var choices = [["South Korea", "Vietnam", "Iraq", "Russia"],
			  ["Beer", "Orange Soda", "Grape Nehi", "Coca-Cola"],
			  ["Jamie Farr", "Alan Alda", "Larry Linville", "Charles S. Dubin"],
			  ["He was sent home", "He was sent to a different unit", "He went AWOL", "He died in a plane crash"],
			  ["Hotstuff", "Hell nurse", "Hotlips", "Maggie"]];

var images = ["<img src='images/question1.jpg' alt='Question One'>", 
			  "<img src='images/question2.jpg' alt='Question Two'>",
			  "<img src='images/question3.jpg' alt='Question Three'>",
			  "<img src='images/question4.jpg' alt='Question Four'>",
			  "<img src='images/question5.jpg' alt='Question Five'>"];

var gameState = {
	score: 0,
	currentQuestion: 0,
	correctAnswers: 0,
	index: 0
};

var insertQuestion = function() {
	clearQuestion();
	
	if(gameState.index >= question.length) {
		document.getElementById("question").style.display="none";
		document.getElementById("end").style.display="block";
		return false;
	} else {
		insertOptions();
		gameState.index++;
	}

};

var insertOptions = function() {
	$("#question p").text(question[gameState.index]);
	$("#question p").append(images[gameState.index]);

	for(var i = 0; i<4; i++) {
		var radioValue = $("#questionTable tr").length + 1;
	
		$("#questionTable").append("<tr><td>" + "<input type='radio' name='question"+[gameState.index+1]+"' value='choice"+radioValue+"'>" + "</td>" + "<td>" + choices[gameState.index][i] + "</td></tr>");
	}
};

var clearQuestion = function() {
	document.getElementById("questionTable").innerHTML = "";
	$("#question p").text("");
};

var stateUpdate = function () {
	gameState.score += 20;
	gameState.correctAnswers++;
};

gameState.totalCorrectAnswers = function() {
	return gameState.correctAnswers;
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

	$(window).load(function() {
		document.getElementById("start").style.display="block";
		document.getElementById("question").style.display="none";
		document.getElementById("end").style.display="none";
	});

	/*--- Start Quiz ---*/
	$("#start").on("click", "#startGame", function() {
		document.getElementById("start").style.display="none";
		document.getElementById("question").style.display="block";
		insertQuestion();
	});

	/*--- Correct choice ---*/
	$("#questionTable").on("click", function() {
  		if($('input[name=question1]:checked').val() === "choice1") {
  			gameState.correctAnswers++;	
  		} else if ($('input[name=question2]:checked').val() === "choice3") {
  			gameState.correctAnswers++;
  		} else if ($('input[name=question3]:checked').val() === "choice2") {
  			gameState.correctAnswers++;
  		} else if ($('input[name=question4]:checked').val() === "choice4") {
  			gameState.correctAnswers++;
  		} else if ($('input[name=question5]:checked').val() === "choice3") {
  			gameState.correctAnswers++;
  		}
	});

	/*--- Next Question ---*/
	$("#question").on("click", "#submitButton", function() {
		insertQuestion();
		//$("#end p").text("Correct answers: " + gameState.totalCorrectAnswers() + "/5");
		$("#right p").text(gameState.correctAnswers);
	});

	/*--- New Game ---*/
	$("#end").on("click", "#newGame", function() {
		location.reload(true);
	});
});		