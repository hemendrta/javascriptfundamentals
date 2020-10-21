// const user=["Hemendra Singh Chouhan",32,true];

// var name=user[0];
// var age=user[1];
// var isLoggedIn=user[2];

// console.log(`

//     ${name}
//     ${age}
//     ${isLoggedIn}

// `);

// // Another way of accessing the same information could be as mentioned:

// var [name1,age1,isLoggedIn1] = user;

// console.log(`

//     ${name1}
//     ${age1}
//     ${isLoggedIn1}

// `);

// Object Destructuring 

var newUser = {

    name:"Hemendra Singh Chouhan",
    age:32,
    isLoggedIn:true

}

console.log(newUser);

// var {name,age,isLoggedIn} = newUser;

// console.log(`

//     ${name}
//     ${age}
//     ${isLoggedIn}

// `);

// Make sure that the fields that we have in the var which have declared should be of the same name as we have in the object:

// Output for the above code:

// { name: 'Hemendra Singh Chouhan', age: 32, isLoggedIn: true }


//     Hemendra Singh Chouhan
//     32
//     true

// For example consider the output for the mentioned code:

var {name,age1,isLoggedIn1} = newUser;

console.log(`

    ${name}
    ${age1}
    ${isLoggedIn1}

`);

// Output for the just above code is:

// { name: 'Hemendra Singh Chouhan', age: 32, isLoggedIn: true }


//     Hemendra Singh Chouhan
//     undefined
//     undefined

// So we have to keep in mind that we should be using the same field names as the way in the object: