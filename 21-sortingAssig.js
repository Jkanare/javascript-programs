console.log(`==========Assignment A- Sorting Ascending/ Descending order and reverse===========================================`);

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];  //array in numbers
console.log(`Given array is: ${arrayRollNumbers}`);

console.log(`======================1. Reverse the array=========================================================================`);

let reverseArray = arrayRollNumbers.reverse();  // Using reverse() method
console.log(`Reverse array is: ${reverseArray}`);

console.log(`=======================2.Use the sort() method as it is without any custom sorting logic & notice the issue=====================`);

let arraySort = arrayRollNumbers.sort();
console.log(`New array is: ${arraySort}`);

console.log(`========================3. Sort the array in ascending order, by writing your custom logic====================================`);

let sortAscending = arrayRollNumbers.sort((n1, n2)=>{
   return n1>n2 ? 1 : -1;

});
console.log(`New array in ascending order: ${sortAscending}`);

console.log(`===================4. Find the Greatest number from the array====================================================`);


console.log(` Greater number is: ${sortAscending[sortAscending.length-1]}`);

console.log(`====================5. Find the Smallest number from the array====================================================`);

console.log(` Greater number is: ${sortAscending[0]}`);



console.log(`====================6. Find the unique array without duplicate element =============================================`);

const uniqueArray = [];

for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index];
    if(uniqueArray.indexOf(element) == -1 ){
        uniqueArray.push(element);
    }
}
console.log(uniqueArray);


console.log(`==========Assignment B- Sorting Ascending/ Descending order===========================================`);

class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){

        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }

}

const emp_anil  = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali= new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika= new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny  = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi  = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 

let arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`==============1. Sort the 'arrayEmployees' in descending order of Employee Id's and log details-id,name,Department======================= `);


let arrayDescending = arrayEmployee.sort((n1, n2)=>{
  return n1.emp_id>n2.emp_id? -1: 1;

});
arrayDescending.forEach((employee)=>{
   console.log(`Employee Id: ${employee.emp_id}, Employee Name: ${employee.emp_name}, Employee Department: ${employee.emp_dept}`);
   
});

console.log(`===============2. Sort the 'arrayEmployees' in ascending order of employee department & log id,dept,company====================`);

let arrayAscending = arrayEmployee.sort((n1, n2)=>{
    return n1.emp_dept>n2.emp_dept? 1: -1;
  
  });
  arrayAscending.forEach((employee)=>{
     console.log(`Employee Id: ${employee.emp_id}, Employee Department: ${employee.emp_dept}, Employee company: ${employee.emp_company}`);
     
  });


  console.log(`===============3. Sort the 'arrayEmployees' in descending order of employee salary & log name,salary,company====================`);

  let arrayDescend = arrayEmployee.sort((n1, n2)=>{
    return n1.emp_salary>n2.emp_salary? -1: 1;
  
  });
  arrayDescend.forEach((employee)=>{
     console.log(`Employee Name: ${employee.emp_name}, Employee Salary: ${employee.emp_salary}, Employee Company: ${employee.emp_company}`);
     
  });