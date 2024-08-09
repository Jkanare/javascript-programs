console.log(`===============================WTF using Function Expression with if-else to check voting eligibility=====================`);


var voteEligibility = function(age) {
    if (age==0 || age<0 || age>130 || age==null) {
        console.log(`Your age is ${age} and it's invalid data`);
        
        
    } else {
        console.log(`Your age is ${age} and it's valid data`);
        if (age>=18) {
            console.log(`Congratulations! you are eligible for vote`);
            
        } else {
            console.log(`Unfortunately! you are not eligible for vote`);

        }
    }
    
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);