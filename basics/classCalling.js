// Importing the class which has been exported (classes.js)

const Employee = require("./classesjs");

// Creating the object by the name hemendra and initializing the values by the means of constructor

const something = new Employee("Hemendra Singh Chouhan","hemendra.singh.c@outlook.com",32);

// Fetching the data by the means of methods

console.log(something.getEmployeeInfo());
something.setEmployeeContact(7999996891);
something.setEmployeeContact(7999996890);
console.log(something.getEmployeeInfo());

const Users = require("./anotherclass");

const sunny=new Users("Sunny","Singh","Chouhan",7999996891,"hemendra.singh.c@outlook.com");

console.log(sunny);

sunny.setIsLoggedIn(true);

console.log(sunny);