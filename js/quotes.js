let quotes = [
    'If you can dream it, you can do it',
    'Start where you are. Use what you have, Do what you can',
    'With the new day comes new strength and new thoughts'
]

let quoteTxt = document.querySelector('.mainQuote');

setInterval(timerQuotes = () => {
    let bgQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`Quote Generated: ${bgQuotes}`);

    quoteTxt.textContent = bgQuotes;
},30000);