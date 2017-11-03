const inquirer = require("inquirer");
const Word = require("./constructors/word.js");

let numGuesses, correctLetters, currentWord, wordSpace, randWord;

function startGame (){
    randWord = new Word();
    numGuesses = 6;
    correctLetters = randWord.lettersOfWord;
    currentWord = randWord.newWord;
    console.log(currentWord);
    randWord.wordRender();
    guessLetter();
}

function guessLetter() {
    if(numGuesses>0){
        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!(Be careful, some words include a apostrophe or a dash):",
                name: "guess",
                validate: function(value){
                    let regExp = /^[a-z\-']/i;
                    if(regExp.test(value) === true && value.length === 1){
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function(answer){
        let letterGuessed = answer.guess;
        for(i=0;i<correctLetters.length;i++){
            if(letterGuessed === correctLetters[i].letter){
                correctLetters[i].revealed = true;
            };
        }
        if(currentWord.indexOf(letterGuessed) === -1){
            console.log("incorrect");
            numGuesses--
        }
        randWord.wordRender();
        console.log("\nGuesses remaining " + numGuesses);
        guessLetter();
        })
    } else {
        console.log("You've run out of bodyparts");
        inquirer.prompt([
            {
                type:"confirm",
                message:"Seems like you've killed another stick figure, would you like to try and possibly save another?",
                name: "startOver",
                default: false,
            }
        ]).then(function(answer){
            if(answer.startOver === true){
                startGame();
            } else {
                process.exit();
            }
        })
    }
}

startGame();