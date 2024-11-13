const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const searchIcon = document.querySelector(".search-icon")
const searching = document.querySelector("input")
const searchResultField = document.querySelector(".search-result-field")

searchBtn.addEventListener("click", (e)=> {
    e.stopPropagation()
    searchInput.classList.add("active")
    searchIcon.classList.add("active")
    searchBtn.classList.add("active")
    searchInput.focus()

    if(searchInput.classList.contains("active")) {
        searchBtn.classList.add("xl:bg-white")
    }
})

document.addEventListener("click", (e) => {
    if(searchBtn.classList.contains("active") && e.target !== searchBtn) {
        searchInput.classList.remove("active")
        searchIcon.classList.remove("active")
        searchBtn.classList.remove("active")
        searchBtn.classList.remove("xl:bg-white")
        searching.value = ""
    }
})

const indicators = document.querySelectorAll('.carousel-indicators div');
const inner = document.querySelector('.carousel-inner');
let currentIndex = 0;

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


function searchGame() {
    let search = ''
    searching.addEventListener('input', (e) => {
        const query = e.target.value;
        
        document.addEventListener('keydown', (keys) => {
            if (keys.key === 'Enter') {
                search = query.toLowerCase().replace(" ", "")

                searchInput.classList.remove("active")
                searchIcon.classList.remove("active")
                searchBtn.classList.remove("active")
                searchBtn.classList.remove("xl:bg-white")
                searching.value = ""

                const result = document.createElement('div');
                result.classList.add("w-full", "h-full", "bg-black")
                document.body.appendChild(result)
            }
        }, { once: true }); 
    });
}


searchGame()