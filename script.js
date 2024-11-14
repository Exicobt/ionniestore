const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

const indicators = document.querySelectorAll('.carousel-indicators div');
const inner = document.querySelector('.carousel-inner');
let currentIndex = 0;

function moveSlide() {
    indicators[currentIndex].classList.remove('active');
    currentIndex++
    if(currentIndex >= indicators.length) {
        currentIndex = 0
    }
    indicators[currentIndex].classList.add('active');
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
    moveSlide()
}, 10000);

function moveBtn() {
    prev.addEventListener('click',() => {
        indicators[currentIndex].classList.remove('active')
        currentIndex--
        if(currentIndex < 0) {
            currentIndex = indicators.length-1
        }
        indicators[currentIndex].classList.add('active')
        inner.style.transform = `translateX(-${currentIndex * 100}%)`
    })

    next.addEventListener('click',() => {
        moveSlide()
    })
}

moveBtn()

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        indicators[currentIndex].classList.add('active');
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});