//Q1- Explore the includes, startswith and endswith function to a string.
let a = "Hello My name is Abhi.";
console.log(a.includes("My")); //The includes() method returns true if a string contains a specified string.
console.log(a.endsWith("Abhi.")); //The endsWith() method returns true if a string ends with a specified string.
console.log(a.endsWith("Abhi")); 
console.log(a.startsWith("Hello")); //The startsWith() method returns true if a string starts with a specified string.

//Q2- Write a program to convert a given string to lowercase.
a = a.toLowerCase();
console.log(a)

//Q3 - Extract ammount out of "Please give me Rs 1000"
let b = "Please give me Rs 1000"
console.log(Number.parseInt(b.slice(18)))