var name;

console.log(name);

var newname=null;
console.log(newname);

//Since the newname is null which is faly value thus the code inside the if won't run

if (newname) {
    console.log("it is true")
}

var use="2";

if (use==2) {
    console.log("Only the loose checking happened here!!!")
}

else if(use===2){

    console.log("Tight checking happened here!!!")
}

var use1="2";

if(use1==="2"){

    console.log("Tight checking happened here!!!");
}

else{

    console.log("Loose checking happened in this case as well!!!")
}