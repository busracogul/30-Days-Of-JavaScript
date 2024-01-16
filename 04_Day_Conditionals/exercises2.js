// Exercises 1
let score = prompt("Enter a score:");
if (score >= 80 && score <= 100) {
    console.log("A");
}
else if (score >= 70 && score <= 79) {
    console.log("B");
}
else if (score >= 60 && score <= 69) {
    console.log("C");
}
else if (score >= 50 && score <= 59) {
    console.log("D");
}
else if (score = 0 && score <= 49) {
    console.log("F");
}
else {
    console.log("Enter the number again.");
}

// Exercises 2 
let monthUserInput = prompt("What are the months?");
let month = monthUserInput.toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    console.log("Autumn");
}
else if (month === "december" || month === "january" || month === "february") {
    console.log("Winter");
}
else if (month === "march" || month === "april" || month === "may") {
    console.log("Spring");
}
else if (month === "june" || month === "july" || month === "august") {
    console.log("summer");
}
else {
    console.log("Enter again");
}

// Exercises 3

let dayUserInput = prompt("What is the day today?");
let day = dayUserInput.toLowerCase();
console.log(`What is the day today ? ${day}`);

switch (day) {
    case 'monday':
        console.log(`${day} is a working day.`);
        break;
    case 'tuesday':
        console.log(`${day} is a working day.`);
        break;
    case 'wednesday':
        console.log(`${day} is a working day`);
        break;
    case 'thursday':
        console.log(`${day} is a working day.`);
        break;
    case 'friday':
        console.log(`${day} is a working day.`);
        break;
    case 'saturday':
        console.log(`${day} is a weekend`);
        break;
    case 'sunday':
        console.log(`${day} is a weekend`);
        break;
}    