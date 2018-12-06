// DECLARE VARIABLES
var alphabet = ['abcdefghijklmnopqrstuvwxyz']; //alphabet array
var alpha; // will hold the split alpha array
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

//SPLIT UP ALPHABET ARRAY
alpha = alphabet[0].split('')

// GET USER GUESS FROM KEYBOARD 
document.onkeydown = function (event) {
    var userGuess = event.key;

    //EVALUTE IF KEY PRESSED WAS A LETTER
    if (!(alpha.includes(userGuess))) {
        return alert("press a valid key");
    };

    //check if userguess exists inside userGuesses
    if (guesses.includes(userGuess)) {
        return alert("select a new letter");
    };

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
        // location.reload();
        
    }

    // DISPLAY NEW VARIABLES IN BROSWER
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("gl").innerHTML = guessLeft;
    document.getElementById("cl").innerHTML = compLetter;

} // end of function 

