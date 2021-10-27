let images = [
    "url('https://images.unsplash.com/photo-1542228846-2d791a09d7d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
    "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
    "url('https://images.unsplash.com/photo-1501471984908-815b996862f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80')",
    "url('https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
    "url('https://images.unsplash.com/photo-1631477076114-9123f721b9dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80')",
]

let body = document.querySelector('body')

setInterval(timerFC = () => {
    let bg = images[Math.floor(Math.random() * images.length)]
    console.log(`Photo Generated URL: ${bg}`);

    body.style.background = bg
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center"
},60000);