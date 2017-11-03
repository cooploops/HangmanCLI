const superb = require("superb");
const letter = require("./letter.js");

function Word () {
    this.newWord = superb();
    this.lettersOfWord = [];
    for(i=0;i<this.newWord.length;i++){
        let letters = new letter(this.newWord[i], i);
        this.lettersOfWord.push(letters);
    }
    
    this.wordRender = function(){
        let blankspace = "";
        for(j=0;j<this.lettersOfWord.length;j++){
            blankspace += this.lettersOfWord[j].letterRender();
        }
        console.log(blankspace);
    }
}

module.exports = Word;