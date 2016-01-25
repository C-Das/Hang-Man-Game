var prompt = require("prompt");
prompt.start();

var Word = require("./word.js");

var game = {
  wordBank: ["Work","Experienec","Excellent","Test"],
  guessesRemaining : 10,
  currentWrd : null;
  startGame : function(){
    
  }

  // keepPrompting: function() {
  //   prompt.get(["hungry"], function(err, result) {
  //     this.hungry = result.hungry;

  //     if(this.hungry === "yes") {
  //       console.log("Here are some pizza burgers");
  //       life.keepPrompting();
  //     } else {
  //       console.log("You're full");
  //     }
  //   });
  // }
}

life.keepPrompting();