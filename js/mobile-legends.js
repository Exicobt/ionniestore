import { data } from './data.js';

const desc = document.querySelector(".desc")
const dropDownIcon = document.querySelector(".drop-down-icon")
const dropDown = document.querySelector(".drop-down")

data.then(games => {
    desc.innerHTML = games[0].description
});

dropDown.addEventListener("click", ()=> {
    dropDownIcon.classList.toggle("rotate-180")
    desc.classList.toggle("!scale-y-1")
})
