// Exercises 2.1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

// Exercises 2.4
let isThereCountry = countries.indexOf('Ethiopia');

if (isThereCountry !== -1) {
    console.log('Ethiopia'.toUpperCase());
}
else {
    countries.push('Ethiopia');
    console.log(countries);
}

