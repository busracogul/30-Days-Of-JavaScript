let date = new Date();
let gun = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
let ay = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
let yil = date.getFullYear();
let dakika = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
let saat = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;

console.log(`${gun}-${ay}-${yil} ${saat}:${dakika}`);
