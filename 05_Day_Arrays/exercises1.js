// Exercises 1
const arr = [];
console.log(arr);

// Exercises 2
let fruits = ["apple", "banana", "strawberry", "plum", "pear", "melon", "orange"];

// Exercises 3
console.log(fruits.length);

// Exercises 4
console.log(fruits[0]);

let midFruits = (fruits.length - 1) / 2;
console.log(fruits[midFruits]);

let lastFruits = fruits.length - 1;
console.log(fruits[lastFruits]);

// Exercises 5
const mixedDataTypes = ["JavaScript", "Python", "JavaFX", "C#", 17.01, 2024, 32];
console.log(mixedDataTypes.length);

// Exercises 6
let ItCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Exercises 7
console.log(ItCompanies);

// Exercises 8
console.log(ItCompanies.length);

// Exercises 9
console.log(ItCompanies[0]);

let midItCompanies = (ItCompanies.length - 1) / 2;
console.log(ItCompanies[midItCompanies]);

let lastItCompanies = ItCompanies.length - 1;
console.log(ItCompanies[lastItCompanies]);

// Exercises 10
console.log(ItCompanies);

// Exercises 11
console.log(ItCompanies[0].toUpperCase());
console.log(ItCompanies[1].toUpperCase());
console.log(ItCompanies[2].toUpperCase());
console.log(ItCompanies[3].toUpperCase());
console.log(ItCompanies[4].toUpperCase());
console.log(ItCompanies[5].toUpperCase());
console.log(ItCompanies[6].toUpperCase());

// Exercises 12
console.log(ItCompanies.toString());

// Exercises 13
let index = ItCompanies.indexOf("Google");
if (index === 1) {
    console.log('Google');
}
else {
    console.log('not found');
}

// Exercises 14

// Exercises 15
console.log(ItCompanies.sort());

// Exercises 16
console.log(ItCompanies.reverse());

// Exercises 17
console.log(ItCompanies.slice(0, 3));

// Exercises 18
console.log(ItCompanies.slice(4, 7));

// Exercises 19
console.log(ItCompanies.slice(3, 4));

// Exercises 20
console.log(ItCompanies.shift());
console.log(ItCompanies);

// Exercises 21
let ItCompanies2 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(ItCompanies2.splice(3, 1));
console.log(ItCompanies2);

// Exercises 22
console.log(ItCompanies.pop());
console.log(ItCompanies);

// Exercises 23
console.log(ItCompanies.splice(0, 7));

