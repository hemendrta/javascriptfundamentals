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

console.log("-----------------------------------");

// Count of total even numbers in the array.

const findEvenCount = (arr) => {
  return arr.filter((ele) => ele % 2 === 0).length;
};

console.log(findEvenCount([12, 4, 5, 6, 6, 7, 8, 9, 9, 90]));
console.log(findEvenCount([12, 4, 5, 6, 6, 72, 843, 923, 34, 90]));
console.log(findEvenCount([12, 4, 54, 69, 635, 8, 9, 9, 90]));

console.log("-----------------------------------");

// Program to find the even numbers upto a given number.

const evenNumberRange = (num) => {
  const nums = [];

  for (let i = 0; i < num; i++) {
    nums.push(i);
  }
  return nums.filter((number) => number % 2 === 0);
};

console.log(evenNumberRange(10));
console.log(evenNumberRange(15));
console.log(evenNumberRange(2));

console.log("-----------------------------------");

// Check whether is the given array sorted or not.

const checkAscending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      return true;
    }

    return false;
  }
};

console.log(checkAscending([1, 2, 3, 4, 5]));
console.log(checkAscending([10, 2, 3, 4, 5]));

console.log("-----------------------------------");

// Largest even number from an array of integers.

const largestEven = (arr) => {
  return Math.max(...arr.filter((num) => num % 2 === 0));
};

console.log(largestEven([1, 2, 3, 4, 5]));
console.log(largestEven([10, 2, 3, 4, 5]));

console.log("-----------------------------------");

// Replace first digit in a string (should contain at least digit) with $ character.

const replaceDigit = (str) => str.replace(/[0-9]/, "$");

console.log(replaceDigit("99hemendra"));
console.log(replaceDigit("em78sun765endra"));

// Check whether the year is leap year or not

const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2016));
console.log(isLeapYear(2017));
console.log(isLeapYear(2018));
console.log(isLeapYear(2019));
console.log(isLeapYear(2020));

console.log("-----------------------------------");

// Compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties).

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, d: 3 };
const obj3 = { a: 4, b: 5, c: 6 };
const obj4 = { a: 4, b: 5, c: 6, d: 10 };

// false
// true
// true
// true
// false

const matchObject = (objA, objB) => {
  return Object.keys(objA).every((key) => objB[key]);
};

console.log("--------------------");
console.log(matchObject(obj1, obj2));
console.log(matchObject(obj1, obj4));
console.log(matchObject(obj2, obj4));
console.log(matchObject(obj3, obj4));
console.log(matchObject(obj4, obj3));

console.log("-----------------------------------");

// Convert a CSV (Comma Seperated Values) string to a 2D array. A new line indicates a new row in the array.

// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,

// Output:

// [
//   [ 'abc', 'def', 'ghi' ],
//   [ 'jkl', 'mno', 'pqr' ],
//   [ 'stu', 'vwx', 'yz' ]
// ]

const convertCSV = (CSVString) => {
  return CSVString.split("\n").map((row) => row.split(","));
};

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yz`;

console.log(convertCSV(str));

console.log("-----------------------------------");

// Generate hexadecimal color code.

// Helper function to generate random hexadecimal number:

const generateHex = () => {
  return Math.floor(Math.random() * 16).toString(16);
};

console.log(generateHex());

const getHexColor = () =>
  "#" + Array.from({ length: 6 }).map(generateHex).join("");

console.log(getHexColor());
console.log(getHexColor());
console.log(getHexColor());
console.log(getHexColor());
console.log(getHexColor());

console.log("-----------------------------------");

// Create a function that returns a passed string with letters in alphabetical order.

// Example:

// Input String :  "hemendra"
// Output String : "adeehmnr"

const sortString = (str1) => str1.split("").sort().join("");

console.log("-----------------------------------");

// Count the number of vowels in a string.

let letters = ["a", "e", "i", "o", "u"];
const checkVoewlsCount = (checkString) =>
  checkString.split("").filter((alphabet) => letters.indexOf(alphabet) > -1)
    .length;

console.log(checkVoewlsCount("hemendra singh chouhan"));
console.log(checkVoewlsCount("nisha singh chouhan"));
console.log(checkVoewlsCount("subhash singh chouhan"));
console.log(checkVoewlsCount("aditi singh chouhan"));
console.log(checkVoewlsCount("singh chouhan"));
console.log(checkVoewlsCount("hemendra"));

console.log("-----------------------------------");

// Extract unique characters from a string.

const getUniqueCharactersFromString = (name) =>
  [...new Set(name.split(""))].join();

console.log(getUniqueCharactersFromString("hemendra singh chouhan"));
console.log(getUniqueCharactersFromString("nisha singh chouhan"));
console.log(getUniqueCharactersFromString("subhash singh chouhan"));
console.log(getUniqueCharactersFromString("aditi singh chouhan"));

console.log("-----------------------------------");

// Question:

const person = [
  {
    firstName: "Hemendra",
    lastName: "Chouhan",
    DOB: "11/28/1989",
    department: "Software Development",
    salary: "50000",
  },
  {
    firstName: "Subhash",
    lastName: "Chouhan",
    DOB: "11/28/1958",
    department: "Administration",
    salary: "40000",
  },
  {
    firstName: "Aditi",
    lastName: "Chouhan",
    DOB: "10/04/1989",
    department: "Human Resource",
    salary: "33000",
  },
  {
    firstName: "Nisha",
    lastName: "Chouhan",
    DOB: "08/25/1956",
    department: "Education",
    salary: "50012",
  },
  {
    firstName: "Sunny",
    lastName: "Chouhan",
    DOB: "11/19/1989",
    department: "Information Technology",
    salary: "45000",
  },
  {
    firstName: "Rahul",
    lastName: "Shrivastava",
    DOB: "09/23/1989",
    department: "Recruitment",
    salary: "80000",
  },
  {
    firstName: "Harsh",
    lastName: "Gautam",
    DOB: "01/09/1986",
    department: "Recruitment",
    salary: "52000",
  },
  {
    firstName: "Ramesh",
    lastName: "Chouhan",
    DOB: "09/23/1982",
    department: "Training Development",
    salary: "60000",
  },
];

// Average Salary for the persons

const getAverageSalary = (person1) =>
  person1.reduce(
    (accumulator, person1) => accumulator + parseInt(person1.salary),
    0
  ) / person1.length;

console.log(getAverageSalary(person));

console.log("---------------------------------------");

// People who are above 32

const getPersonAbove32 = (person) =>
  person.filter(
    (per) => new Date().getFullYear() - new Date(per.DOB).getFullYear() > 32
  );

console.log(getPersonAbove32(person));

console.log("---------------------------------------");

// Get Full Name

const getFullName = (person) =>
  person.map((p) => `${p.firstName} ${p.lastName}`);

console.log(getFullName(person));

console.log("---------------------------------------");

// Sorted on the basis of Age (Youngest to Oldest)

const sortingAge = (person) =>
  person.sort(
    (person1, person2) => new Date(person2.DOB) - new Date(person1.DOB)
  );

console.log(sortingAge(person));

// Redirect to a page using javascript (This is going to keep the history)

window.location.href='Pageurl';

// Redirect to a page using javascript (This will not keep the history)

window.location.replace('Pageurl');

// Reload a page using javascript. True basically idicates that we have the page from the server.

window.location.reload(true);

// Reload a page using javascript. False basically means that we are getting the page from the cache.

window.location.reload(false);

//Get current page url

document.URL;
window.location.href;
new URL(window.location.href);

