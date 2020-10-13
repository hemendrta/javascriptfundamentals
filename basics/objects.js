//Creating an object with some parameters:

var user={

    firstName:"Hemendra",
    middleName:"Singh",
    lastName:"Chouhan",
    isLoggedInFromFacebook:true,
    sessionCount:45,
}

//Accesing or just printing the entire object:

console.log(user);
console.table(user);

//Accesing the parameters of object:

console.table(user.middleName);
console.table(user.firstName);
console.table(user.isLoggedInFromFacebook);

// Altering the values or the fields of objects:

user.middleName="S";
console.log(user);
user.isLoggedInFromFacebook=false;
console.table(user);

//Adding the field which is already not exsiting.

user.contactNumber=7999996891;
console.log(user);

// object with methods:

var employee ={

    //Data Members or the properties of employee.

    employeeFirstName:"Hemendra",
    employeeMiddleName:"Singh",
    employeeLastName:"Chouhan",
    employeeContactNumber:7999996891,
    employeeLoggedIn:true,
    
    // Method Declaration
    //Fetching Details

    getEmployeeDetails:function(){

        return `
        First Name: ${this.employeeFirstName}
        Middle Name: ${this.employeeMiddleName}    
        Last Name: ${this.employeeMiddleName}
        Contact Number: ${this.employeeContactNumber}
        Employee Logged In: ${this.employeeLoggedIn}
        `;

    },

    //Setting Details

    setEmployeeContactNumber:function(employeeContactNumber){

        this.employeeContactNumber=employeeContactNumber;

    }

}

// Accesing the method

console.log(employee.getEmployeeDetails());

//Setting the value of data member.

employee.setEmployeeContactNumber(9179075007);

console.table(employee.getEmployeeDetails());

