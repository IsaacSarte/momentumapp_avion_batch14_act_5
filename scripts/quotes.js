// Home Page Quotes
let quotes = [
    'If you can dream it, you can do it',
    'Start where you are. Use what you have, Do what you can',
    'With the new day comes new strength and new thoughts'
]

let quoteTxt = document.querySelector('.quoteHome');
let nextQuote = document.querySelector('.fa-chevron-circle-right');
let bgQuotes = quotes[Math.floor(Math.random() * quotes.length)];

setInterval(timerQuotes = () => {
    console.log(`Quote Generated: ${bgQuotes}`);
    quoteTxt.textContent = bgQuotes;
},30000);

nextQuote.onclick = () => {
    quoteTxt.textContent = randomQuotes();
}

let randomQuotes = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Focus Page Quotes
// localstorage for quote
var storedQuote = localStorage.getItem("quote");

let saveQuote = () => {
    document.querySelector('.quoteVal').classList.remove("removeDP");
    var quote = document.forms["quoteForm"]["quoteTxt"].value;
    (quote === null || quote === "") ? `` : (
        localStorage.setItem("quote", quote),
        window.location.reload()
    )
}

let getQuote = () => {
    localStorage.getItem("goal");
    (storedQuote === null || storedQuote === "") ? `Add Quote` : (
        document.querySelector('.quoteFocus').textContent = `${storedQuote}`
    )
}



