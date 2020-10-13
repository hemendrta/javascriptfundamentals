var temperature;

//Declaration of variable:

temperature=67;

if(temperature<50){

    console.log("It is bearable")
}
else{

    console.log("Turn on conditioner")

}

// Example:

var facebook=false;
var google=false;
var linkedin=false;

if(facebook || google || linkedin){

    console.log("Logged In");

}
else{

    console.log("Please Log In")
}

// Another way of writing the above thing

(facebook || google || linkedin) ? console.log("Welcome") : console.log("Please Login");

//Another Example for if and else, these are ternary operators.
temperature=10;

(temperature < 30) ? console.log("Get the sweaters") : console.log("There is still sometime");