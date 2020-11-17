// Code to check whether the sum of two integers is equal to 100 or any one number is 100

const isEqualto100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualto100(10, 20));
console.log(isEqualto100(100, 40));
console.log(isEqualto100(0, 100));
console.log(isEqualto100(50, 50));
console.log(isEqualto100(40, 80));
console.log(isEqualto100(30, 90));
console.log(isEqualto100(20, 100));

console.log("-----------------------------------");

// Code to get the extension of a filename.

const getFileName = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileName("index.html"));
console.log(getFileName("demo.pack.js"));

console.log("-----------------------------------");

// Write code to replace every character of a string with the next character.

const moveCharacterForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharacterForward("abcdef"));
console.log(moveCharacterForward("abedgf"));
console.log(moveCharacterForward("abcdef"));
console.log(moveCharacterForward("abtyef"));

console.log("-----------------------------------");

// Write a program to get the current date.

// Expected Output:

// mm-dd-yyyy, mm/dd/yyyy

const dateformatPrint = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();

  return `${days}/${months}/${years}`;
};

console.log(dateformatPrint());

console.log("-----------------------------------");

// Create  a string with "New!" in front of a given string. If the given string begins with "New!" already, return original string.

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

console.log(addNew("New! Hemendra"));
console.log(addNew("Hemendra"));
console.log(addNew("Sunny"));
console.log(addNew("New! Sunny"));

console.log("-----------------------------------");

// Create a new string from a given string taking the first 3 characters and last 3 characters of a string and adding them together. The string length must be 3 or more, if not the original string is returned.

const makeString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeString("hemendra"));
console.log(makeString("singh"));
console.log(makeString("sun"));

console.log("-----------------------------------");

// Extract first half of a string of even length.

const halfString = (str) => {
  return str.length % 2 === 0 ? str.slice(0, str.length / 2) : str;
};

console.log(halfString("hemendra"));
console.log(halfString("sunny"));
console.log(halfString("sing"));

console.log("-----------------------------------");

// Write a code to concatenate 2 strings except their first character.

const addString = (str1, str2) => {
  return str1.slice(1) + str2.slice(1);
};

console.log(addString("hemendra", "singh"));
console.log(addString("Sunny", "chouhan"));

console.log("-----------------------------------");

// Given 2 values write a program to detect which one is closer to 100.

const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closeTo100(10, 20));
console.log(closeTo100(30, 20));
console.log(closeTo100(20, 20));
console.log(closeTo100(50, 20));
