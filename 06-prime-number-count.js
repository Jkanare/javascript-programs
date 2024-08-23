console.log(`============================================WAP to count prime numbers==============================`);
const array = [3,9,7,6,19,29,53]
let count = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element%index !==0) {
        console.log(`Is ${element} prime number? : true`);
        count++;
        
    } else {
        console.log(`Is ${element} prime number?: false`);

        
    }
}  console.log(`Prime count number is: ${count}`);


console.log(`=====================WAP to count the spaces in the string==================================================`);
function spaceCount(str) {
    console.log(`Given string is: ${str} `);
    
    let countSpace = 0;
    for (let index = 0; index < str.length; index++) {
         var char = str.charAt(index);
        if (char== " ") {
            countSpace++;
            
        }
        
    } 
    return countSpace;
}
let result = spaceCount("Revision is the mother of success");
console.log(`Total count of the space: ${result}`);

let result1 = spaceCount("JavaScript is the language of internet world");
console.log(`Total count of the space: ${result1}`);



