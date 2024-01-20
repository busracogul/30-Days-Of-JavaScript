// Exercises 2.2 ***
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let cleanedText = text.replace(/[.,]/g, ""); //regex
console.log(cleanedText);

let words = cleanedText.split(' ');
console.log(words);

console.log(words.length);

// Exercises 2.3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

let indexToRemove = shoppingCart.indexOf('Honey');
if (indexToRemove !== -1) {
    shoppingCart.splice(indexToRemove, 1);
}
console.log(shoppingCart);

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// Exercises 2.6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);