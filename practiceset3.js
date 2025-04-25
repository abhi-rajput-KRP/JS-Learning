/*
Q1- Write a program to print the marks of a student in an object using for in loop.
      obj = {harry:98,rohan:70,akash:7}
*/
let obj = { Harry: 98, Rohan: 70, Akash: 7 };
for (let i in obj) {
    console.log("Marks of " + i + " are " + obj[i])
}

//Q2- Write the ptogram in Q1 using for loop.
for (let i = 0; i < 3; i++) {
    let a = Object.keys(obj)[i]
    console.log("Marks of " + a + " are " + obj[a])
}

//Q3- Write a program to print "Try Again!!" until the user enters the correct number.
/*
This code only works on browser.

let s = 10
console.log(s==10)
do{
    let a = prompt('Enter any number :: ')
    if (Number.parseFloat(a)==a){
        console.log(Number.parseFloat(a)==a)
        break;
    }
    else{
        alert("Invalid input!")
    }
}while (s=10);
*/

//Q4- Write a function to calculate the mean of 5 numbers.
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5
}
console.log("Mean of 1,2,3,4,5 is " + mean(1, 2, 3, 4, 5))