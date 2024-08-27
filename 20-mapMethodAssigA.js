const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array is: ${arrayNumbers}`);

console.log(`==========1. Add 10 into each element of array================================================================================`);

let add = arrayNumbers.map((element)=>{
      return element+10;

});
console.log(`Transform array is: ${add}`);

console.log(`==========2. Cube of each element of array================================================================================`);


let cube = arrayNumbers.map((element)=>{
        return element*element*element;

});
console.log(`Transform array: ${cube}`);

console.log(`==========3. Add indexed value into its corresponding each array element====================================================`);

let addition = arrayNumbers.map((element,index)=>{

             return index+element;

});
console.log(`Transform array: ${addition}`);


