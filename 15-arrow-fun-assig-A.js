console.log(`============================Write a arrow function=================================================`);

console.log(`----------------------1. With no args and no return value-------------------------------------------`);

let demo = ()=>{
 console.log(`Good Morning, Today is Monday`);
 
}
demo();

console.log(`---------------------2. With 3 args and no return value and perform multiplication-------------------`);

let multiplication =(n1, n2, n3=1)=>{
  let result = n1*n2*n3;
  console.log(`Given args are:${n1}, ${n2}, ${n3}, multiplication is: ${result}`);
  
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`---------------------3. With 5 args and return value and perform addition----------------------------`);

let addition =(b1, b2, b3, b4, b5)=>{
    console.log(`Given args are: ${b1},${b2},${b3},${b4},${b5}`);
    let add = b1+b2+b3+b4+b5;
    return add;

}
let result = addition(100,100,200,349,756);
console.log(`3.a) Addition is: ${result}`);

let result1 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(`3.c) Addition is: ${result1}`);




