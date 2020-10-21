// Set time interval which will execute for every one second

const myvar=setInterval(() => {

    var date=new Date();
    console.log(date.toLocaleTimeString());

}, 1000);

// set time out function which will be called at 3 second 

setTimeout(() => {

// Clear timeout which will stop the execution of timeinterval

    clearTimeout(myvar);
}, 3000);
