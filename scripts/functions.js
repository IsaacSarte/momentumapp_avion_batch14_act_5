// localstorage for name
var storedName = localStorage.getItem("name");

// Name Functions
let saveName = () => {
    
    var name = document.forms["nameForm"]["nameTxt"].value;
    (name === null || name === "") ? alert('Please Input Your Name 😊') : (
        localStorage.setItem("name", name),
        document.querySelector('.nameLbl').classList.add("removeDP"),
        document.getElementById("savedName").textContent = `Welcome ${name}`
    )
    window.location.reload();
}

let getName = () => {
    localStorage.getItem("name");
    (storedName === null || storedName === "") ? `` : (
        document.querySelector('.nameLbl').classList.add("removeDP"),
        document.getElementById("savedName").textContent = `Welcome ${storedName} ! What is Your Main Focus Today?`,
        document.querySelector('.saveName').classList.add("removeDP"),
        document.querySelector('.changeName').classList.remove("removeDP"),
        document.querySelector('.saveFocus').classList.remove("removeDP"),

        // Change Input Text from Name to Focus
        document.forms["nameForm"]["nameTxt"].classList.add("removeDP"),
        document.forms["focusForm"]["focusTxt"].classList.remove("removeDP"),

        // Call getFocus function
        getFocus(),

        // Change Quote Function
        document.querySelector('.quoteHome').classList.add("removeDP"),
        document.querySelector('.quoteFocus').classList.remove("removeDP"),
        document.querySelector('.fa-chevron-circle-right').classList.add("removeDP"),

        // Call getQuote function
        getQuote(),

        // Show for To Do Page Container
        document.querySelector('.toDo').classList.remove("removeDP")
    )
}

let changeName = () => {
    window.localStorage.removeItem("name");
    window.location.reload();
}

// localstorage for focus
var storedFocus = localStorage.getItem("focus");

// Focus Function
let saveFocus = () => {
    var goal = document.forms["focusForm"]["focusTxt"].value;
    (goal === null || goal === "") ? alert('Please Input Your Main Focus😊') : (
        localStorage.setItem("focus", goal),
        window.location.reload()
    )
}

let getFocus = () => {
    localStorage.getItem("focus");
    (storedFocus === null || storedFocus === "") ? `` : (
        document.querySelector('.focusVal').classList.add("removeDP"),
        document.getElementById("savedFocus").textContent = `-> ${storedFocus}`,
        document.querySelector('.saveFocus').classList.add("hideDP")
    )
}

let delFocus = () => {
    window.localStorage.removeItem("focus");
    window.location.reload();
}
