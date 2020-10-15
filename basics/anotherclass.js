//Class Creation with fields firstName,middleName,lastName, contact and email.

class Users{

//Setting values using the constructor.

    constructor(firstName, middleName, lastName, contact, email){

        this.firstName=firstName;
        this.middleName=middleName;
        this.lastName=lastName;
        this.contact=contact;
        this.email=email;

    }

//Declaring the variable of which the value we are not setting using the constructor

    isLogged = null;

    setIsLoggedIn(loginStatus){

        this.isLogged=loginStatus;

    }

    getUser(){

        return `
        
            User Name:${this.firstName} ${this.middleName} ${this.lastName}
            Contact Number:${this.contact}
            Email Address:${this.email}
            Is LoggedIn:${this.isLogged}

        `
    }

}

module.exports=Users;