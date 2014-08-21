var answers = ["South Korea", "Grape Nehi", "Alan Alda", "He died in a plane crash", "Hotlips"];

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
		answerCheck();
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
	document.getElementById("start").style.display="none";
	$("#question p").text("");
};

var stateUpdate = function () {
	gameState.score += 20;
	gameState.currentQuestion++;
	$("#end p").text("Correct answers: " + gameState.score + "/5");
};

var answerCheck = function() {
	if($(document.getElementByName("question'+[gameState.index+1]+'").val() == answers[gameState.index])) {
		stateUpdate();
	}
};

gameState.totalScore = function() {
	return gameState.score;
};

$(document).ready(function() {
	$(window).load(function() {
		document.getElementById("start").style.display="block";
		document.getElementById("end").style.display="none";
	});

	/*--- Window resize ---*/
	function setHeight() {
		windowHeight = $(window).innerHeight();
		$('#windowBox').css('min-height', windowHeight);
	};
	
	setHeight();

	$(window).resize(function() {
		setHeight();
	});

	/*--- Next Question ---*/
	$("#question").on("click", "#submitButton", function() {
		insertQuestion();
	});

	/*--- New Game ---*/
	$("#end").on("click", "#newGame", function() {
		location.reload(true);
	});

});		