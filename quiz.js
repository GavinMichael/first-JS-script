//All the questions live here
var questionArray = [
"What falling object is said to have inspired Isaac Newton's theories about gravity?",
"What color is a NYC taxi?", 
"Where in the world does the largest tropical rainforest grow?",
"In which country do the famous pyramids of Giza stand?",
"What used to advertise its products as 'Fingerlickin good'?"
];

//All the answers live here
var answerArray = [
"Apple",
"Yellow",
"Amazon",
"Egypt",
"KFC"
];

//The count to keep track of the correct asnwers
var correctAnswerCount = 0;

//used to display how many questions are left
var questionsLeft;


//This is called when the Play Button is clicked
function startGame() {

	//false exists this function
	if (confirm('Want to play the game?') == true) {
		
		//resetting the counter to 0 so that if the player tries agian, it would refresh the count of correct answers
		correctAnswerCount = 0;

		//calling ask question function which is where all the meat is 
		askQuestion();

		//called to display a message based on the correctAnswerCount
		gameComplete();

		//changes the text of the 'Play' btn to 'Replay'
		document.getElementById('gameTrigger').innerHTML = 'Replay';
	}
}

function askQuestion() {
	
	/*
	- Loops through the array and spits out each question to the user
	- The index of the question asked is also given to check the answer on answerArray
	- element => Question
	- index => index of the current element
	- array => to check the len so that the no of remaining questions can be calculated
	*/
	questionArray.forEach(function(element, index, array) {

		//questions left == array.len - current index
		questionsLeft = array.length - index;

		//each element is a question
		//ask each question from the user
		var userResponse = prompt(element.toString() + ' [' + questionsLeft + ' questions left]');


		if (userResponse === "") {																																							//if user input is empty
			alert('It\'s ok! The correct answer is ' + answerArray[index]);
		} else if (userResponse.toLowerCase() === answerArray[index].toLowerCase()) {														//if user input matches the answer in answerArray[index]
			alert('Yes, that is correct!');
			correctAnswerCount++;
		} else if (userResponse.toLowerCase() !== answerArray[index].toLowerCase()){														//if user input is incorrect
			alert('No, that was incorrect! The correct answer is ' + answerArray[index]);
		}

	});

	//display the total correct answers at the end
	alert('You got ' + correctAnswerCount + ' questions correct');

}																																																						//End of askQuestion()

//Displays a message based on the correctAnswerCount
function gameComplete() {

	/*
		=> 5 / 5 
		=> 4,3 / 5
		=> 2,1 / 5
		=> 0 / 5
	*/
	var targetP = document.getElementById('completed');

	switch(correctAnswerCount) {
		case 5:
			targetP.innerHTML = '😆 <br>5 / 5 <br> Good Job!';
			break;

		case 4:
		case 3:
			targetP.innerHTML = '😊 <br>' + correctAnswerCount + ' /5' + '<br> Not bad';
			break;

		case 2:
		case 1:
			targetP.innerHTML = '😖 <br>' + correctAnswerCount + ' /5' + '<br> Not bad';
			break;

		case 0:
			targetP.innerHTML = '😐 <br>' + correctAnswerCount + ' /5' + '<br> Boo!';
			break;

		default:
			break;
	}
}
