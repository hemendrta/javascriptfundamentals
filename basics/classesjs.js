//Declaration of Class:

class Employee{

    // Setting the values of fields and declaration of fields

    constructor(employeeName, employeeEmail, employeeAge){

        this.employeeName=employeeName;
        this.employeeEmail=employeeEmail;
        this.employeeAge=employeeAge;

    }

    // Another fields which we have in the class (Member variable)

    employeeContact = [];

    //Getters for fetching the values

    getEmployeeInfo(){

        return `

        Employee Name : ${this.employeeName}
        Employee Email : ${this.employeeEmail}
        Employee Age : ${this.employeeAge}
        Employee Contact : ${this.employeeContact}

        `;

    }

    //Setters to set the value of the variable which is not initialized in the constructor.

    setEmployeeContact(employeeContactNumber){

        this.employeeContact.push(employeeContactNumber);

    }

}

// Exporting the class so that it could be used anywhere.

module.exports=Employee;

// Using the class or calling the class and here the hemendra is an object of the class.

// const hemendra=new Employee("hemendra singh chouhan","hemendra.singh.c@outlook.com", 32);

// console.log(hemendra.getEmployeeInfo());
// hemendra.setEmployeeContact(7999996891);
// hemendra.setEmployeeContact(7999996890);
// console.log(hemendra.getEmployeeInfo());

