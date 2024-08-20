console.log(`=====================================Create an object using function constructor===============================================================`);

function Bank(bankName, location, ifscCode, branchCode){
       this.bankName = bankName;
       this.location = location;
       this.ifscCode = ifscCode;
       this.branchCode = branchCode;

} 
console.log(`=========================================Bank details are========================================================================================`);

const yesBank = new Bank("Yes Bank", "Pune-411014", "YES0000014", 400234);
console.log(`Bank details=> Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);

const sbiBank = new Bank("SBI Bank", "Indore-452001", "SBI00002001", 240066 );
console.log(`Bank details=> Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);

const mahBank = new Bank("Maharashtra Bank", "Pune-411016", "MH00001016", 400235 );
console.log(`Bank details=> Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank", "Gujrat-320008", "AXIS00002008", 380286);
console.log(`Bank details=> Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);


// console.log(`============Add data member on prototype object========================================`);

Bank.prototype.openTime = "9 AM IST";
// console.log(`Open time is: ${Bank.prototype.openTime}`);


// console.log(`============Add one more data member on prototype object===============================`);

Bank.prototype.closeTime = "6 PM IST";
// console.log(`Close time is: ${Bank.prototype.closeTime}`);


console.log(`===========Log open time and close time of object sbiBank============================================`);

console.log(`SBI Bank Open Time: ${sbiBank.openTime}, Close Time: ${sbiBank.closeTime}`);

console.log(`===========Log bankName and closeTime of object axisBank=============================================`);

console.log(`Bank Name: ${axisBank.bankName}, Close Time: ${axisBank.closeTime}`);

console.log(`============Log bankName, branchCode and openTime of object yesBank==================================`);

console.log(`Bank Name is: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}`);
 
