const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const searchIcon = document.querySelector(".search-icon")
const searching = document.querySelector("input")

function searchActive() {
    searchInput.classList.add("active")
    searchIcon.classList.add("active")
    searchBtn.classList.add("active")
    document.querySelector("header").classList.add('mb-10', 'xl:mb-0')
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
const result = document.querySelector(".search-result-field div")


function searchGame(games) {

    let search = ''
    searching.addEventListener('input', (e) => {
        const query = e.target.value.split(" ").join("").toLowerCase();
        
        document.addEventListener('keydown', (keys) => {
            if (keys.key === 'Enter') {
                search = query

                searchDeactive()
                resultField.classList.remove("hidden")
                
                document.querySelectorAll('section').forEach(e => e.style.display = "none")

                const filteredGames = games.filter(item => item.name.split(" ").join("").toLowerCase() === search);

                if (filteredGames.length > 0) {
                filteredGames.forEach(item => {
                    result.innerHTML = `
                    <div class="bg-orange-400 px-1 pt-[2px] rounded-lg flex flex-col items-center overflow-hidden">
                        <img class="rounded-lg mb-1 w-[180px] md:w-[170px] lg:w-[180px] xl:w-[200px]" src="${item.logo}" />
                        <p class="text-white text-center pb-1 max-w-[80%] text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] xl:[1.3rem] leading-6">${item.name}</p>
                    </div>
                    `;
                });
                } else {
                result.innerHTML = `Hasil pencarian \"${search}\" tidak ditemukan`
                }
                
            }
        }, { once: true }); 
    });
}

