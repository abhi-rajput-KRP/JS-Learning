//Q1- Use logical operators to find whether the age of a person lies 10 and 20.
/*

This only Works for the browser as prompt is not a part of node js.

const a = prompt("Enter the number :: ");//Gives string but JS sting bhi compare kar leta hai.
if (a>10 && a<20){
    console.log("Yes,",a,"is between 10 and 20.");
}
else{
    console.log("No,",a,"is not between 10 and 20.");
}
*/

//Q2- Demonstrate the use of switch case statement in Java Script.
const day=4;
switch (day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

//Q3- Write a Java Script program to find whether a number is divisible by 1 and 3
const num = 14;
console.log(num ,(num%2==0 && num%3==0)? 'is divisible':'is not divisible', "by 2 and 3.");

//Q4- Write a Java script program to find whether a number is divisible by either 2 or 3
console.log(num ,(num%2==0 || num%3==0)? 'is divisible':'is not divisible', "by 2 or 3.");

//Q5- Print "You can Drive" or "You can not drive" based on age being greater than 18 using ternary operator.
const age = 3;
console.log((age>18)? 'You can Drive':'you can not drive');
