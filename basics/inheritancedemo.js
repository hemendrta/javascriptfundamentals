class Student{

    constructor(name, contact, email, age){

        this.name=name;
        this.contact=contact;
        this.email=email;
        this.age=age;

    }

    userLogin(){

        return `
        
            You are logged in!!!
        
        `;

    }

    getStudent(){

        return `

            Student Name: ${this.name}
            Contact: ${this.contact}
            Email: ${this.email}
            Age: ${this.age}

        `;

    }

}

class SubStudent extends Student{

    printMessage(){

        return `
        
            This is SubStudent

        `;

    }

}

module.exports=Student;

const demo=new SubStudent();

console.log(demo.printMessage());
console.log(demo.userLogin());