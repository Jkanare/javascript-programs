console.log(`=====================WRF to check whether given string is Palindrome or not?=======================`);


function isPalindrome (str){
   
    let reverseString = str.split('').reverse().join('');
 
    if (str===reverseString) {
        console.log(`Given string is: ${str}, "It is palindrome"`);
        
    } else {
        console.log(`Given string is: ${str}, "It is not palindrome"`);
        
    }
    
}
isPalindrome("madam");
isPalindrome("dad");
isPalindrome("hello");



console.log(`=====WRF to check whether given string is anagram or not?===========================`);

function isAnagram(str1, str2){
   let string1 = str1.toLowerCase();
   let string2 = str2.toLowerCase();
   let strAscending = string1.split('').sort().join('');
   let strAscending1= string2.split('').sort().join('');
   if (strAscending==strAscending1) {
    console.log(`Given string: ${str1}, ${str2}: "It is Anagram"`);
    
   } else{
    console.log(`Given string: ${str1}, ${str2}: "It is not Anagram"`);
    
   }
   
}
isAnagram("Silent", "Listen");
isAnagram("Hello", "World");
isAnagram("Such", "much");