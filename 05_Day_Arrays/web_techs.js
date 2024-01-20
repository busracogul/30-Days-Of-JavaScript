// Exercises 2.1
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// Exercises 2.5
let isThereWebTechs = webTechs.indexOf('Sass');
if (isThereWebTechs !== -1) {
    console.log('Saa is a CSS preprocess.');
}
else {
    webTechs.push('Sass');
    console.log(webTechs);
}