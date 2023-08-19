const summonButton = document.getElementById('summon-button');
const resultDiv = document.getElementById('result');

const characters = [
    { rarity: 'Tingyun', odds: 5.1, avatar: 'images/sampo.png' },
    { rarity: 'Sampo', odds: 5.1, avatar: 'images/serval.png' },
    { rarity: 'Serval', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Luka', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Light cone', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Natasha', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Pela', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Arlan', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Yukong', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Sushang', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Hook', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Danheng', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Asta', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'March 7th', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Qingque', odds: 5.1, avatar: 'images/Tingyun.png' },
    { rarity: 'Bronya', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Seele', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Welt', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Himeko', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Gepard', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Clara', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Bailu', odds: 0.6, avatar: 'images/bronya.png' },
    { rarity: 'Yangqing', odds: 0.6, avatar: 'images/bronya.png' },
];

summonButton.addEventListener('click', () => {
    resultDiv.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.random() * 100;
        let accumulatedOdds = 0;

        for (const character of characters) {
            accumulatedOdds += character.odds;

            if (randomNumber <= accumulatedOdds) {
                resultDiv.innerHTML += `<p>You summoned a ${character.rarity} </p>`;
                resultDiv.innerHTML += `<img src="${character.avatar}" alt="${character.rarity} Avatar">`;
                break;
            }
        }
    }
});