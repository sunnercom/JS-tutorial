/Berilgan a soni (baho)/
let a = +prompt('ISTALGAN SON KIRITING', '1-5 gacha');

switch (a) {
    case 1:
        console.log("Yomon");
        break;
    case 2:
        console.log("Qoniqarsiz");
        break;
    case 3:
        console.log("Qoniqarli");
        break;
    case 4:
        console.log("Yaxshi");
        break;
    case 5:
        console.log("A'lo");
        break;
    default:
        console.log("Noto'g'ri raqam kiritilgan");
}


/Berilgan hafta kunlari soni (hafta kuni)/
let hKunlar = prompt('Hafta kunlari raqamlarini kiriting', '1-7 gacha');
let haftaKunlari;

switch (hKunlar) {
    case 1:
        haftaKunlari = "Dushanba";
        break;
    case 2:
        haftaKunlari = "Seshanba";
        break;
    case 3:
        haftaKunlari = "Chorshanba";
        break;
    case 4:
        haftaKunlari = "Payshanba";
        break;
    case 5:
        haftaKunlari = "Juma";
        break;
    case 6:
        haftaKunlari = "Shanba";
        break;
    case 7:
        haftaKunlari = "Yakshanba";
        break;
    default:
        haftaKunlari = "Noto'g'ri raqam kiritilgan";
}

console.log(`${hKunlar} raqamiga mos keluvchi hafta kuni: ${haftaKunlari}`);


/Berilgan a soni (telefon nomer kodi)/
let telephone = prompt('telefon raqami kodini kiriting');

let kompaniya;

switch (telephone) {
    case 99:
        kompaniya = "Uzmobile";
        break;
    case 93:
        kompaniya = "Beeline";
        break;
    case 94:
        kompaniya = "Ucell";
        break;
    case 5:
        kompaniya = "Perfectum Mobile";
        break;
    case 88:
        kompaniya = "UMS";
        break;
    default:
        kompaniya = "Noto'g'ri raqam kiritilgan";
}

console.log(`${telephone} raqamiga mos keluvchi kompaniya: ${kompaniya}`);


/ Berilgan a soni (oy raqami)/
const abc = prompt('oylarni iblish uchun raqam kirit?-_-');

if (abc >= 1 && abc <= 3) {
    console.log(`${abc}-oy fasli: Kuz`);
} else if (abc >= 4 && abc <= 6) {
    console.log(`${abc}-oy fasli: Bahor`);
} else if (a >= 7 && a <= 9) {
    console.log(`${abc}-oy fasli: Yoz`);
} else if (abc >= 10 && abc <= 12) {
    console.log(`${abc}-oy fasli: Qish`);
} else {
    console.log("Noto'g'ri raqam kiritilgan");
}

    /hisoblash amallari/
let aSon = +prompt('sonlarni birni yozing', '');
let bSon = +prompt('sonlarni ikkinchisini yozing', '');

let c = aSon + bSon;
console.log(`${aSon} + ${bSon} = ${c}`);


/* 1. Kolibri qushi bir daqiqada o'rtacha 240 marta
nafas olsa, 1sekundda necha marta nafas oladi?*/

let nafas1 = 240;
let minut = 60;

let nafasSoni1Sek = nafas1 / minut;
console.log(nafasSoni1Sek);

/*2. Sayohlar soatiga 65km tezlik bilan 2soat, keyin esa soatiga
 70km tezlik bilan yana 1soat yurishdi. Ular jami qancha masofa yurishgan?*/

const tezlik1 = 65;
const soat1 = 2;

const tezlik2 = 70;
const soat2 = 1;

const masofa = tezlik1 * soat1 + tezlik2 * soat2;
console.log(masofa);

/* 3. Sutchi ayol har birida 3litrdan 3banka sut sotdi, Agar
 1litr sut 5000 so'm bo'lsa, bankalardagi hamma sut qancha turadi?*/

 const litrNarx = 5000;
 const litrSoni = 3;
 const bankaSoni = 3;
 
 const jamiNarx = litrNarx * litrSoni * bankaSoni; // Bankalardagi hamma sut qancha turadi?
 console.log(jamiNarx);

/*4. Fermer umumiy massasi 1828kg ikkita bir hil sigi va to'rta bir 
hil buqa sotdi. Bitta sigirning massasi 286 kg bo'lsa 1ta buqaning massasi qancha?*/

const jamiMassa = 1828;
const sigirMassa = 286;

const buqaMassa = (jamiMassa / 2) / (sigirMassa / 1);
console.log(buqaMassa);


//son xususiyatlari

let abba = +prompt('son xususiyatini bilish uchun son kirit', '1,2,3,4,5,6,7,8,9');

if (abba % 2 === 0) {
    console.log("Juft");
} else {
    console.log("Toq");
}

if (abba > 0) {
    console.log("Musbat");
} else if (abba < 0) {
    console.log("Manfiy");
} else {
    console.log("Nol");
}

//sonalrni taqqoslash

let ab = +prompt('taqqoslashga son yozing', 'a=son qiymati');
let ba = +prompt('taqqoslashga son yozing', 'b=son qiymati');
let cb = +prompt('taqqoslashga son yozing', 'c=son qiymati');

if (ab > ba && ab > cb) {
    console.log(`${ab} eng katta`);
} else if (ba > ab && ba > cb) {
    console.log(`${ba} eng katta`);
} else {
    console.log(`${cb} eng katta`);
}


//ismlarni uzunligi

const ismlar = ["Ali", "Vali", "Hasan", "Husan", "Olim", "Dilshod"];

if () {


}
