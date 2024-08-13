const array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is: ${array}`);
let len =array.length;
console.log(`1. Total elements available in array is: ${len}`);

console.log(`=============================================================================================================`);

// const array1 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array1}`);
console.log(`2. First element is: ${array[0]}, Last element is: ${array[len-1]}`);

console.log(`===============================================================================================================`);

// const array2 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array2}`);
console.log(`3. Third last element is: ${array[array.length-3]}`);
console.log(`================================================================================================================`);

// const array3 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array3}`);
for (const element of array) {
    if (element%2==0) {
        console.log(`4. All even numbers are: ${element}`);
        
    }
}

console.log(`==================================================================================================================`);

// const array4 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array4}`);
for (const element of array) {
    if (element%2==1) {
        console.log(`5. All odd numbers are: ${element}`);
        
    }
}
console.log(`====================================================================================================================`);

// const array5 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array5}`);

for (const element of array) {
    if (element%5==0) {
        console.log(`9. Multiple of 5 are: ${element}`);
         
    }
}

console.log(`===================================================================================================================`);

// const array6 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array6}`);
let result = array.includes(115);
console.log(`10. Is number 115 available in the array: ${result} `);

console.log(`====================================================================================================================`);

// const array7 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array7}`);
let result1 = array.includes(23);
console.log(`11. Is number 23 available in the array: ${result1} `);

console.log(`====================================================================================================================`);
// const array8 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array8}`);
array.splice(3, 0, 55,66);
console.log(`12. After inserting number 55,66 the updated array is: ${array}`);

console.log(`=====================================================================================================================`);

// const array9 = [20,31,40,25,23,11,29,9,60,2,11];
// console.log(`Given array is: ${array9}`);
array.splice(4,3);
console.log(`13. After deleting 3 elements from index 4 updated array is: ${array}`);
