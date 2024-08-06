console.log(`1. ================================Find the greater number====================================`);

function greaterNumber(n1, n2) {
  var result = n1 >= n2 ? n1 : n2;
  console.log(`Given numbers are ${n1}, ${n2} and the greater number is: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`2. ============================Check even or odd number========================================`);

function isEvenOrOddNumber(num){
    var result = num%2==0 ? true: false;
     return result;
}
var result = isEvenOrOddNumber(29);
console.log(`Is given number 29 is even?: ${result}`);

var result = isEvenOrOddNumber(44);
console.log(`Is given number 44 is even?: ${result}`);

var result = isEvenOrOddNumber(0);
console.log(`Is given number 0 is even?: ${result}`);

var result = isEvenOrOddNumber(101);
console.log(`Is given number 101 is even?: ${result}`);

console.log(`3. =========================Check even or odd length===========================================`);

function wordLength(sentence){
console.log(`Given word is: ${sentence}`);

var len = sentence.length;
console.log(`Given word length is: ${len}`);
 
var result = len%2== 0 ? "EVEN": "ODD";
return result;
}

var result = wordLength("JavaScript");
console.log(`Given word length type is: ${result}`);

var result = wordLength("developer");
console.log(`Given word length type is : ${result}`);

var result = wordLength("Google");
console.log(`Given word length type is : ${result}`);





