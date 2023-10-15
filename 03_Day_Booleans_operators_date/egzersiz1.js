//Egzersiz 1 
let firstName = "Büşra";
let lastName = "Çoğul";
let country = "Türkiye";
let city = 'Mersin';
let age = 22;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Egzersiz 2
console.log('10' == 10);

//Egzersiz 3
console.log(parseInt('9.8') == 10);

//Egzersiz 4
console.log(5 > 4);
console.log('Büşra'.length == 'Çoğul'.length);
console.log(22 != 10);

console.log(8 < 2);
console.log('Mersin'.length == 'Türkiye'.length);
console.log('Büşra' === 10);

//Egzersiz 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log('python'.length !== 'jargon'.length);

//Egzersiz 6
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.substring('on') && 'python'.substring('on')));

//Egzersiz 7
let date = new Date();
let yil = date.getFullYear();
console.log(yil);

let ay = date.getMonth() + 1;
console.log(ay);

let gun = date.getDay();
console.log(`${gun}/ ${ay}/ ${yil}`);

console.log(gun);

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());




