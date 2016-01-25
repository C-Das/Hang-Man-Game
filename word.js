var letter = require("./letter.js");

function Word(wrd){
    this.word = wrd;
    this.lets = [];
    this.found = false;

    this.getLets = function(){
      for (var i=0; i <this.word.length; i++){
        var newLet = new letter(this.word[i]);
        this.lets.push(newLet); //Creates each letter object
      }
    }

    this.checkIfLetterFound = function(guessLetter){
      var whatToReturn = 0;
      debugger;
      for (var i=0; i <this.lets.length; i++){
        console.log(this.lets[i]);
        if(this.lets[i].Letter.charac === this.guessLetter) {
          this.lets[i].appear = true;
          ++whatToReturn;
          return whatToReturn;
        }else{
          console.log("test");
        }
      }
    }

    this.didWeFindTheWord = function(){
      var found = false;

      if (this.lets.every(checkAppearTrue){
        found = true;
        return found;
      }

      function checkAppearTrue(value, index, ar){
        if (value.Letter.appear === true) {
          return true;
        } else {
          return false;
        }
      }
    }

    this.wordRender = function(){
      var str = "";
      for (var i=0; i <this.lets.length; i++){
        str += this.lets[i].Letter.letterRender();
        return str;
      }
    }
}
// var test = new Word('test');
// var x = test.getLets('test');
// var y = test.checkIfLetterFound("t");

module.exports = Word;
