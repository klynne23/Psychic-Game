// DECLARE VARIABLES
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guesses = [];


// DISPLAY VARIABLES IN BROSWER
wins = document.getElementById("win");
losses = document.getElementById("loss");
guessLeft = document.getElementById("gl");


// GENERATE A RANDOM NUMBER AND STORE INSIDE VAR compLetter
var compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
compLetter = document.getElementById("cl");

// GET USER GUESS FROM KEYBOARD 
document.onkeydown = function (event) {
    var userGuess = event.key;
    guesses.push(userGuess);

    if (userGuess == compLetter) {
        wins++;
        guessLeft = 10;
        guesses = [];
        compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    else {
        guessLeft--;
        guesses = document.getElementById("guess");
    }
    if (guessLeft == 0) {
        losses++;
        guessLeft = 10;
        compLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        document.getElementById("cl") = compLetter;
        guesses = [];
    }

    // DISPLAY NEW VARIABLES IN BROSWER
    compLetter = document.getElementById("cl");
    wins = document.getElementById("win");
    losses = document.getElementById("loss");
    guessLeft = document.getElementById("gl");


} // end of function 
