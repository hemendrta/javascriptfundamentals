setTimeout(() => {
    console.log("Welcome");
}, 2000);

// setTimeout requires 2 things as an argument --->

// 1. Delay Time after which the event or the task needs to be performed.
// 2. Task or function or events which needs to be executed.

setTimeout(()=>{

    console.log("This is the event or event which was executed after the delay of 3000 milliseconds")

},3000);