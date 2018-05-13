const wordToGuess = "axe";
const wordState= []
let guessesLeft = 10
const prevGuesses = []

function displayWordState(state){
	let output = "";

	for(let i=0;i<state.length;i++){
		if (state[i]!=undefined){
			output = output+ state[i];
		}
		else{
			output = output + "_";
		}
		output = output +" ";
	}

	const wordStateContainer = document.getElementById("word");
	wordStateContainer.innerHTML = output; 
}

function displayGuessesLeft(num){
		document.getElementById('guesses-left').innerHTML = num;
}

function displayPreviousGuesses(guessesArray){
	const list = document.getElementById('past-guesses');
	// clear list before looping through the past guesses array to display again
	list.innerHTML = "";

	// looping through the array to display whether there is any new guesses that have been added
	for(let i =0; i<guessesArray.length; i++){

		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess)
	}
}

// loop thru the wordToGuess and see if currentGuess matches any word, 
// if it does then loop thru wordstate to replace the word at position 
// matched with currentGuess' word
function guess(wordToGuess, wordState, currentGuess){
 for(let i = 0; i<wordToGuess.length; i++){
 	if (wordToGuess[i] == currentGuess){
 		wordState[i] = currentGuess
 	}
 }
 displayWordState(wordState)
}

function checkWin(wordState){
	let hasBlanks = false;
	for (let i =0; i<wordState.length; i++){
		if (wordState[i]=='_'){
			hasBlanks = true
		}
	}
	return !hasBlanks
}

function setup(){
	for(let i =0;i<wordToGuess.length;i++){
		wordState.push('_')
	}
	displayGuessesLeft(guessesLeft)
	displayWordState(wordState)
	displayPreviousGuesses(prevGuesses)
}

function validateInput(guess, prevGuesses){
	if (guess.length == 1 && prevGuesses.indexOf(guess) ==-1){
		return true
	}else{
		return false
	}
	
}

// displayWordState(wordState)
// displayGuessesLeft(guessesLeft)
// displayPreviousGuesses(prevGuesses)
function setupForm(){
	const form = document.getElementById('player-input')
	const input = document.getElementById('player-guess')

	form.onsubmit = function(event){
		event.preventDefault();
		const currentInput = input.value
		input.value =""

	  if(!validateInput(currentInput,prevGuesses)){
	  	window.alert ('F U!')
	  	return;
	  }
		// add guesses to previous guesses
		prevGuesses.push(currentInput)

		// update guesses left
		guessesLeft = guessesLeft-1
		displayGuessesLeft(guessesLeft)


		guess(wordToGuess, wordState, currentInput)

	  // check if user has won
	  const won = checkWin(wordState)
	  if(won){
	  	window.alert ('You Won!')
	  }

	  // check if user has lost
	  if(guessesLeft ==0 && !won){
	  	window.alert ('You Lost!')
	  }


		displayPreviousGuesses(prevGuesses)
	}
 }

// initial setup
setup()
setupForm()
checkWin(wordState)