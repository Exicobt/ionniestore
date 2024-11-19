export const data = fetch("./games.json")
    .then(res => res.json())
    .then(data => {
        const games = data.games;
        return games
    });
