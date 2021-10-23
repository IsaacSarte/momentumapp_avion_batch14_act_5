let images = [
    "url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    "url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    "url('https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    "url('https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-ipad-163143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    "url('https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
]

let body = document.querySelector('body')

setInterval(timerFC = () => {
    let bg = images[Math.floor(Math.random() * images.length)]
    console.log(bg)

    body.style.background = bg
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    body.style.backgroundPosition = "center"
},60000);