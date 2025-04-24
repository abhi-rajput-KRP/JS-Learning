//Q1- Create a varuable of type string and try to add a number to it .
const a = 3;
const b = "String";
console.log(a + b); // It doesn't give error just join them.


//Q2- Use typeof operator to find the datatype of the string of last question.
console.log("The type of variable a+b is", typeof (a+b));


//Q3- Create a const object in javascript can you change it to holde a number later?
const item = {
    Abhi: 94,
    Sakshi: 93.8,
};
console.log(item["Abhi"]);
console.log(item);
// item = 2;
// console.log(item); --> It throws an error because you cant change value of const .


//Q4- Try to add a new key to the cont object
item["Priyanshu"] = 93; //adding new element in the object.
console.log(item); // It dont give error.


//Q5 - Write a JS program to create a word meaning dictionary of 5 words.
const dict = {
    Torque: "Rotaional anaulogoues of Force.",
    Momentum: "Total motion stores in any body.",
    Force: "Rate of change of momentum of any body.",
    Fluid: "Any substance that can flow.",
    Pseudo_Force: "A force assumed for the non inertial frames , in opposite direction of the acceleration of frame to make newtons laws of motion hold true.",
};
console.log("Meaning of Torque is", dict["Torque"]);
console.log("Meaning of Momentum is", dict["Momentum"]);
console.log("Meaning of Force is", dict["Force"]);
console.log("Meaning of Fluid is", dict["Fluid"]);
console.log("Meaning of Pseudo Force is", dict["Pseudo_Force"]);
