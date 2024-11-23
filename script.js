import { data } from './js/data.js'

const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 10000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true
});

const allGames = document.querySelector(".card-all-games")
const mobileGames = document.querySelector(".card-mobile-games")
const pcGames = document.querySelector(".card-pc-games")

data.then(games => {
    games.forEach((e) => {
        const card = `
        <div class="${e.name.replace(" ", "").toLowerCase()} bg-white px-1 pt-[2px] rounded-lg flex flex-col items-center shadow-xl overflow-hidden cursor-pointer hover:scale-110 hover:border-4 hover:-translate-y-3 transition-all duration-300">
            <div class="overflow-hidden rounded-lg">
                <img class=" mb-1 w-full shadow-sm" src="${e.logo}"/>
            </div>
            <p class="text-black text-center pb-1 max-w-[80%] text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] xl:[1.3rem] leading-6">${e.name}</p>
        </div>
        `
        allGames.innerHTML += card

        if(e.platform === "mobile") {
            mobileGames.innerHTML += card
        }

        if(e.platform === "pc") {
            pcGames.innerHTML += card
        }
    });
});

  