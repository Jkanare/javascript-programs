console.log(`=================1. Print the number of an element present in array========================================`);

let array = [1,2,3,4,5,6];
console.log(`Given array is: ${array}`);

array.forEach((element)=> console.log(`Number of an element: ${array.length}`));


console.log(`=================2. Print the sum of all the items of the array========================================`);

let sum = array.reduce((runningTotal, item)=>{
       return runningTotal+item;

},0);
console.log(`Summation of items is: ${sum}`);

console.log(`=================4. WAP to sort the elements of an array in ascending order========================================`);

let array1 = [4,8,5,3,2,7,1,9,3];
console.log(`Given array is: ${array1}`);

let newArray = array1.sort();
console.log(`New array in ascending order: ${newArray}`);

console.log(`=================5. WAP to sort the elements of an array in descending order========================================`);

console.log(`Given array is: ${array1}`);

let newArray1 = array1.sort((a,b)=>{
    return a>b? -1: 1;

});
console.log(`New array in descending order: ${newArray1}`);

console.log(`=================6. WAP to find the 3rd largest number in an array========================================`);

let array2 = [5,4,6,8,3,9,1,4];
console.log(`Given array is: ${array2}`);

let newArray2 = array2.sort();
let threeLargest = newArray2[newArray2.length-3];
console.log(`3rd largest number in an array is: ${threeLargest}`);

console.log(`=================7. WAP to find the 2nd largest number in an array========================================`);

let array3 = [5,7,1,8,4,9,3,2]
console.log(`Given array is: ${array3}`);

let newArray3 = array3.sort();
let secondLargest = newArray3[newArray3.length-2];
console.log(`2nd largest number in an array is: ${secondLargest}`);

console.log(`=================8. WAP to find the largest number in an array========================================`);

let array4 = [5,8,3,6,9,2,7,4];
console.log(`Given array is: ${array4}`);

let newArray4 = array3.sort();
let largest = newArray3[newArray4.length-1];
console.log(`Largest number in an array is: ${largest}`);

console.log(`=================9. WAP to find the 2nd smallest number in an array========================================`);

let array5 = [5,9,7,3,8,4,1,5,2];
console.log(`Given array is: ${array5}`);

let newArray5 = array5.sort();
let secondSmallest = newArray5[1];
console.log(`2nd smallest number in an array is: ${secondSmallest}`);


console.log(`=================10. WAP to find the smallest number in an array========================================`);

let array6 = [4,7,3,6,9,2,8,5,1];
console.log(`Given array is: ${array6}`);

let newArray6 = array6.sort();
let smallestNum = newArray6[0];
console.log(`Smallest number in an array is: ${smallestNum}`);

console.log(`=================11. WAP to remove the duplicate element from an array=======================================`);
 
let array7 = [4,6,7,3,4,9,5,3,8,2,6];
console.log(`Given array is: ${array7}`);

let newArray7 = [...new Set(array7)];
console.log(`New array after removing duplicate element is: ${newArray7}`);

// console.log(`====2nd method======`); 
// let newArray7 = [];
// for (let index = 0; index < array7.length; index++) {
//     const element = array7[index];
//     if (array7.indexOf(element)==index) {
//         newArray7.push(element);
//     }
    
// }
//  console.log(`New array after removing duplicate element is: ${newArray7}`);

    
console.log(`=================12. WAP to print odd and even numbers from an array=======================================`);

let array8 = [4,6,2,5,8,1,9,3,7];
console.log(`Given array is: ${array8}`);
array8.sort();

for (const element of array8) {
    if (element%2==0) {
        console.log("Even numbers is:", element);
        
    } 
    if (element%2==1){
        console.log(`Odd numbers is: ${element}`);

    }
}

console.log(`=================13. WAP to copy all elements from one array into another array=======================================`);
 
let array9 = [1,2,3,4,5,6];
console.log(`Given array is: ${array9}`);

let newArray8 = [...(array9)];
console.log(newArray8);

// console.log("==========2nd method==================");
// let newArray8 = [];
// for (let index = 0; index < array9.length; index++) {
//     const element = array9[index];
//     if (array9.indexOf(element)==index) {
//         newArray8.push(element);
//     }
// }
// console.log(newArray8);
//  console.log("==========3rd method==================");
// let newArray8 = array9.slice();
// console.log(newArray8);

console.log(`=================14. WAP to find the frequency of each element in the array=======================================`);

let array10 = [1,2,2,3,3,3,4,4,4,4];
console.log(`Given array is: ${array10}`);

let final = array10.reduce((prev,curr)=>{
           if (curr in prev) {
                prev[curr]++;
            
           } else {
               prev[curr] = 1;
           }
           return prev;

},{});
console.log("Frequency of each element is:",final);

console.log(`=================16. WAP to print the duplicate element of an array=======================================`);

let array14 = [2,4,8,5,6,3,2,4,6,6];
console.log(`Given numbers are: ${array14}`);
let duplicateNum = [];

for (let i = 0; i < array14.length; i++) {
    for (let j = i+1; j < array14.length; j++) {
        if (array14[i]==array14[j] && !duplicateNum.includes(array14[i])) {
            duplicateNum.push(array14[i])
           
         }
        
    }
    
}
console.log(`Duplicate elements are: ${duplicateNum}`);


console.log(`=================17. WAP to print the elements of an array=====================================`);

let array13 = [1,2,3,4,5];
console.log(`Given array is: ${array13}`);
array13.forEach((element)=> console.log(`Elements of an array is: ${element}`));


console.log(`=================18. WAP to print the elements of an array in reverse order=====================================`);

let array11 = [1,2,3,4,5];
console.log(`Given array is: ${array11}`);
let newArray9 = array11.reverse();
console.log(`Array in reverse order: ${newArray9}`);

// console.log(`========2nd method===========`);
// let newArray9 = [];
// for (let index = array11.length-1; index>=0; index--) {
//     const element = array11[index];
//     newArray9.push(element);
    
// }
// console.log(`Array in reverse order: ${newArray9}`);


console.log(`=================19. WAP to print the element of an array present on even position =====================================`);
let array12 = [1,6,3,9,4,2,6,3,9];
console.log(`Given array is: ${array12}`);
array12.forEach((element,index)=>{
         if (index%2==0) {
            console.log(element);
            

        }
});

console.log(`=================20. WAP to print the element of an array present on odd position =====================================`);

console.log(`Given array is: ${array12}`);
array12.forEach((element,index)=>{
         if (index%2==1) {
            console.log(element);
        }
});











