// types of data
typeof(2+3);
typeof("Angela");
typeof(true);

// variables
var name = prompt("what is your name?")
alert("My name is " + name + " wellcome to javascript course!!!")

// switch variable
var a = "3";
var b = "8";

var c = a;
a = b;
b = c;

console.log("a = ", a);
console.log("b = ", b);

// Strings
alert("hello" + " " + "world !!");
 
let text = "Hello World";
console.log(text.length); // 11

let text = "hello";
console.log(text.toUpperCase()); // HELLO

let text = "HELLO";
console.log(text.toLowerCase()); // hello

let text = "JavaScript is fun";
console.log(text.includes("Script")); // true
console.log(text.includes("Python")); // false

let text = "banana";
console.log(text.indexOf("a")); // 1

let text = "JavaScript";
console.log(text.slice(0, 4)); // Java
console.log(text.slice(4));    // Script

// functions
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);

// BMI calculator
function bmi(weight, height) {
    bmi = weight / (height*height)
    return bmi
}

let myBmi = bmi(82, 1.78);
console.log("your bmi is equal to " + myBmi);