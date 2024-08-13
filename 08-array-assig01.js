console.log(`==============================Find 1st and last element in the arrayList=====================================`);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits}`);
console.log(`1. First element is: ${fruits[0]} , last element is: ${fruits[fruits.length-1]}`);

console.log(`=====================Insert "Papaya" before the Banana in the arrayList=======================================`);

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits1}`);
fruits1.unshift("Papaya")
console.log(`2. Updated list is: ${fruits1}`);

console.log(`=====================Remove "Mango from the arrayList========================================================`);
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits2}`);
fruits2.splice(3, 1);  
console.log(`3. Updated list is: ${fruits2}`);

console.log(`=======================Insert an element "Pineapple" at the last position in the arrayList====================`);
const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits3}`);
fruits3.push("Pineapple");
console.log(`4. Updated list is: ${fruits3}`);

console.log(`========================Insert an element "Dragon Fruit" before "Water Melon"=================================`);
const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits4}`);
fruits4.splice(4, 0, "Dragon Fruit");
console.log(`5. Updated list is: ${fruits4}`);

console.log(`======================Replace an element "Orange" with "Kiwi"=================================================`);
const fruits5 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits5}`);
fruits5.splice(1,1 ,"Kiwi");
console.log(`6. Updated list is: ${fruits5}`);


console.log(`====================Log the elements from index 1 to 4=======================================================`);
const fruits6 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits6}`);
const sliceElements=fruits6.slice(1, 4);
console.log(`7. Updated list is: ${sliceElements}`);


console.log(`=================Only select last 3 element- using length property=============================================`);
const fruits7 = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given arrayList is: ${fruits7}`);
let element=  fruits7[fruits7.length-3];
let element2= fruits7[fruits7.length-2];
let element3= fruits7[fruits7.length-1];
console.log(`8. Last 3 elements are: ${element}, ${element2}, ${element3}`);
