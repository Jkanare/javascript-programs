console.log(`--------------------------------------------Object Assignment-A-------------------------------------------------------------------------------------`);


let professor= {
    firstName: "Jyoti",
    lastName: "Kanare",
    city: "Indore",
    state: "MP",
    pin: 452001,
    certificates: ["Hacker Rank Participation",  "Certificate in IFE course", "Certificate in Adv Programming"],
    degrees: {
        engineering: 'CSC',
        PHD: 'Adv Computing',
        MS: 'Data Science',
        Bcom: 'Maths'
    }
}

 professor.totalExperience= "14 years";  //added new property totalExperience: "14 years"
 console.log(professor);

console.log(`============All Keys after adding new property in the Object=========================================================`);

let proKeys= Object.keys(professor);    
console.log(proKeys);

console.log(`============6. Modified existing property Pin=============================================================================`);

professor.pin= 451221;                  //update pin property: 451221
console.log(professor);


professor.certificates.splice(2,0, "Oracle Certified")       //Add one new certificate at the 2nd Index of array

console.log(`============8. Last element of the array===================================================================================`);

console.log(`Given array is: ${professor.certificates}`);

let len= professor.certificates[professor.certificates.length-1];   //last element of array
console.log(`Last element of the array is: ${len}`);

console.log(`===========9. Traverse the array using for loop==============================================================================`);

for (const element of professor.certificates) {
    console.log(element);
    
}

console.log(`===========10. Complete object using for in loop==============================================================================`);

for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`);
        
    }
}

