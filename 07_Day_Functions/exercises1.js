// Exercises 1
function fullName() {
    console.log('Büşra Çoğul');
}
fullName();

// Exercises 2
function fullName2(parm1, parm2) {
    console.log(parm1, parm2);
}
fullName2("Büşra", "Çoğul");

// Exercises 3
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers('Sum: ', 5, 6));

// Exercises 4
function areOfRectangle(lengthRec, widthRec) {
    areaRec = lengthRec * widthRec;
    return areaRec;
}
console.log('Area: ', areOfRectangle(5, 12));

// Exercises 5
function perimeterOfRectangle(lengthRec, widthRec) {
    perimeterRec = parseInt(2 * (lengthRec + widthRec));
    return perimeterRec;
}
console.log('Perimeter: ', perimeterOfRectangle(6, 15));

// Exercises 6
function volumeOfRectPrism(lengthRec, widthRec, heightRec) {
    volumeRec = lengthRec * widthRec * heightRec;
    return volumeRec;
}
console.log('Volume: ', volumeOfRectPrism(2, 4, 6));

// Exercises 7
function areaOfCircle(radius) {
    const PI = 3;
    areaCirc = PI * radius * radius;
    return areaCirc;
}
console.log('Circle area: ', areaOfCircle(4));

// Exercises 8
function circumOfCircle(radius) {
    const pi = 3;
    circumCirc = 2 * pi * radius;
    return circumCirc;
}
console.log('Circle circum: ', circumOfCircle(5));

// Exercises 9
function densityCalculate(mass, volume) {
    density = mass / volume;
    return density;
}
console.log('Density: ', densityCalculate(20, 40));

// Exercises 10
function speedCalculate(distance, time) {
    speed = distance / time;
    return speed;
}
console.log('Speed: ', speedCalculate(50, 9));

// Exercises 11
function itemWeight() {
    const GRAVITY = 10;
    mass = 50;
    weight = mass * GRAVITY;
    return weight;
}
console.log('Gravity:' + itemWeight());

// Exercises 12
function convertCelsiusToFahrenheit() {
    degree = 50;
    convertFah = (degree * 9 / 5) + 32;
    return convertFah;
}
console.log('Fahrenheit: ', convertCelsiusToFahrenheit());

// Exercises 13
function bodyMassIndex(weight, length) {

    bodyIndex = weight / (length ** 2);

    if (bodyIndex <= 18.5) {
        console.log('BMI: ' + bodyIndex + ' -> Under weight');
    }
    if (18.5 < bodyIndex && bodyIndex < 24.9) {
        console.log('BMI: ' + bodyIndex + ' -> Normal weight');
    }
    if (25 < bodyIndex && bodyIndex < 29.9) {
        console.log('BMI: ' + bodyIndex + ' -> Over weight');
    }
    if (bodyIndex > 30) {
        console.log('Obese');
    }

    return bodyIndex;
}
bodyMassIndex(90, 1.63);

// Exercises 14
function checkSeason(month) {
    if (month === 'September' || month === 'October' || month === 'November') {
        console.log('Season: Autumn');
    }
    if (month === 'December' || month === 'January' || month === 'February') {
        console.log('Season: Winter');
    }
    if (month === 'March' || month === 'April' || month === 'May') {
        console.log('Season: Spring');
    }
    if (month === 'June' || month === 'July' || month === 'August') {
        console.log('Season: Summer');
    }
}
checkSeason('July');

// Exercises 15
function findMax(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    }
    if (num2 > num1 && num2 > num3) {
        console.log(num2);
    }
    if (num3 > num1 && num3 > num2) {
        console.log(num3);
    }
}
findMax(0, -10, -2);