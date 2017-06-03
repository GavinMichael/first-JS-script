//All the questions live here
var questionArray = [
"What falling object is said to have inspired Isaac Newton's theories about gravity?",
"What color is a NYC taxi?", 
"Where in the world does the largest tropical rainforest grow?",
"In which country do the famous pyramids of Giza stand?",
"What used to advertise its products as 'Fingerlickin good'?"
];

var q1 = "What falling object is said to have inspired Isaac Newton's theories about gravity?";
var q2 = "What color is a NYC taxi?";
var q3 = "Where in the world does the largest tropical rainforest grow?";
var q4 = "In which country do the famous pyramids of Giza stand?";
var q5 = "What used to advertise its products as 'Fingerlickin good'?";

//All the answers live here
var answerArray = [
"Apple",
"Yellow",
"Amazon",
"Egypt",
"KFC"
];

var a1 = "apple";
var a2 = "yellow";
var a3 = "amazon";
var a4 = "egypt";
var a5 = "kfc";

//all the ids that are modified
var actionArea_page = document.getElementById('actionArea');
var question_page = document.getElementById('question');
var questionsLeft_page = document.getElementById('questionsLeft');
var submitBtn_page = document.getElementById('submitBtn');
var textBox = document.getElementById('userAnswer');
var outcome_page = document.getElementById('outcome');
var resultText = document.getElementById('gameResults');

function startGame() {
	resultText.style.display = 'none';
	resultText.innerHTML = '';
	actionArea_page.style.display = 'block';
	gameTrigger.style.display = 'none';
	displayQuestion();
}

var questionCounter = 1;
var correctAnswers = 0;

function displayQuestion() {
	//reset the yes correct/ no incorrect text
	//outcome.innerHTML = "";

	switch (questionCounter){
		case 1:
			question_page.innerHTML = q1;
			questionsLeft.innerHTML = (5 - questionCounter) + ' Questions Left' ;
			break;

		case 2:
			question_page.innerHTML = q2;
			questionsLeft.innerHTML = (5 - questionCounter) + ' Questions Left' ;
			break;

		case 3:
			question_page.innerHTML = q3;
			questionsLeft.innerHTML = (5 - questionCounter) + ' Questions Left' ;
			break;

		case 4:
			question_page.innerHTML = q4;
			questionsLeft.innerHTML = (5 - questionCounter) + ' Questions Left' ;
			break;

		case 5:
			question_page.innerHTML = q5;
			questionsLeft.innerHTML = 'Last Question' ;
			break;

		case 6:
			gameComplete();
			break;
	}
}


var txtBoxAnswer;

function ansSubmit() {
	txtBoxAnswer = textBox.value.toLowerCase();
	checkAnswer();
}

function checkAnswer() {
	if (txtBoxAnswer === "") {
		outcome_page.innerHTML = 'Answer to continue';
	} else {
		switch(questionCounter) {
			case 1:
				if (txtBoxAnswer === a1) {
					outcome_page.innerHTML = "Yes, that\'s correct";
					correctAnswers++;
				} else if (txtBoxAnswer !== a1) {
					outcome_page.innerHTML = "<span class='wrong-answer'>No, that\'s incorrect</span>";
				};
				break;

			case 2:
				if (txtBoxAnswer === a2) {
					outcome_page.innerHTML = "Yes, that\'s correct";
					correctAnswers++;
				} else if (txtBoxAnswer !== a2) {
					outcome_page.innerHTML = "<span class='wrong-answer'>No, that\'s incorrect</span>";
				};
				break;

			case 3:
				if (txtBoxAnswer === a3) {
					outcome_page.innerHTML = "Yes, that\'s correct";
					correctAnswers++;
				} else if (txtBoxAnswer !== a3) {
					outcome_page.innerHTML = "<span class='wrong-answer'>No, that\'s incorrect</span>";
				};
				break;

			case 4:
				if (txtBoxAnswer === a4) {
					outcome_page.innerHTML = "Yes, that\'s correct";
					correctAnswers++;
				} else if (txtBoxAnswer !== a4) {
					outcome_page.innerHTML = "<span class='wrong-answer'>No, that\'s incorrect</span>";
				};
				break;

			case 5:
				if (txtBoxAnswer === a5) {
					outcome_page.innerHTML = "Yes, that\'s correct";
					correctAnswers++;
				} else if (txtBoxAnswer !== a5) {
					outcome_page.innerHTML = "<span class='wrong-answer'>No, that\'s incorrect</span>";
				};
				break;
		}
		questionCounter++;
		userAnswer.value = '';
		displayQuestion();
	}
}

function gameComplete() {
	//resetting stuff
	evalScore();
	actionArea.style.display = 'none';
	gameTrigger.style.display = 'inline-block';
	gameTrigger.innerHTML = 'Replay?';
	questionCounter = 1;
	correctAnswers = 0;
	outcome_page.innerHTML = '';
}

function evalScore() {
	resultText.style.display = 'block';
	resultText.innerHTML = '';

	if (correctAnswers === 5) {
		console.log(correctAnswers);
		resultText.innerHTML = "<span class='emj'>😆</span> <br>5 / 5 <br> Good Job!";
	} else if (correctAnswers >= 3) {
		resultText.innerHTML = "<span class='emj'>😊</span> <br>" + correctAnswers + " /5" + "<br> Not bad";
	} else if (correctAnswers > 1) {
		resultText.innerHTML = "<span class='emj'>😖</span> <br>" + correctAnswers + " /5" + "<br> Could do better";
	} else if (correctAnswers === 0) {
		resultText.innerHTML = "<span class='emj'>😐</span> <br>" + correctAnswers + " /5" + "<br> Boo!";
	}

	
}
