
console.log(`---------------Sbi Bank(Object)---------------------------------------------------------`);

let sbiBank ={              //Declare an object                                    
    bankName: "Sbi Bank",    // Keys: value
    location: "Pune-411014",
    accountNo: 41100004110,
    ifsc: "SBIN0000411",
    interestRate: 8.9,
    showDetails : function () {     //function expression
        console.log(`Data members of the Sbi Bank are: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}`);
        
    } 
}
 sbiBank.showDetails();

 console.log(`---------------Axis Bank(Object)---------------------------------------------------------`);


let axisBank ={
    bankName: "Axis Bank",
    location: "Pune-411015",
    accountNo: 51100005110,
    ifsc: "AXIS0000511",
    interestRate: 9.1,
    showDetails : function () {
        console.log(`Data members of the Axis Bank are: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}`);

    } 
}
  axisBank.showDetails();

  console.log(`---------------HDFc Bank(Object)---------------------------------------------------------`);


let hdfcBank ={
    bankName: "HDFC Bank",
    location: "Pune-411016",
    accountNo: 61100006110,
    ifsc: "HDFC0000611",
    interestRate: 7.5,
    showDetails : function () {
        console.log(`Data members of the HDFC Bank are: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}`);

    } 
}
  hdfcBank.showDetails();

  console.log(`----------------Yes Bank(Object)---------------------------------------------------------`);
  
let yesBank ={
    bankName: "Yes Bank",
    location: "Pune-411017",
    accountNo: 71100007110,
    ifsc: "YES0000711",
    interestRate: 10.1,
    showDetails : function () {
        console.log(`Data members of the Yes Bank are: ${this.bankName}, ${this.location}, ${this.accountNo}, ${this.ifsc}`);

    } 
}  
yesBank.showDetails();

