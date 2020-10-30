// Declaration of an Array

var students = ['hemendra','sunny','subhash', 'nisha','aditi'];

// Arrays are index based and thus the values can be accessed by using the index number

console.log(students[0]);

console.log();

// Another way is by iterating through each element of the array

students.forEach(element => {
    console.log(element);
});

console.log()
// We can directly print the object as well

console.log(students);

// concat method is used to join 2 or more arrays together

var students1 = ['demo', 'demo1', 'demo2'];
var students2 = ['demo3', 'demo4', 'demo5'];

console.log()

// We can paas the arrays which we want to concat in the arguments 

console.log(students.concat(students1,students2));

// copywithin() will copy the elements within the array from one location to another, this won't be adding any other elements

// array.copyWithin(target, start, end)

// The entries() method returns an Array Iterator object with key/value pairs.

console.log()

// In the mentioned below line we are assigning the entries in the new variable which is studs, note that these are entries like
// keys and values kind.

var studs=students.entries();

for (const iterator of studs) {
    console.log(iterator);
}

// every function checks for every value inside the array and returns true only if the entire elements is true

console.log();

const checklen = (args)=>{

    // return args.length < 5; this one is false
    // below is true
    // return args.length < 10; 
    return args.length <7;

}

const demofun = ()=>{

    console.log(students.every(checklen));

}

demofun();

// fill function is used to fill the array with the value which we want

var numbers=[10,202,30,450,67];

numbers.fill(23,3);

console.log(numbers);

// In the above function we are filling value from the 3 index and the value is 23

// filter function will check a condition and if the condition matches it will send the return.

console.log();

console.log(students.filter(checklen));

// find function help in fidning the elements if a certain condition in met
console.log();

console.log(students.find(checklen));

// foreach helps in iterating through each element and perform the task

console.log();

students.forEach((item)=>{

    console.log(item.length);

});

// inlcudes checks whether the array has the object/element or not

console.log()

console.log(students.includes('hemendra'));

