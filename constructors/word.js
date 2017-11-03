const superb = require("superb");
const letter = require("./letter.js");

function Word () {
    this.newWord = superb();
    this.lettersOfWord = [];
    for(i=0;i<this.newWord.length;i++){
        let letters = new letter(this.newWord[i]);
        this.lettersOfWord.push(letters);
    }
}

module.exports = Word;