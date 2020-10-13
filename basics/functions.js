function demo(){

    console.log('this is s basic function!!!!');

}

//mentioned below is a function call.

demo();

// Example of a function returning something

function returndemo(){

    return "Hello!!!";

}

console.log(returndemo())

// Passing parameters or valeu in the function 

function demoName(name){

    console.log("Name is : ", name);
    console.log(`
    Hello there!!!, ${name}...

    How are you?
    It's been a long while since I have seen you ${name}
    `);
}

demoName("Hemendra");

function addnum(a,b){

    return (a+b);

}

var sumofnum=addnum(10,20);

console.log(sumofnum);

function userRole(name,role) {
    
    switch (role) {
        case 'admin':
            return `${name} is admin with complete access.`
            break; // When we have retunred something then we do not require break. This is not necessary.
        case 'sub admin':
            return `${name} is sub admin with complete access.`
            break;
        case 'test-user':
            return `${name} is test-user can prepare test.`
            break;
        case 'user':
            return `${name} is susbcriber with access to content.`
            break;
    
        default:
            return `${name} is guest user.`
            break;
    }

}

console.log(userRole("Hemendra", "admin"));

