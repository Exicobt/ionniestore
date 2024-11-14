export const data = fetch("../data.json")
    .then(res => res.json())
    .then(data => {
        const games = data.games;
        return games
    });
