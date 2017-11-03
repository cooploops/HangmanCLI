function Letter (currentLetter,index){
    this.letter = currentLetter;
    this.index = index;
    this.revealed = false;

    this.letterRender = function(){
        if(this.revealed === true){
            return this.letter;
        } else {
            return " _ ";
        }
    }

    }


    module.exports = Letter;