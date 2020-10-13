//Declaration of an Object

var User=function(firstName, middleName, lastName, contact, isLoggedIn){

    this.firstName=firstName;
    this.middleName=middleName;
    this.lastName=lastName;
    this.contact=contact;
    this.isLoggedIn=isLoggedIn;
    
    this.getDetails = function(){

        return `

            Candidate Name: ${this.firstName} ${this.middleName} ${this.lastName},
            Contact Number: ${this.contact},
            Candidate Logged In? ${this.isLoggedIn}

        `;

    };

}

//For this one we will get undefined as without the new keyword it points to the global context

var hemendra = User("Hemendra","Singh","Chouhan",92176917, true);

console.log(hemendra);

//This will give us the desired values as for this one we are using new which would refer the object.

var hemendra = new User("Hemendra","Singh","Chouhan",179879716, true);

console.log(hemendra);

var aditi=new User("Aditi","Gupta","Chouhan",779797976, false);

console.log(aditi);

//We can add properties or the methods to the object which we have declared at the top:

User.prototype.getName =function (){

    return `Candidate Name is : ${this.firstName+" "+this.middleName+" "+this.lastName}`;

}

console.log(hemendra.getName());