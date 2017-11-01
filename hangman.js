const inquirer = require("inquirer");
const letter = require("./letter.js");

// this will be inside a function asking if the user has guessed the right word 
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
        
        })
    }
}
