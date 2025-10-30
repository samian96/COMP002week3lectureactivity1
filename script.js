let name = "Sam"; // this variable is available in the entire program

if (name == "Sam") {
    name = "Iannazzo"; // name still accessible herer
    let helloStatement = "Hello," + name; // variable only accessible inside this code block
    console.log (helloStatement);
} // if block completes variable helloStatement is no longer accessible
// error will be thrown if helloStatement is trying to be called again, name variable still available

// three ways to declare a function

// method 1 
// when calling method 1 it should be defined first
const printHelloWorld = function() {
    //function lock
    console.log('printHelloWorld() called!');
    console.log("Hello");
    console.log("world!");
}

printHelloWorld(); // calls the function

// method 2
// can be defined after it is called
printHelloWorld2();
function printHelloWorld2() {
    // this method does not require a semicolon
    console.log("printHelloWorld2() is called!")
};


// Method 3: arrow method
// method 3 should be defined first before calling
const printHelloWorld3 = () => {
    //terminate with semicolon
    console.log("printHelloWorld3() is called!")
}
printHelloWorld3();

/**********************************************************************************/

//functions with parameter
function printHelloWorld4(name) {
    console.log("Hello, " + name)
    // the variable name no longer exists when the function no longer repeats
}

printHelloWorld4("Sam");
printHelloWorld4("Joe");
printHelloWorld4("Brandon");
printHelloWorld4("Erin");

// function with multiple parameters 
function printHelloWorld5(name1, name2, name3, name4, name5) {
    console.log(`Hello, ${name1}, ${name2}, ${name3}, ${name4}, ${name5}`); // always use ` when doing string interpulation
}
printHelloWorld5("John", "Sam", "James", "Shawn", "Paul");

// string output options (single-quotes, double-quotes, backticks)
let someVariable = "test";
console.log('hello, ' + someVariable)
console.log("Hello, " + someVariable)
console.log(`Hello, ` + someVariable)

/************************************************************************************************ */

// function calling a function
function printHelloWorld6() {
    console.log("printThis is 6")
}
function printHelloWorld7() {
    console.log("printThis is 7")
    printHelloWorld6();
}
printHelloWorld7();
printHelloWorld6();

/*************************************************************************************************** */

// recursion 
const factorial = n => {
    if (n <= 1) {
        return 1; // terminates "base case"
    }

    return n * factorial(n -1);
}; //close this line

console.log(factorial(5));

/***************************************************** */

// no return vs return value functions

// function without a return value
function sum(num1, num2) {
    console.log(num1 + num2); // prints sum of num1 num2 does not return value
}
// function with a return value
function difference(num1, num2){
    return num1-num2; // returns the difference back
}
sum (2, 10);
console.log (difference(10, 5)); // print return value
let addTenToDifference = difference(10, 5) + 10;
console.log(addTenToDifference);

/////////////////////////////////////////////////////////////////////////////////

// accessing an array, string is an array of characters

let input = "mississippi";
console.log(input[0]); // prints first letter
console.log(input[10]); // prints last letter

console.log("size of array is" + input.length)
for(let i = 0; i < input.length; i++) {
    console.log(input[i])
}
