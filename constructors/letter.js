const word = require("./word.js");

function letter (guess){
    var randWord = new word();
    let regExp = /\W+/;
    if(regExp.test(randWord.randomWord)){
        console.log("special character detected");
        console.log(randWord.randomWord);
        let charIndex=randWord.randomWord.search(regExp);
        let specialChar=randWord.randomWord[charIndex];
        for(i=0;i<randWord.randomWord.length;i++){
            if(specialChar.indexOf(randWord.randomWord[i])!=-1){
                randWord.wordSpace += randWord.randomWord[i];
            } else {
                randWord.wordSpace += " _ ";
            }
        }
        console.log(randWord.wordSpace);
    } else{
        console.log('no special character');
        console.log(randWord.randomWord);
    }
}

letter();