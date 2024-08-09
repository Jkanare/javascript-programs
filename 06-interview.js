console.log(`=========================Using Function Expression with if-else========================================`);

var interviewCheck = function(gradScore, hscScore, sscScore, candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congratulation ${candidateName} you are eligible for TCS interview`);
        
        
    } else {
        console.log(`Unfortunately you are not eligible for interview`);
        
    }


}
interviewCheck(80,86, 90, "Jyoti");
console.log(`==============================================================================`);

interviewCheck(70,65, 55, "David");
console.log(`==============================================================================`);

interviewCheck(60,79, 88, "Mary");
console.log(`==============================================================================`);
