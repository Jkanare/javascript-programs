console.log(`==========Assignment- Sorting Ascending/ Descending order and reverse===========================================`);

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];  //array in numbers
console.log(`Given array is: ${arrayRollNumbers}`);

console.log(`======================1. Reverse the array=========================================================================`);

let reverseArray = arrayRollNumbers.reverse();  // Using reverse() method
console.log(`Reverse array is: ${reverseArray}`);

console.log(`=======================2.Use the sort() method as it is without any custom sorting logic & notice the issue=====================`);

let arraySort = arrayRollNumbers.sort();
console.log(`New array is: ${arraySort}`);

console.log(`========================3. Sort the array in ascending order, by writing your custom logic====================================`);

let sortAscending = arrayRollNumbers.sort((n1, n2)=>{
   return n1>n2 ? 1 : -1;

});
console.log(`New array in ascending order: ${sortAscending}`);

console.log(`===================4. Find the Greatest number from the array====================================================`);


console.log(` Greater number is: ${sortAscending[sortAscending.length-1]}`);

console.log(`====================5. Find the Smallest number from the array====================================================`);

console.log(` Greater number is: ${sortAscending[0]}`);



console.log(`====================6. Find the unique array without duplicate element =============================================`);

const uniqueArray = [];

for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index];
    if(uniqueArray.indexOf(element) == -1 ){
        uniqueArray.push(element);
    }
}
console.log(uniqueArray);



