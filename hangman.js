const inquirer = require("inquirer");
const Word = require("./constructors/word.js");

function startGame (){
    let randWord = new Word();
    correctLetters = randWord.lettersOfWord;
    for(i=0;i<correctLetters.length;i++){
        console.log(correctLetters[i].letter);
    }
}

let correctLetters;
startGame();

let numGuesses = 100;
function guessLetter() {
    if(numGuesses>0){
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "guess",
                validate: function(value){
                    let regExp = /^[a-z]/i;
                    if(regExp.test(value) === true && value.length === 1){
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(answer){
        let wordSpace = "";
        let letterGuessed = answer.guess;
        console.log("you guessed: " + letterGuessed);
        for(i=0;i<correctLetters.length;i++){
            if(letterGuessed.indexOf(correctLetters[i].letter) != -1){
                console.log("correct");
                wordSpace += correctLetters[i].letter;
            } else {
                wordSpace += " _ ";
            }
        }
        console.log(numGuesses);
        console.log(wordSpace);
        guessLetter();
        })
    } else {
        console.log("You've run out of guesses");
    }
}

guessLetter();