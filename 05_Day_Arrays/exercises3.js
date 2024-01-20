// Exercises 1.1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sortAges = ages.sort();
console.log('Small age ', ages[0]);

let bigAge = ages.length - 1
console.log('Big age ', ages[bigAge]);

console.log(sortAges);

// Exercises 1.2
if (sortAges.length % 2 === 0) {
    const middle1 = sortAges[sortAges.length / 2 + 1];
    const middle2 = sortAges[sortAges.length / 2];
    const median = (middle1 + middle2) / 2;
    console.log('median=', median);
}
else {
    const middle3 = sortAges[Math.floor(sortAges.length / 2)];
    console.log('median=', middle3);
}

// Exercises 1.3
let total = 0;
let sayac = 0;
for (let i = 0; i < sortAges.length; i++) {
    total = sortAges[i] + total;
    sayac++;
}
let average = total / sayac;
console.log('Average: ', average);

// Exercises 1.4
let minAge = sortAges[0];
let maxAge = sortAges[sortAges.length - 1];
let difference = maxAge - minAge;
console.log(difference);

// Exercises 1.5
let difMin = Math.abs(minAge - average);
console.log('******************', difMin)
let difMax = Math.abs(maxAge - average);
if (difMin > difMax) {
    console.log('(min - average) is greater.');
}
else if (difMin < difMax) {
    console.log('(max - average) is greater.');
}
else {
    console.log('(min - average) and (max - average) equal.');
}