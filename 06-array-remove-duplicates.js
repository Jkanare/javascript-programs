console.log(`===================WAP to remove duplicate element from array using for loop===================`);

const arrayNum = [11,3,4,11,4,7,3];
let newArray =[];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (arrayNum.indexOf(element)==index) {
        newArray.push(element);

    }

} console.log(`Given array is: [${arrayNum}] , New array after removing duplicate elements: [${newArray}]`);


// console.log(`====================2nd method=========================================`);
// const arrayNum = [11,3,4,11,4,7,3];
// const newArray = [...new Set(arrayNum)];
// console.log(newArray);



console.log(`===================WAP to log First and Last character should be Capital in the String===================`);

const str = "How are you mate";
console.log(`Given string is: ${str}`);
let splitStr = str.toLowerCase().split(' ');
let array = [];
for (let i = 0; i < splitStr.length; i++) {
    const char = splitStr[i];
    let firstChar = char.charAt(0).toUpperCase();
    let lastChar  = char.charAt(char.length-1).toUpperCase();
    let middleChar= char.slice(1,-1);
    let result    =  firstChar+middleChar+lastChar;
    array.push(result);
    
    
} 
console.log(`New string with first and Last character capitalize: ${array.join(' ')}`);



   
   
   
   
   
 
    
    
    
    
   






