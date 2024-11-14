const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const searchIcon = document.querySelector(".search-icon")
const searching = document.querySelector("input")

function searchActive() {
    searchInput.classList.add("active")
    searchIcon.classList.add("active")
    searchBtn.classList.add("active")
    document.querySelector("header").classList.add('mb-10', 'xl:mb-0')
    document.querySelector(".search-input input").focus()
}

function searchDeactive() {
    searchInput.classList.remove("active")
    searchIcon.classList.remove("active")
    searchBtn.classList.remove("active")
    searchBtn.classList.remove("xl:bg-white")
    document.querySelector("header").classList.remove('mb-10', 'xl:mb-0')
    searching.value = ""
}

searchBtn.addEventListener("click", (e)=> {
    e.stopPropagation()
    searchActive()

    if(searchInput.classList.contains("active")) {
        searchBtn.classList.add("xl:bg-white")
    }
})

document.addEventListener("click", (e) => {
    if(searchBtn.classList.contains("active") && e.target !== searchBtn) {
        searchDeactive()
    }
})

const indicators = document.querySelectorAll('.carousel-indicators div');
const inner = document.querySelector('.carousel-inner');
let currentIndex = 0;

function moveSlide() {
    
}

setInterval(() => {
    indicators[currentIndex].classList.remove('active');
    currentIndex++
    if(currentIndex >= indicators.length) {
        currentIndex = 0
    }
    indicators[currentIndex].classList.add('active');
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        indicators[currentIndex].classList.add('active');
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});


const resultField = document.querySelector(".search-result-field")
const result = document.querySelector('.field-2')

function searchGame(games) {

    searching.addEventListener('input', (e) => {
        const query = e.target.value.split(" ").join("").toLowerCase();

        if(query !== "") {
            resultField.classList.remove("hidden")
            result.innerHTML = ""

            const filteredGames = games.filter(item => item.name.split(" ").join("").toLowerCase().includes(query));

            if (filteredGames.length > 0) {
                filteredGames.forEach(item => {
                    console.log(item)
                    const results = document.createElement('div')
                    results.classList.add('overflow-hidden', 'flex', 'items-center', 'px-5', 'my-3', 'py-1', 'hover:bg-[#00000038]', 'cursor-pointer', 'transition-all', 'duration-100')

                    results.innerHTML = `
                        <img src=${item.logo} alt="Mobile Legends" width="50" class="rounded-lg">
                        <p class="text-black ml-5 font-medium">${item.name}</p>
                    `;

                    result.appendChild(results)
                    
                });
            } else {
                result.innerHTML = `<p class="text-black ml-5 font-medium p-1 my-3 text-sm">Hasil pencarian tidak ditemukan</p>`
            }
                    
            document.addEventListener('keydown', (keys) => {
                if (keys.key === 'Enter') {
                    searchDeactive()
                    result.innerHTML = ""
                }
            },{once: true}); 
        } else {
            resultField.classList.add("hidden")
            result.innerHTML = ""
        }
    });
    searching.addEventListener('blur', () => {
        resultField.classList.add("hidden");
    });
}

