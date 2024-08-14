const array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is: ${array}`);
let len =array.length;
console.log(`1. Total elements available in array is: ${len}`);

console.log(`=============================================================================================================`);

console.log(`2. First element is: ${array[0]}, Last element is: ${array[len-1]}`);

console.log(`===============================================================================================================`);

console.log(`3. Third last element is: ${array[array.length-3]}`);

console.log(`================================================================================================================`);

let evenNumbers = [];
for (const element of array) {
  if (element % 2 == 0) {
    evenNumbers.push(element);
  }
}console.log(`4. All even numbers are: ${evenNumbers}`);

console.log(`=================================================================================================================`);

let oddNumbers = [];
for (const element of array) {
  if (element % 2 == 1) {
    oddNumbers.push(element);
  }
}console.log(`5. All odd numbers are: ${oddNumbers}`);

console.log(`====================================================================================================================`);


let addition=0;
for (let index = 0; index < array.length; index++) {
  let element=array[index];
   if (index%2==0) {
    addition= addition+ element
    }
}console.log(`6.Sum of all even positioned elements is: ${addition}`);

console.log(`====================================================================================================================`);

let addition1=0;
for (let index = 0; index < array.length; index++) {
  let element=array[index];
   if (index%2==1) {
    addition1= addition1+ element
    }
}console.log(`7. Sum of all odd positioned elements is: ${addition1}`);

console.log(`====================================================================================================================`);

let sum=0;
for (const element of array) {
  sum= sum+element;
}console.log(`8. Sum of all element is: ${sum}`);

console.log(`====================================================================================================================`);

let multiple= [];
for (const element of array) {
    if (element%5==0) {
        multiple.push(element);
    }       
}console.log(`9. Multiple of 5 is: ${multiple}`);


console.log(`===================================================================================================================`);

let result = array.includes(115);
console.log(`10. Is number 115 available in the array: ${result} `);

console.log(`===================================================================================================================`);

let result1 = array.includes(23);
console.log(`11. Is number 23 available in the array: ${result1} `);

console.log(`====================================================================================================================`);

array.splice(3, 0, 55,66);
console.log(`12. After inserting number 55,66 the updated array is: ${array}`);

console.log(`=====================================================================================================================`);

array.splice(4,3);
console.log(`13. After deleting 3 elements from index 4 updated array is: ${array}`);
