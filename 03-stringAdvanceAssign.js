console.log(`=========1. WAP to find the length or total number of characters of the strings===================`);
 
 function findLength(str) {
     var len = str.length;
     console.log(`Given string is "${str}", and the length is: ${len}`);
     
 }
 findLength("Hello, World");
 findLength("Javascript is the language of Internet");


 console.log(`=========2. WAP to print or log the last character of the given string=============================`);

  function lastChar(str) {
    var char = str.charAt(str.length-1);
    console.log(`Given string is "${str}" and the last character is: ${char}`);
    
 }
 lastChar("Hey, my friend, Programming Language");
 lastChar("I am learning logical programs");
 lastChar("Angular");


 console.log(`=========3. WAP to print or log the first character of the given strings==============================`);

 function firstChar(string) {
    console.log(`Given string is: "${string}"`);
    
    let char= string.charAt(0);
     return char;
 }
 let result = firstChar("React");
 console.log(`The first character of given string is: "${result}"`);
 
 let result2 = firstChar("Elon Musk");
 console.log(`The first character of given string is: "${result2}"`);

 let result3 = firstChar("Apple founder is Stew Job");
 console.log(`The first character of given string is: "${result3}"`);


 console.log(`=========4. WAP to check whether given strings contains word 'UI' or not?==============================`);

 function checkAvailableWord(str) {
   let strIncludes=  str.includes("UI");
    console.log(`Given string is "${str}", and does the string contains "UI"?: ${strIncludes}`);
    
 }
 checkAvailableWord("React - UI Developer");
 checkAvailableWord("UI Developer");
 checkAvailableWord("Front end and backend technologies");

 
 console.log(`=========5. WAP that how to split a string an array of substring? =======================================`);

 function splitString(str) {
   console.log(`Given string is: ${str}`);
    
   let strSplit= str.split(",");
   console.log(`After applying split and the substring is `,strSplit);
   
}
 splitString("apple,orange,banana");
 splitString("Stew,Bill,Jenny,Elon");


 console.log(`=========6. WAP to reverse the string using any existing methods-Part A ====================================`);

 function reverseString(str) {
    let result= str.split('').reverse().join('');
    console.log(`The given string is: "${str}",  reverse string is: "${result}"`);
    
}
 reverseString("Software");
 reverseString("UI Developer");


 console.log(`=========6. WAP to reverse the string without using predefined method-Part B ===================================`);

function reverseString1(str) {
    let reverse = "";
    for (let index = str.length-1; index>=0; index--) {
        const char = str.charAt(index);
        reverse = reverse+char;
    }
    console.log(`Given string is: ${str}, reverse string is: ${reverse}`);
    
}
 reverseString1("Web Developer");
 reverseString1("Billion Dollar");
 reverseString1("Java");


console.log(`=========7. WAP to count character 'a'===================================`);

function charCount(str) {
       let count = 0;
       console.log(`Given string is: ${str}`);
       var toLowerCaseStr = str.toLowerCase();
       for (let index = 0; index < toLowerCaseStr.length; index++) {
        var char = toLowerCaseStr.charAt(index);
        if (char=='a') {
            count++
        }
       }
        return count;
}  
  let str1= charCount("JavaScript");
  console.log(`Count of char a is : ${str1}`);
  
  let str2= charCount("Do or Die");
  console.log(`Count of char a is : ${str2}`);

  let str3= charCount("Learn with us, Job with us");
  console.log(`Count of char a is : ${str3}`);

  let str4= charCount("Empowering Dreams, Guaranteeing Futures");
  console.log(`Count of char a is : ${str4}`);

  let str5= charCount("Anny, My favorite fruit is Apple");
  console.log(`Count of char a is : ${str5}`);


  console.log(`=========8. WAP to count vowels===================================`);

  function vowelsCount(sentence) {
    let vowels = 'aeiou';
    let count = 0;
    console.log(`Given string is: ${sentence}`);
    for (let index = 0; index < sentence.length; index++) {
        const char = sentence.charAt(index);
        let lowerCaseStr = char.toLowerCase();
        if (vowels.includes(lowerCaseStr)) {
            count++
        }
    } return count;
    
  }
   let string = vowelsCount("JavaScript");
   console.log(`The vowel count of the string is: ${string}`);
 
   let string2 = vowelsCount("HTML and CSS");
   console.log(`The vowel count of the string is: ${string2}`);

   let string3 = vowelsCount("Language of Internet");
   console.log(`The vowel count of the string is: ${string3}`);

   let string4 = vowelsCount("I am UI Developer");
   console.log(`The vowel count of the string is: ${string4}`);

   let string5 = vowelsCount("DO or Die");
   console.log(`The vowel count of the string is: ${string5}`);

   console.log(`=========8. WAP to count words===================================`);
   
   function wordCount(n1) {
       console.log(`Given string is: ${n1}`);
       let split = n1.split(" ")
       let len = split.length;
    
       return len;
    
   }
    let string6 = wordCount("JavaScript The language of Internet");
    console.log(`Word count of the string is: ${string6}`);
    
    let string7= wordCount("Enhance Your Learning Journey with Exclusive Add-ons");
    console.log(`Word count of the string is: ${string7}`);

    let string8 = wordCount("Beyond frameworks, Beyond Imagination");
    console.log(`Word count of the string is: ${string8}`);

    let string9 = wordCount("I am passionate software developer");
    console.log(`Word count of the string is: ${string9}`);



  




