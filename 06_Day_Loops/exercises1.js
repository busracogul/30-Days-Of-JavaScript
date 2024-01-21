// Exercises 1
let i = 0;
while (i <= 10) {
    console.log('while', i);
    i++;
}

let j = 0
do {
    console.log('do-while', j);
    j++;
} while (j <= 10);

// Exercises 2
let a = 10;
while (a >= 0) {
    console.log('while', a);
    a--;
}

let b = 10;
do {
    console.log('do-while', b);
    b--;
} while (b >= 0);

// Exercises 3
let number = parseInt(prompt('enter number n'));
for (let i = 0; i <= number; i++) {
    console.log('for', i);
}

// Exercises 4
console.log('#');
console.log('##');
console.log('###');
console.log('####');
console.log('#####');
console.log('######');
console.log('#######');

// Exercises 5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// Exercises 6
console.log('i', 'i^2', 'i^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);
}

// Exercises 7
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

// Exercises 8
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Exercises 9 ***
console.log('prime numbers')
for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}

// Exercises 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log('sum: ', sum);

// Exercises 11
let sum2 = 0;
let singleSum = 0, doubleSum = 0;
for (i = 0; i <= 100; i += 2) {
    doubleSum += i;
}
console.log('doubleSum:', doubleSum);

for (i = 1; i <= 100; i += 2) {
    singleSum += i;
}
console.log('doubleSum:', singleSum);

sum2 = parseInt(singleSum + doubleSum);
console.log('Sum=', sum2);

