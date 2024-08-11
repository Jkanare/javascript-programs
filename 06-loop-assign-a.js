console.log(`==============1.) Count the total number of vowels using for loop=============`);

var string = "I am very good IT Developer";
console.log(`Given string is: ${string}`);
var vowels = `aeiou`;
console.log(`Vowels are : ${vowels}`);
var vowelsCount = 0;
for (let index = 0; index < string.length; index++) {
  var char = string.charAt(index);
  var lowerCaseString = char.toLowerCase();

  if (vowels.includes(lowerCaseString)) {
    vowelsCount++;
  }
}
console.log(`Total number of vowels in the string are: ${vowelsCount}`);



console.log(`==============2.) WTF to get the sum of cube of numbers from 1 to 5=============`);

function demo() {
  var sum = 0;
  for (var index = 1; index <= 5; index++) {
    //    console.log(index);
    var cube = index * index * index;
    sum = sum + cube;
  }
  console.log(`Sum of cube of numbers from 1 to 5 is: ${sum}`);
}
demo();



console.log(`======================3.) Print the odd position character for given string==============================================================================`);

function oddPositionedChars(string) {
  console.log(`Given strings is : ${string}`);
  for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (index % 2 == 1 && char != " ") {
      console.log(char);
    }
  }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon U will be UI IT Champ");
