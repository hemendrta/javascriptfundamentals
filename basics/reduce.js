// Syntax for the reduce is something like mentioned:

// reduce("function which we want to execute");

// reduce(function("value to which the operation needs to carry forward after each element of array", "starting value from where we need the execution to start or index value", ))

let nums=[12,2,3];

nums.reduce((total,num)=>{

    return total+num;

}, nums);

console.log(nums.reduce((total,num)=>{

    return total+num;

}));

console.log(nums.reduce((accumulator,num)=>{

    return accumulator+num;

},10));