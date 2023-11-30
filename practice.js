"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = "sahar";
let userAge = 17;
if (userName === "sahar") {
    console.log("Valid Name");
}
else {
    console.log("inValid Name");
}
//user info 
let userCountry = "pakistan ";
let userHeight = 7.7;
if (userCountry === " pakistan") {
    if (userHeight <= 7.5) {
        console.log("Here is your Ticket");
    }
    else {
        console.log("you are not eligible");
    }
}
else {
    console.log("invalid Age");
}
//Array
let fruits = ["apple", "banana", "orange", "strwaberry"];
console.log(fruits[2]);
//pop
let pets = ["cats", "dog", "rabbit", "cow", "horse"];
pets.pop();
console.log(pets);
//push
let Pets = ["cats", "dog", "rabbit", "cow", "horse"];
Pets.push("elephant");
console.log(Pets);
//shift
let Name = ["ali", "fatima", "hamza", "sahar"];
Name.shift();
Name.shift();
Name.shift();
console.log(Name);
//unshift
let student = ["ali", "fatima", "hamza", "sahar"];
Name.unshift();
console.log(student[3]);
//splice
let Student = ["ali", "fatima", "hamza", "sahar"];
student.splice(2, 0, "Ahmad");
console.log(Student);
// function
//  function greet(){
//  console.log("Hello Sahar Welcome to Typescprit")
//  }
//  greet();
function greet(firstName) {
    console.log('Hello ${firstName} Welcome to our website');
}
greet("Ali");
greet("Sahar");
// if example//
let evenNumber = 8;
let oddNumber = 9;
console.log(oddNumber);
if (evenNumber === oddNumber)
    console.log(oddNumber);
else
    console.log(evenNumber);
//print odd nd even//
let myinp = 22;
if (myinp % 2 == 0) {
    console.log("It is Even");
}
else {
    console.log("it is odd");
}
// print vowel 
let val = "a";
if (val == ("s" || "n" || "y" || "g"))
    console.log("false");
else
    console.log("true");
let Val = "a";
if (val == ("s" || "n" || "y" || "g"))
    console.log("false");
else
    console.log("true");
//function
function calculateArea(length, breath) {
    return length * breath;
}
console.log(calculateArea(20, 30));
//function 
function input(postive, negative, zero) {
    return postive * negative * zero;
    console.log(input(3, 4, 6));
}
//fuction 
function CheckNumber(num) {
    if (num > 0)
        console.log("postive");
    else if (num < 0)
        console.log("negative");
    else
        console.log("zero");
}
CheckNumber(-7);
