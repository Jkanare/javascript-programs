console.log("================No arguments and no return type=============");

function stringBasics() {
  console.log(`1. My dream company is "Amazon"`);

  console.log("====================Hobbies====================");

  var hobbyOne = "Reading";
  var hobbyTwo = "Programming";
  var hobbyThree = "Dancing";
  console.log(`2.1. My hobbies are: ${hobbyOne}, ${hobbyTwo}, ${hobbyThree}`);
  console.log("============Sum of the hobbies characters are===========");

  var hobbyOneLength = hobbyOne.length;
  var hobbyTwoLength = hobbyTwo.length;
  var hobbyThreeLength = hobbyThree.length;
  var result = hobbyOneLength + hobbyTwoLength + hobbyThreeLength;
  console.log(`2.2. Total number of characters are: ${result}`);
}
stringBasics();
