"use strict"
//variables====================
let siteName = '🏳Uz0media🏳';
let siteCookie = '🍪';
//intro=======================
let intro1 = alert(`${siteName} saytiga hush kelibsiz bu saytda siz o'zigizga yoqqan kinolarni qidirishingiz va tomosha qilgan kinolaringiz haqida suhbatlashishingiz mumkin`);
let intro2 = prompt(`${siteCookie} I accept all cookies (ha,yoq)`, '');
if (intro2 === 'ha') {
alert(`Saytimizga Hush Kelibsiz hurmat bilan ${siteName} site`);
}else if(intro2 === 'yoq') {
    alert(`Shartlarga rozi bo'lmasangiz hayr`);
}else {
alert(`NImadir haTo KeTIBDi??`);
};

//main
let moviesNumber = +prompt(`Bizga ${siteName}da nechta kino ko'rganingizni ayting???`);
const moviesDB = [];

if (moviesNumber !== null && moviesNumber > 0) {
    for(let i = 0; i < moviesNumber; i++) {
        const movieName = prompt(`${i+1}-ko'rgan kinogizni nomi:`, '');
        // moviesDB.push(movieName);
        let movieBall = +prompt(`${i+1}-ko'rgan kinongizni 5-ballik sistemada baholang`);
        if(!isNaN(movieBall) && movieBall >= 0 && movieBall <= 5) {
    if(movieBall === 5) {
      console.log(`${i+1}-kino nomi ${movieName} va shu ko'rgan kinoga bergan ballingiz ${movieBall}. Bu kino yaxshi bo'lsa kerak`);
    }else if(movieBall >= 3 && movieBall <= 4) {
      console.log(`${i+1}-kino nomi ${movieName} va shu ko'rgan kinoga bergan ballingiz ${movieBall}. Bu kino o'rtacha kinolar sarasiga kirsa kera`);
    }else if(movieBall >= 0 && movieBall <= 2){
      console.log(`${i+1}-kino nomi ${movieName} va shu ko'rgan kinoga bergan ballingiz ${movieBall}. Bu kino umuman yomonga o'xshayabdi`);
    }
    }else {
       alert(`Siz ${siteName}da hatolikga yo'l qo'ydingiz iltimos ballni to'g'ri kiriting??, Iltimos oramizdagi hurmatni saqlagan holda ballarni raqam bilan kiriting va 0-5 oralig'ida baholang`);
       i--;
    }
    }
}else {
alert(`Siz ${siteName}da hatolikga yo'l qo'ydingiz, Iltimos bosh joyni to'ldiring yoki yozuvdagi hatolarni to'g'irlang`)
}




asda
// const allMovies = prompt(`Bizga ${siteName}da ko'rgan kinolaringizni kiriting ketma ketlikda`).split(',');
// const allMoviesBall = +prompt("kiritgan kinolaringizga ball bering, ketma-ketligi bir hilda bo'lsin").split(',');
// console.log(allMoviesBall);

// if(allMovies.length === allMoviesBall.length) {
//     for(let i = 0; i < allMovies.length; i++) {
//         console.log(`ko'rgan kino nomi ${allMovies[i]} unga berilgan ball ${allMoviesBall[i]}`);
//         if(allMoviesBall[i] === 5) {
//             console.log(`Zo'r`)
//         }else if(allMoviesBall[i] === 4) {
//             console.log(`yaxshi bo'ladi`)
//         }else if(allMoviesBall[i] === 3) {
//             console.log(`yaxshi bo'lmagan kino ekan`)
//         }else {
//             console.log(`Siz ${siteName}da hatolikga yo'l qo'ydingiz`)
//         }
//     };
// }else {
//     console.log(`Siz ${siteName}da hatolikga yo'l qo'ydingiz,hatolaringizni ko'rib chiqing`)
// };

