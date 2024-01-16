// Exercises 1
let age = prompt("Enter your age: ");
console.log(`Enter your age: ${age}`);

if (age >= 18) {
    console.log("You are old enough to drive.");
}
else {
    let ageAwait = 18 - age;
    console.log(`You are left with ${ageAwait} yers to drive.`);
}

// Exercises 2
let yourAge = prompt("Enter her age: ");
let myAge = prompt("Enter your age:");

console.log(`Enter your age: ${yourAge}`);
if (yourAge > myAge) {
    let ageDifference = yourAge - myAge;
    console.log(`You are ${ageDifference} years older than me.`)
}

else {
    let ageDifference = myAge - yourAge
    console.log(`I am ${ageDifference} years older than you.`)
}

// Exercises 3
let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
}

let number = a > b;
number ? console.log(`${a} is greater than ${b} `) : console.log(`${a} is less than ${b}`)

// Exercises 4
let number1 = prompt("Enter a number: ");

if (number1 % 2 == 0) {
    console.log(`${number1} is an even number`);
}
else {
    console.log(`${number1} is an odd number`);
}