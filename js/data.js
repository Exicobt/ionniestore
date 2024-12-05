export const data = fetch("../json/games.json")
    .then(res => res.json())
    .then(data => {
        const games = data.games;
        return games
});
