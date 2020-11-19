var name="hemendra";

console.log("Line number 3",name)

function displayName(){

    console.log("Line number 7",name)

}

//Variable which has been declared in the global scope is available and used by the block if it does not have the same of it's own.

var anotherName="another hemendra";
console.log(`Line 12 ${anotherName}`)

function displayAnotherName(){

    var anotherName="yetAnotherName hemendra";
    console.log(`Line number 19 ${anotherName}`);

}

displayAnotherName();

function demofun(){

    var name2="this is hemendra";

    console.log(name2);

    demofun2();

    function demofun2(){

        console.log(name2);
    }

}

demofun();