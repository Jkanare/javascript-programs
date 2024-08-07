
console.log(`=========================Using Function Expression========================================`);

var interviewCheck = function(gradScore, hscScore, sscScore, candidateName){
    console.log(`Given criteria's are: ${gradScore}, ${hscScore}, ${sscScore}, ${candidateName}`);
    var result = gradScore>=70 || hscScore>=80 || sscScore>90 ? `Congratulation ${candidateName} you are eligible for TCS interview` :
     `Unfortunately you are not eligible for interview`;
    console.log(`${result}`);
    } 
interviewCheck(80,86, 90, "Jyoti");
console.log(`==============================================================================`);

interviewCheck(70,65, 55, "Jullie");
console.log(`==============================================================================`);

interviewCheck(60,79, 88, "Mary");
console.log(`==============================================================================`);
