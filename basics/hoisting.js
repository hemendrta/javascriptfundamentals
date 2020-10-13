//In the mentioned lines as we can see that we are using a function even before it has been declared

//This is possible because of the hoisting concepts 

//What happens in the hoisting is:

//Function declarations are taken at the top of the code, so the code is something like this:

/*

 function getContent(){

     return "content displayed";
 }

 console.log(getContent());

*/

//So function declarations in hoisting are scanned and made available.

//Variable declarations are scanned and made undefined.

// console.log(getContent());

// function getContent(){

//     return "Content displayed";

// }

// The samething function hoisting is not possible if we are taking it inside the variable that is if function is in a variable like mentioned

// console.log(getAnotherContent());

// var getAnotherContent= function(){

//     return "another content";

// }

// demoContent('hemendra');

// var demoContent=function (name){

//     console.log(`This is a demo content....${name}`);

// }

//In the mentioned code we are using the variable before even declaring or initializing it thus we will get the output undefined.

// console.log(name1);

// var name1="demoname";

// console.log(name1);

// console.log(getContent());

// console.log(getContent);


// function getContent(){

//     return "content displayed";

// }

// console.log(getContent());

// console.log(getContent);

// var getContent=function(){

//     return "content displayed";

// }

demoFunction();

function demoFunction(){

    console.log("demoFunction")

}

demoFunction1();

var demoFunction1 =function (){

    console.log("demoFunction1");

}

console.log(name);
var name;

name="hemendra"

function displayName(name){

    // var name="sunny";
    console.log(name)

}

console.log(name);

displayName(name);
displayName();