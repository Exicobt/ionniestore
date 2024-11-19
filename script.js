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
});

const allGames = document.querySelector(".card-all-games")
const mobileGames = document.querySelector(".card-mobile-games")
const pcGames = document.querySelector(".card-pc-games")

data.then(games => {
    games.forEach((e) => {
        const card = `
        <div class="${e.name.replace(" ", "").toLowerCase()} bg-white px-1 pt-[2px] rounded-lg flex flex-col items-center shadow-xl overflow-hidden cursor-pointer">
            <div class="overflow-hidden rounded-lg">
                <img class=" mb-1 w-[180px] md:w-[170px] lg:w-[180px] xl:w-[200px] shadow-sm hover:scale-150 transition-transform duration-300" src="${e.logo}"/>
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

  