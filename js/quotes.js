let quotes = [
    'If you can dream it, you can do it',
    'Start where you are. Use what you have, Do what you can',
    'With the new day comes new strenght and new thoughts'
]

let quoteTxt = document.querySelector('.mainQuote');

setInterval(timerQuotes = () => {
    let bgQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(bgQuotes);

    quoteTxt.innerHTML = bgQuotes;
},30000);