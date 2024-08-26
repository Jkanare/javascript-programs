class Employee {
constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
   }

}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi= new Employee(22, "Rishi", "Finance", 47000, "TCS");
const emp_sonali= new Employee(22, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(22, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(22, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(22, "Mahesh", "HR", 85000, "Infy");

console.log(`===========Add all the created emp objects inside an array========================`);

const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]



console.log(`===========1) Find all the employees working in 'TCS' and log only employee names and company name ========================`);

for (const element of arrayEmployee) {
    // console.log("Given array is:", element);
    if (element.emp_company=="TCS") {
       console.log(`Employee Name: ${element.emp_name}, Employee Company: ${element.emp_company}`);
    }
}

console.log(`===========2) Find the 'Finance' department employees and log only department name and employee name ========================`);

for (const element of arrayEmployee) {
    if (element.emp_dept=="Finance") {
        console.log(`Employee Department: ${element.emp_dept}, Employee Name: ${element.emp_name}`);
    }
}

console.log(`===========3) Find the employees whose name starts with 'R' and log complete employee details ========================`);

for (const element of arrayEmployee) {
    if (element.emp_name.startsWith("R")) {
        console.log(`Employee details are: Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary}, Employee Company: ${element. emp_company}`);
        
    }
    
}

console.log(`===========4) Find the employees whose salary is greater than 75000, and log emp name, company and salary ========================`);

for (const element of arrayEmployee) {
    if (element.emp_salary>75000) {
        console.log(`Employee Name: ${element.emp_name}, Employee Company: ${element.emp_company}, Employee Salary: ${element.emp_salary}`);
    }
}

console.log(`===========5) Find the employees whose salary is greater than or equals to 50000 and from 'IT' department and log complete employee details ========================`);

for (const element of arrayEmployee) {
    if (element.emp_salary>=50000 && element.emp_dept=='IT') {
        console.log(`Employee details are: Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary}, Employee Company: ${element. emp_company}`);
    }
}

console.log(`===========6) Find all the employees from company 'Infy' and log complete employee details ========================`);

for (const element of arrayEmployee) {
    if (element.emp_company=="Infy") {
        console.log(`Employee details are: Employee Id: ${element.emp_id}, Employee Name: ${element.emp_name}, Employee Department: ${element.emp_dept}, Employee Salary: ${element.emp_salary}, Employee Company: ${element. emp_company}`);
    }
}