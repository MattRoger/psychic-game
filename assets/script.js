
var correctAnswer
var userGuess
var possibleAnswer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var answer
var wins = 0;
var losses = 0;
var guess = 0
var guessLeft = 9;

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guesses-left-text");



var correctAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("random letter is " + correctAnswer)
    if (userGuess === correctAnswer) {
        console.log("You guessed correctly")
        wins++
        correctAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];
        guessLeft = 9
        console.log("wins: " + wins)
        console.log("Losses: " + losses)
        console.log("Guesses Left " + guessLeft)


    } else {
        console.log("You guessed wrong")
        losses++
        guessLeft--
        console.log("wins: " + wins)
        console.log("Losses: " + losses)
        console.log("Guesses Left " + guessLeft)
    }
    if (guessLeft === 0) {
        console.log("you loose")
        var playAgain = confirm("Play Again?")
        if (playAgain === true) {
            wins = 0;
            losses = 0;
            guessLeft = 9;
            console.log("wins: " + wins)
            console.log("Losses: " + losses)
            console.log("Guesses Left " + guessLeft)
        }
    }

    directionsText.textContent = " ";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses Left: " + guessLeft;


}//end .onkeyup=function(event)

