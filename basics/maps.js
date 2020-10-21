// Declaration of map

var myMap=new Map();

// Assigning values to the map

myMap.set(1,"Hemendra");
myMap.set(2,"Sunny");
myMap.set(3,"Aditi");
myMap.set(4,"Subhash");
myMap.set(5,"Nisha");

console.log(myMap);
console.log("\n")

// Accesing the keys

for (const iterator of myMap.keys()) {
    console.log(iterator)
}

console.log("\n");

// Accessing the values

for (const iterator of myMap.values()) {
    console.log(iterator);
}

console.log("\n");

// Accessing the entries

for (const iterator of myMap.entries()) {
    console.log(iterator);
}

console.log("\n");

// Accessing key and values

for (const [key,value] of myMap) {
    console.log(`Key is : ${key} and Value is : ${value}`);
}

console.log("\n");

// Usage of forEach

myMap.forEach((val) => console.log(val));

console.log("\n");

// Usage of forEach

myMap.forEach((key, val) => console.log(`Key : ${key}, Value : ${val}`));