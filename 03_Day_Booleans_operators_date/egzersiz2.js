//Egzersiz 1
let ucgenTaban = prompt('Taban değeri giriniz: ');
let ucgenYukseklik = prompt('Yükseklik değerini giriniz: ');
let ucgenAlan = 1 / 2 * (ucgenTaban * ucgenYukseklik);
console.log(`Taban: ${ucgenTaban}`);
console.log(`Yükseklik: ${ucgenYukseklik}`);
console.log(`Üçgenin alanı ${ucgenAlan}`);

//Egzersiz 2
let ucgenKenar1 = parseInt(prompt('a kenarını giriniz: '));
let ucgenKenar2 = parseInt(prompt('b kenarını giriniz: '));
let ucgenKenar3 = parseInt(prompt('c kenarını giriniz: '));
let ucgenCevre = ucgenKenar1 + ucgenKenar2 + ucgenKenar3;
console.log(`A kenar uzunluğu: ${ucgenKenar1}`);
console.log(`B kenar uzunluğu: ${ucgenKenar2}`);
console.log(`C kenar uzunluğu: ${ucgenKenar3}`);
console.log(`Üçgenin çevresi ${ucgenCevre}`);

//Egzersiz 3
let dikdortgenUzunluk = parseInt(prompt('Kenar uzunluğunu giriniz: '));
let dikdortgenGenislik = parseInt(prompt('Dikdörtgen genişliğini giriniz: '));
let dikdortgenAlan = dikdortgenUzunluk * dikdortgenGenislik;
let dikdortgenCevre = 2 * (dikdortgenUzunluk + dikdortgenGenislik);
console.log(`Dikdörtgenin alanı: ${dikdortgenAlan}`);
console.log(`Dikdörtgenin çevresi: ${dikdortgenCevre}`);

//Egzersiz 4
let r = parseInt(prompt('Dairenin yarıçapını giriniz: '));
const pi = 3.14;
let daireAlan = pi * r * r;
let daireCevre = 2 * pi * r;
console.log(`Dairenin alanı: ${daireAlan}`);
console.log(`Dairenin çevresi: ${daireCevre}`);

//Egzersiz 5
let egim1 = 2;
let xKesme = 1;
let yKesme = -2;
console.log(`eğim: ${egim1}, x kesme noktası: ${xKesme}, y kesme noktası: ${yKesme}`);

//Egzersiz 6
let x1 = 2, x2 = 6;
let y1 = 2, y2 = 10;
let egimHesapla = (y2 - y1) / (x2 - x1);
console.log(`İki nokta arasındaki eğim: ${egimHesapla}`);

//Egzersiz 7
let sonuc = egim1 = egimHesapla ? 'eğimler birbirine eşit' : 'eğimler eşit değildir';
console.log(sonuc);

//Egzersiz 8
let x = 2;
let y = x * x + 6 * x + 9;
console.log(y);

//Egzersiz 9
let calismaSaati = parseInt(prompt('Çalıştığınız saati giriniz: '));
let oran = parseInt(prompt('Saat başına oranı giriniz: '));
let hesapla = parseInt(calismaSaati * oran);
console.log(`çalışma saati: ${calismaSaati}`);
console.log(`çalışma saati oranı: ${oran}`);
console.log(`Toplam ücret: ${hesapla}`);

//Egzersiz 10
let ad = "Büşra";
let adUzunlugu = ad.length;
let sonuc1 = adUzunlugu > 7 ? 'adınız uzun' : 'adınız kısa';
console.log(sonuc1);

//Egzersiz 11
let isim = "Büşra1";
let soyisim = "Çoğul";
let yazi = isim.length > soyisim.length ? `isminiz ${isim}, soyadınız ${soyisim}'dan daha büyüktür.` : `soyisminiz ${soyisim}, isminiz ${isim}'den daha büyüktür.`;
console.log(yazi);

//Egzersiz 12
let benimyYasim = 250;
let seninYasin = 25;
let yas = benimyYasim - seninYasin;
console.log(`ben senden ${yas} yaş büyüğüm.`);

//Egzersiz 13
let dogumYil = parseInt(prompt('Doğum yılınız nedir '));
let yasi = new Date().getFullYear() - dogumYil;
let mesaj = (yasi > 18) ? `Yaşınız ${yasi}. Araba kullanabilirsin` : `Yaşın ${yasi}. ${18 - yasi} yıl sonra araba kullanabilirsin`;
console.log(mesaj);

//Egzersiz 14
let yillar = parseInt(prompt('yıl sayısı giriniz: '));
let saniye = parseInt(yillar * 365 * 24 * 60 * 60);
console.log(`sen ${saniye} saniye yaşadın`);

//Egzersiz 15
let date = new Date();
let gun = date.getDate();
let ay = date.getMonth() + 1;
let yil = date.getFullYear();
let saat = date.getHours();
let dakika = date.getMinutes();

console.log(`${yil}-${ay}-${gun} ${saat}:${dakika}`);
console.log(`${gun}-${ay}-${yil} ${saat}:${dakika}`);
console.log(`${gun}/${ay}/${yil} ${saat}:${dakika}`);

