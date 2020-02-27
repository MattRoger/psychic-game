# Psychic Game :crystal_ball:
A game where the user has to try and guess a letter randomly chosen by the computer. The player only gets nine chances to guess right.

 [See it Live](https://mattroger.github.io/psychic-game/)
 
## Motivation
This was one of the first JavaScript pages I made.

## How to use?
 * Player Must guess a letter.
 * Simply  hit any letter on the keyboard
 * Each time the player has 9 guesses.
 
 ## Tech/framework used
* JavaScript
* HTML
* CSS

## Build Status
Complete :checkered_flag:

## Code style
Vanilla JavaScript :icecream:
 
The Game In Action
![gameplay](https://github.com/MattRoger/screenshots/blob/master/psychic/gameplay.gif?raw=true)

How the game works
```javascript
var correctAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("random letter is " + correctAnswer)
    if (userGuess === correctAnswer) {
        console.log("You guessed correctly")
        wins++
        correctAnswer = possibleAnswer[Math.floor(Math.random() * possibleAnswer.length)];
        guessLeft = 9
        console.log("\n"+"wins: " + wins)
        console.log("Losses: " + losses)
        console.log("Guesses Left " + guessLeft)
    } else {
        console.log("You guessed wrong")
        losses++
        guessLeft--
        console.log("\n"+"wins: " + wins)
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
            console.log("+\n"+"wins: " + wins)
            console.log("Losses: " + losses)
            console.log("Guesses Left " + guessLeft)
        }
    }
    directionsText.textContent = " ";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessLeftText.textContent = "Guesses Left: " + guessLeft;
}
```

## Installation
* :trident: Fork it
* :sheep: Clone it


## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/

## License
