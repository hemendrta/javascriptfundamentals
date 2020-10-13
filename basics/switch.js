var userLevel='user';

switch (userLevel) {
    case 'admin':
        console.log('Welcome Admin')
        break;

    case 'user':
        console.log('Welcome User')
        break;
    case 'subadmin':
        console.log('Welcome Sub Admin')
        break;
    case 'subscriber':
        console.log('Welcome Subscriber')
        break;
    default:
        console.log('Wrong User')
        break;
}

// Another Example:

var rating=1;

switch (rating) {
    
    case 1:
        console.log('Poor Services')
        break;
    case 2:
        console.log('Average Services')
        break;
    case 3:
        console.log('Good Services')
        break;
    case 4:
        console.log('Could Improve Services')
        break;
    case 5:
        console.log('Excellent Services')
        break;

    default:
        console.log("Please rate from 1-5")
        break;
}