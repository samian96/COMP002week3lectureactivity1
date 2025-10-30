let name = "Sam"; // this variable is available in the entire program

if (name == "Sam") {
    name = "Iannazzo"; // name still accessible herer
    let helloStatement = "Hello," + name; // variable only accessible inside this code block
    console.log (helloStatement);
} // if block completes variable helloStatement is no longer accessible
// error will be thrown if helloStatement is trying to be called again, name variable still available

// three ways to declare a function

// method 1 
const printHelloWorld = function() {
    //function lock
    console.log('printHelloWorld() called!');
    console.log("Hello");
    console.log("world!");
}

printHelloWorld();