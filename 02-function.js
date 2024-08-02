console.log("======== function with no arguments and no return value =============");

function show(){
    console.log("Inside show function");
}
show(); // Function call or invoke

console.log("======== function with no arguments and return value =============");
function demo(){
    console.log("Inside demo function...");
    return "Good Morning";
}
var result = demo();
console.log(result);

function square(num){
    console.log("Given number for square is: ", num);
    var result = num * num;
    return result;
}
var returnValue = square(5);
console.log("Square is: ", returnValue);

var returnValue = square(15);
console.log("Square is: ", returnValue);