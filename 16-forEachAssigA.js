console.log(`=============================Transform the array by using forEach method========================================================`);

const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given array is: ${arrayNumbers}`);

console.log(`==============1. Log the array element with it's index using forEach() with arrow function`);

arrayNumbers.forEach((element, index)=>{
    console.log(`Element: ${element}, Index: ${index}`);
});

console.log(`==============2. Find the positive numbers using forEach() with arrow function==================================================`);

arrayNumbers.forEach((element)=>{

   if (element>=0) {
    console.log(`Positive numbers are: ${element}`);
    
   } 
});

console.log(`==============3. Find the negative numbers, add into new array and new array on console arrow function==============================`);

let newArray = [];
arrayNumbers.forEach((element)=>{
   if (element<0) {
    newArray.push(element);
   }
});
newArray.forEach((element)=>{
    console.log(`Negative numbers are: ${element}`);
});

console.log(`===========4. Find the even numbers and log on console using forEach() with arrow function==========================================`);

arrayNumbers.forEach((element)=>{
     if (element%2==0) {
        console.log(`Even numbers are: ${element}`);
        
         }
});


console.log(`=============================5. Find the sum of all elements =========================================================================`);

var sum = 0;
arrayNumbers.forEach((element)=>{
     sum = sum + element;
     
});
console.log(`Sum of all elements: ${sum}`);


console.log(`=============================6. Log only even indexed array value on console using forEach() with arrow function======================`);

arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {

        console.log(`Even indexed values are: ${element}`);
        
    }

});