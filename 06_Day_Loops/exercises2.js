// Exercises 1
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const wordLength = 10;

let randomId = '';
for (let i = 0; i < wordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
}
console.log('Random id: ', randomId);

// Exercises 2
const hexadecimalChar = 'ABCDEFabcdef0123456789';
const hexLength = 6;

let hexNumber = '#';
for (let i = 0; i < hexLength; i++) {
    const randomHex = Math.floor(Math.random() * hexadecimalChar.length);
    hexNumber += hexadecimalChar.charAt(randomHex);
}
console.log('Random hexacedimal number: ', hexNumber);

// Exercises 3
// Exercises 4
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
const newCountries = [];

for (let i = 0; i < countries.length; i++) {
    const randomCountry = Math.floor(Math.random() * countries.length);
    newCountries.push(countries[randomCountry]);
}
console.log(newCountries);

// Exercises 5
const letterLengths = [];
for (let i = 0; i < countries.length; i++) {
    const letterLength = countries[i].length;
    letterLengths.push(letterLength);
}
console.log('Country letter length: ', letterLengths);

// Exercises 6
// Exercises 7
const countryLand = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('LAND')) {
        countryLand.push(countries[i]);
    }
}
console.log(countryLand);

// Exercises 8
const iaCountry = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('IA')) {
        iaCountry.push(countries[i]);
    }
}
console.log(iaCountry);

// Exercises 9
let mostLength = '';
for (let i = 0; i < countries.length; i++) {
    const countriesLength = countries[i];
    if (countriesLength.length > mostLength.length) {
        mostLength = countriesLength;
    }
}
console.log(mostLength);

// Exercises 10
const letterCountry = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 5) {
        letterCountry.push(countries[i]);
    }
}
console.log(letterCountry);