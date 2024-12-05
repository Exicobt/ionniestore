import { data } from './data.js'

const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const searchIcon = document.querySelector(".search-icon")
const searching = document.querySelector(".search-input input")
const resultField = document.querySelector(".search-result-field")
const result = document.querySelector('.field-2')
const hamburgerBtn = document.querySelector('.hamburger-btn')
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')

function searchActive() {
    searchInput.classList.add("active")
    searchIcon.classList.add("active")
    searchBtn.classList.add("active")
    document.querySelector("header").classList.add('mb-10', 'xl:mb-0')
    searching.focus()
}

function searchDeactive() {
    searchInput.classList.remove("active")
    searchIcon.classList.remove("active")
    searchBtn.classList.remove("active")
    searchBtn.classList.remove("xl:bg-[#1e456f]")
    document.querySelector("header").classList.remove('mb-10', 'xl:mb-0')
    searching.value = ""
    result.innerHTML = ""
}

searchBtn.addEventListener("click", (e)=> {
    e.stopPropagation()
    searchActive()

    if(searchInput.classList.contains("active")) {
        searchBtn.classList.add("xl:bg-[#1e456f")
    }
})

document.addEventListener("click", (e) => {
    if(searchBtn.classList.contains("active") && e.target !== searchBtn) {
        searchDeactive()
    }
})

function searchGame() {

    data.games.forEach(game => {
    
        searching.addEventListener('input', (e) => {
            const query = e.target.value.split(" ").join("").toLowerCase();

            if(query !== "") {
                resultField.classList.remove("hidden")
                result.innerHTML = ""

                const filteredGames = data.games.filter(item => item.name.split(" ").join("").toLowerCase().includes(query));

                if (filteredGames.length > 0) {
                    filteredGames.forEach(item => {
                        const results = document.createElement('a')
                        results.setAttribute('href', `../html/${item.name.replaceAll(' ', '-').toLowerCase()}.html`)
                        results.classList.add('overflow-hidden', 'flex', 'items-center', 'px-5', 'my-3', 'py-1', 'hover:bg-[#00000038]', 'cursor-pointer', 'transition-all', 'duration-100')

                        results.innerHTML = `
                            <img src=${item.logo} alt=${item.name} width="50" class="rounded-lg">
                            <p class="text-white ml-5 font-medium">${item.name}</p>
                        `;

                        result.appendChild(results)
                        
                    });
                } else {
                    result.innerHTML = `<p class="text-white ml-5 font-medium p-1 my-3 text-sm">Hasil pencarian tidak ditemukan</p>`
                }
            } else {
                resultField.classList.add("hidden")
                result.innerHTML = ""
            }
        });
    });
}

searchGame()

hamburgerBtn.addEventListener('click', ()=> {
    menu.classList.add("!translate-x-0")
    overlay.classList.remove("hidden")
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        menu.classList.remove("!translate-x-0");
        overlay.classList.add("hidden")
    }
});
