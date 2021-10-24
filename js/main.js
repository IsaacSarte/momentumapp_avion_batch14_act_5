// Global Variables
var storedName = localStorage.getItem("storedName");
let labelSN = document.querySelector('.savedName');
let nameInput = document.querySelector('.nameInput');

var storedGoal = localStorage.getItem("storedGoal");
let goalInput = document.querySelector('.goalInput');
let goalBtn = document.querySelector('.changeGoal');
let span = document.querySelector('.goal');

function saveName() {
    var Name = document.getElementById("name").value;
    localStorage.setItem("storedName", Name);
    document.getElementById("savedName").textContent = `Welcome ${Name}`;
    document.querySelector('.changeBtn').innerHTML = 'Change Name';
}

function get() {
    localStorage.getItem("storedName");
    if (storedName === null) {
        document.getElementById("getName").innerHTML = '';
    }
    else {
        document.getElementById("getName").textContent = `Welcome ${storedName}. What is Your Goal Today?`;
        labelSN.style.display = 'none';
        nameInput.style.display = 'none';
        goalInput.style.display = 'initial';
        goalBtn.style.display = 'initial';
        document.querySelector('.changeBtn').innerHTML = 'Change Name';

        getGoal();
    }
}

function saveGoal() {
    var Goal = document.getElementById("mainGoal").value;
    localStorage.setItem("storedGoal", Goal);
    console.log(Goal);
}

function getGoal() {
    localStorage.getItem("storedGoal");
    if (storedGoal === null) {
        alert('No Main Goal for Today👌');
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
    localStorage.clear();
    document.getElementById("getName").innerHTML = '';
    labelSN.style.display = 'initial';
    document.querySelector('.changeBtn').innerHTML = 'Input Name';
}

function delGoal() {
    window.localStorage.removeItem("storedGoal");
    window.location.reload();
}

function start() {
    get();
    initClock();
}