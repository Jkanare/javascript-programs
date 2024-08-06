console.log(`===================1st scenario- argument with return value====================`);

function squareOfWordLength(string) {
  console.log(`Given sentence is: ${string}`);

  var result = string.split(" ");
  var stringLength = result.length;
  console.log(`Length of the word is: ${stringLength}`);
  return stringLength * stringLength;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of the word is: ${result}`);

console.log(`=======================================================================================`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of the word is: ${result}`);

console.log(`======================================================================================`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of the word is: ${result}`);

console.log(`==========================2nd scenario- no argument and no return value===============`);

function demo() {
   var string = "I am Angular Developer";
   console.log(`Given string is: ${string}`);

   var len = string.length;
   console.log(`Given string length is : ${len}`);

   var result = string.split(" ");
   console.log(`Total words in string are: ${result.length}`);

   var divide = len / result.length;
   console.log(`2.1) String length divided by total words in string are: ${divide}`);

   var multiply = len * result.length;
   console.log(`2.2) String length multiply by total words in string are: ${multiply}`);
}
demo();
