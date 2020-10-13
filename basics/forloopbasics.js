var countries=["India",
        "America",
        "Russia",
        "Germany",
        "Japan"];

var information=[

    "India",
    234567812,
    true
];

for (let index = 0; index < information.length; index++) {
    
    console.log(information[index]);
    
}

for (let index = 0; index < countries.length; index++) {
    console.table(`
    ${countries[index]}
    `);
    
}
countries.forEach(element => {
    console.log(`${element}`);
});

//This is meant for arrays:

for (const n of countries){
    console.log(`
    ${n}`);
}
console.log("\n")
//This is meant for objects:

var user={
    name:"Hemendra",
    contact:7999996891,
    age:32,
    isLoggedIn:true,
}

// Accessing the keys:

for(const n in user){

    console.log(n);

}

console.log("\n")

// Accessing the values:

for(const n in user){

    console.log(user[n]);

}


