// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

//+++++++++++++++++++++++++++++++++++++++++++++++++++
//requiring Letter function from the other doc
var Letter = require("./letter");
//var to hold one of the possible words the user could guess
var randomWord = "guava";
//var to hold array of letter objects
var letterArr = [];

//Word constructor that creates an object representing the current word the user is trying to guess
function Word() {
  //maybe some kind of if statement that "decides" which letter array is selected
  if (randomWord === "apple") {
    var letter1 = new Letter("a");
    var letter2 = new Letter("p");
    var letter3 = new Letter("p");
    var letter4 = new Letter("l");
    var letter5 = new Letter("e");
  } else if (randomWord === "guava") {
    var letter1 = new Letter("g");
    var letter2 = new Letter("u");
    var letter3 = new Letter("a");
    var letter4 = new Letter("v");
    var letter5 = new Letter("a");
  } else if (randomWord === "grape") {
    var letter1 = new Letter("g");
    var letter2 = new Letter("r");
    var letter3 = new Letter("a");
    var letter4 = new Letter("p");
    var letter5 = new Letter("e");
  } else if (randomWord === "peach") {
    var letter1 = new Letter("p");
    var letter2 = new Letter("e");
    var letter3 = new Letter("a");
    var letter4 = new Letter("c");
    var letter5 = new Letter("h");
  }

  //push Letter objects into the letterArr (array of obj)
  letterArr.push(letter1, letter2, letter3, letter4, letter5);
  console.log(letterArr);

  // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
  Letter.prototype.toString = function stringTheWord() {
    return "" + this.underChar;
  };
  console.log(
    letter1.toString(),
    letter2.toString(),
    letter3.toString(),
    letter4.toString(),
    letter5.toString()
  );
}
Word();
