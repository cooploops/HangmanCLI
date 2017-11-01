const superb = require("superb");

function Word (){
    this.wordSpace = "";
    this.randomWord = superb();
    this.wordLength = this.randomWord.length;
}


module.exports = Word;