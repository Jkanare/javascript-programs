console.log("=============Function with no arguments and no return type===============");

function stringHandsOn() {
  var str = "   Hey you are doing good, keep it up    ";
  console.log(`1. Given string is: ${str}`);

  console.log("================Using Length Method============");

  var strLength = str.length;
  console.log(`2. Length of given string is: ${strLength}`);

  console.log("================Using Trim Method============");

  var strTrim = str.trim();
  var strTrimLength = strTrim.length;
  console.log(`3. After removing whitespace from the given string is: ${strTrim},    and it's length is: ${strTrimLength}`);

  var result = strLength - strTrimLength;
  console.log(`4. Total number of extra space in given string is: ${result} `);

  console.log("================Using Charat Method============");

  var firstChar = strTrim.charAt(0);
  var lastChar = strTrim.charAt(strTrimLength - 1);
  console.log(`5. First character of string is: ${firstChar}, Last character of string is: ${lastChar}`);

  console.log("================Using Split Method============");

  var afterSplit = strTrim.split(" ");
  console.log(`6. Total words in string are: ${afterSplit.length}`);

  console.log("================Using IndexOf Method============");

  var strIndexOf = str.indexOf("good");
  console.log(`7. Index of word "good" in the string is: ${strIndexOf}`);

 console.log("================Using Substring Method============");
  

  var result = str.substring(22);
  console.log(`8. Substring starting from index '22' is: ${result}`);

  console.log("================Using Includes Method============");

  var result = strTrim.includes("up");
  console.log(`9. String ends with word 'up': ${result}`);

  var result = strTrim.includes("Hey");
  console.log(`10. String start with word 'Hey': ${result}`);
}
stringHandsOn();
