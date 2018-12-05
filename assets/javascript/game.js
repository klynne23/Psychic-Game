// DECLARE VARIABLES
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guesses = [];


// DISPLAY VARIABLES IN BROSWER
document.getElementById("win").innerHTML = wins;
document.getElementById("loss").innerHTML = losses;
document.getElementById("gl").innerHTML = guessLeft;


// GENERATE A RANDOM NUMBER AND STORE INSIDE VAR compLetter
var compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
console.log(compLetter);
document.getElementById("cl").innerHTML = compLetter;

// GET USER GUESS FROM KEYBOARD 
document.onkeydown = function (event) {
    var userGuess = event.key;


    if (userGuess == compLetter) {
        wins++;
        guessLeft = 10;
        guesses = [];
        compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    else {
        guessLeft--;
        guesses.push(userGuess);
        document.getElementById("guess").innerHTML = guesses;
    }
    if (guessLeft == 0) {
        losses++;
        guessLeft = 10;
        guesses = [];
        compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        document.getElementById("cl").innerHTML = compLetter;
        
    }

    // DISPLAY NEW VARIABLES IN BROSWER
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("gl").innerHTML = guessLeft;
    document.getElementById("cl").innerHTML = compLetter;

} // end of function 

