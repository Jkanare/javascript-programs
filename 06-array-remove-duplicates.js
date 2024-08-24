console.log(`===================WAP to remove duplicate element from array using for loop===================`);

const arrayNum = [11,3,4,11,4,7,3];
let newArray =[];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (arrayNum.indexOf(element)==index) {
        newArray.push(element);

    }

} console.log(`Given array is: [${arrayNum}] , New array after removing duplicate elements: [${newArray}]`);


// console.log(`====================2nd method=========================================`);
// const arrayNum = [11,3,4,11,4,7,3];
// const newArray = [...new Set(arrayNum)];
// console.log(newArray);




