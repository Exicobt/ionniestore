const promoContainer = document.querySelector('.promo-container')

const games = ['mobile legends', 'honor of kings', 'valorant', 'call of duty mobile', 'PUBG mobile', 'free fire']
for (let i = 1; i <= 6; i++) {
    const promo = `
        <a href='${games[i-1].replaceAll(" ", "-")}.html' class='rounded-lg bg-[#26588e] overflow-hidden pb-5 w-full cursor-pointer shadow-xl shadow-[#2eb2ff]'>
            <img src='../img/banner-promo/${i}.jpg'>
            <h3 class='mx-5 mt-2 text-white'>Dapatkan promo topup ${games[i-1]} hanya di ionniestore.id</h3>
        </a>
    `
    promoContainer.innerHTML += promo
}