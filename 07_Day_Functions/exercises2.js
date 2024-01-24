// Exercises 1
function solveLinEquation(x, y) {
    const a = 3, b = 2, c = 5;
    calculate = a * x + b * y + c;
    return calculate;
}
console.log(solveLinEquation(2, 4));

// Exercises 2
function solventQuadEquation(x) {
    const a = 1, b = 3, c = 7;
    calculate2 = a * (x ** 2) + b * x + c;
    console.log(calculate2);
}
solventQuadEquation(2);

// Exercises 3
function printArray() {
    console.log(arguments);
}
printArray('Büşra', 'Çoğul', 24, 'January');

// Exercises 4
// Exercises 5
function swapValues(x, y) {
    console.log(`x => ${y}, y => ${x}`);
}
swapValues(3, 4);

// Exercises 6
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// Exercises 7 ***
const capitalizeArray = (...arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}
console.log(capitalizeArray('Mersin', 'Ankara', 'İstanbul'));

// Exercises 8
const addNum = (...args) => {
    const newArr = [];
    for (let i = 0; i < args.length; i++) {
        newArr.push(args[i]);
    }
    return newArr;
}
console.log('Add number: ', addNum(1, 5, 7));

// Exercises 9
// Exercises 10
const sumNum = (...args) => {
    let sum = 0;
    for (const element of args) {
        sum += element;
    }
    return sum;
}
console.log(sumNum(15, 20, 30, 25, 10, 33, 40));

// Exercises 11
const oddNum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(oddNum(1, 7));

// Exercises 12
const doubleNum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(doubleNum(1, 9));