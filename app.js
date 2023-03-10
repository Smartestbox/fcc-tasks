// Basic JS. Task - Profile Lookup
// The function should check if name is an actual contact's firstName and the given property (prop) is a
// property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the
// string No such property.
const contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));

// ---------------------------------------------------------------------------

// Basic JS. Task - Generate Random Fractions with JavaScript
// Change randomFraction to return a random number

function randomFraction() {



  return Math.random();


}

// ---------------------------------------------------------------------------

// Basic JS. Task - Generate Random Whole Numbers with JavaScript
// Generate and return a random whole number between 0 and 9

function randomWholeNum() {


  return Math.floor(Math.random() * 10);

}

// ---------------------------------------------------------------------------

// Basic JS. Task - Generate Random Whole Numbers within a Range
// Create a function called randomRange that takes a range myMin and myMax and 
// returns a random whole number that's greater than or equal to myMin, and 
// is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// ---------------------------------------------------------------------------

// Basic JS. Task - Use the parseInt Function
// Use parseInt() in the convertToInteger function 
// so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {
  return parseInt(str);
}

// ---------------------------------------------------------------------------

// Basic JS. Task - Use the parseInt Function with a Radix
// Use parseInt() in the convertToInteger function so 
// it converts a binary number to an integer and returns it.

function convertToInteger(str) {
  return parseInt(str, 2)
}

// ---------------------------------------------------------------------------

// Basic JS. Task - Use the Conditional (Ternary) Operator
// Use the conditional operator in the checkEqual function 
// to check if two numbers are equal or not. The function should 
// return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal"
}

// ---------------------------------------------------------------------------

// Basic JS. Task - Use Multiple Conditional (Ternary) Operators
// In the checkSign function, use multiple conditional operators - 
// following the recommended format used in findGreaterOrEqual - 
// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" 
//     : (a > b) ? "a is greater" 
//     : "b is greater";
// }
// to check if a number is positive, negative or zero. The function should return 
// positive, negative or zero.

function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero"
}

// ---------------------------------------------------------------------------

// Basic JS. Task - Use Recursion to Create a Countdown
// We have defined a function called countdown with one parameter (n). 
// The function should use recursion to return an array containing the integers n through 1 
// based on the n parameter. If the function is called with a number less than 1, the function 
// should return an empty array. For example, calling this function with n = 5 should return 
// the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use 
// loops of any kind.

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// ---------------------------------------------------------------------------

// Basic JS. Task - Use Recursion to Create a Range of Numbers
// We have defined a function named rangeOfNumbers with two parameters. The function 
// should return an array of integers which begins with a number represented by the 
// startNum parameter and ends with a number represented by the endNum parameter. The 
// starting number will always be less than or equal to the ending number. Your function 
// must use recursion by calling itself and not use loops of any kind. It should also 
// work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
