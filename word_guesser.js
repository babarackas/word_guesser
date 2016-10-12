/*Code for word guesser attributed to teaching material.org http://www.teaching-materials.org/javascript/exercises/wordguesser.html 
The winnings calculations and total wrong were done by me.*/

var wordLetters     = ['F', 'O', 'X'];
var guessedLetters  = ['_', '_', '_'];
var correctAnswer = 100
var wrongAnswer = 25
var total = 0
var wrongGuess = 1
var totalWrongGuess = 0

function guessLetter(letter) {
    var goodGuess = false;
    var moreToGuess = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] == letter) {
            guessedLetters[i] = letter;
            goodGuess = true;
            total += correctAnswer;
        }
        if (guessedLetters[i] == '_') {
            moreToGuess = true;
        }
    }
    if (goodGuess) {
        console.log('Yay, you found a letter!');
        console.log(guessedLetters.join(''));
        console.log('Money Won $' + total);
        if (!moreToGuess) {
            console.log('YOU WON!');
        } 
    
    } else {
    	totalWrongGuess += wrongGuess;
    	total = total - wrongAnswer;
    	console.log('Oh no, that is not correct! ' + totalWrongGuess + ' wrong');
        console.log('Money Won $' + total);
    }
}

guessLetter('X');
guessLetter('O');
guessLetter('R');
guessLetter('T');
