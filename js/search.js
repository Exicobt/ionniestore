import { search } from "../script";
console.log(search)

fetch("data.json")
.then(res => res.json())
.then(data => {
    const games = data.games
    games.forEach(e => {
        console.log(search == e)
    });
})

const searchResultField = document.querySelector(".search-result-field")
const result = document.createElement('div');
result.classList.add("w-full", "h-full", "bg-black")
searchResultField.appendChild(result)