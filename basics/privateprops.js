class Person{

    constructor(firstName, middleName, lastName, age, email){

        this.firstName=firstName;
        this.middleName=middleName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;

    }

    #contact = [];

    setContact(contactNumber){

        this.#contact.push(contactNumber);

    }

    getPerson(){

        return `
        
            First Name:${this.firstName}
            Middle Name:${this.middleName}
            Last Name:${this.lastName}
            Age:${this.age}
            Email:${this.email}
            Contact Numbers:${this.#contact}

        `

    }

}

module.exports=Person;

const person1=new Person("Sunny","Singh","Chouhan",32,"hemendra.singh.c@outlook.com");

console.log(person1.getPerson())

person1.setContact(7999996891);

console.log(person1.getPerson());

























