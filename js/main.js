// Global Variables
// Name Variables
var storedName = localStorage.getItem("storedName");
let labelSN = document.querySelector('.savedName');
let nameInput = document.querySelector('.nameInput');

// Goal Variables
var storedGoal = localStorage.getItem("storedGoal");
let goalInput = document.querySelector('.goalInput');
let goalBtn = document.querySelector('.changeGoal');
let span = document.querySelector('.goal');

// Quote Variables
var storedQuote = localStorage.getItem("storedQuote");
let spanQuote = document.querySelector('.quote');
let spanTxt = document.querySelector('.quoteInput');
let spanChange = document.querySelector('.removeQuote');


// Main Functions 
function saveName() {
    var Name = document.getElementById("name").value;
    localStorage.setItem("storedName", Name);
    document.getElementById("savedName").textContent = `Welcome ${Name}`;
    document.querySelector('.changeBtn').innerHTML = 'Change Name';
    window.location.reload();
}

function get() {
    localStorage.getItem("storedName");
    if (storedName === null) {
        document.getElementById("getName").innerHTML = '';
    }
    else {
        document.getElementById("getName").textContent = `Welcome ${storedName}! What is Your Goal Today?`;
        labelSN.style.display = 'none';
        nameInput.style.display = 'none';
        goalInput.style.display = 'initial';
        goalBtn.style.display = 'initial';
        document.querySelector('.changeBtn').style.display = 'none';
        document.querySelector('.removeBtn').style.display = 'none';
        document.querySelector('.changeName').style.display = 'initial';
        spanQuote.style.display = 'initial';

        getGoal();

        getQuote();
    }
}

// Goal Functions
function saveGoal() {
    let Goal = document.forms["nForm"]["mGoal"].value;
    if (Goal == null || Goal == "") {
        console.log('Type your goal');
    }
    else {
        localStorage.setItem("storedGoal", Goal);
        console.log(Goal);
        window.location.reload();
    }
}

function getGoal() {
    localStorage.getItem("storedGoal");
    if (storedGoal == null) {
        console.log('No Goal');
    }
    else {
        span.style.display = 'initial';
        document.getElementById("goal").textContent = `↪ ${storedGoal}`;
        goalInput.style.display = 'none';
        goalBtn.style.display = 'none';
        document.querySelector('.changeBtn').style.display = 'none';
        document.querySelector('.removeBtn').style.display = 'none';
    }
}

function deleteName() {
    window.localStorage.removeItem("storedName");
    document.getElementById("getName").innerHTML = '';
    labelSN.style.display = 'initial';
    goalBtn.style.display = 'none';
    document.querySelector('.changeBtn').innerHTML = 'Input Name';
    window.location.reload();
}

function delGoal() {
    window.localStorage.removeItem("storedGoal");
    window.location.reload();
}

function start() {
    get();
    initClock();
}

function logOut() {
    saveName();
}

function changeName() {
    deleteName();
}

function setQuote() {
    spanTxt.style.display = 'initial';
    let Quote = document.forms["Form"]["quoteIpt"].value;
    if (Quote == null || Quote == "") {
        spanQuote.textContent = `Add Quote`;
        console.log('Type your quote below');
    }
    else {
        localStorage.setItem("storedQuote", Quote);
        console.log(Quote);
        window.location.reload();
    }
}

function getQuote() {
    localStorage.getItem("storedQuote");
    spanQuote.textContent = `${storedQuote}`;
    console.log(spanQuote);
    if (spanQuote.textContent == "null") {
        spanQuote.textContent = `Add Quote`;
    }
}
