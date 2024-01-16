// Exercises 1
let monthUserInput = prompt("Enter a month:");
let month = monthUserInput.toLowerCase();

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    console.log(`Enter a month: ${monthUserInput}`);
    console.log(month.charAt(0).toUpperCase() + month.substr(1) + " has 30 day")
}
else if (month === "april" || month === "june" || month === "september" || month === "november") {
    console.log(`Enter a month: ${monthUserInput}`);
    console.log(month.charAt(0).toUpperCase() + month.substr(1) + " has 31 day")
}
else if (month === "february") {
    console.log(`Enter a month: ${monthUserInput}`);
    console.log(month.charAt(0).toUpperCase() + month.substr(1) + " has 28 day");
}
else {
    console.log("Enter again");
}