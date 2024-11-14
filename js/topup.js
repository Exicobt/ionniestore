const allGames = document.querySelector(".card-all-games")
const mobileGames = document.querySelector(".card-mobile-games")
const pcGames = document.querySelector(".card-pc-games")

fetch("data.json")
.then(res => res.json())
.then(data => {
    const games = data.games
    games.forEach((e) => {
        const card = `
        <div class="${e.name.replace(" ", "").toLowerCase()} bg-orange-400 px-1 pt-[2px] rounded-lg flex flex-col items-center overflow-hidden">
           <img class="rounded-lg mb-1 w-[180px] md:w-[170px] lg:w-[180px] xl:w-[200px]" src="${e.logo}"/>
           <p class="text-white text-center pb-1 max-w-[80%] text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] xl:[1.3rem] leading-6">${e.name}</p>
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
    searchGame(games)
})