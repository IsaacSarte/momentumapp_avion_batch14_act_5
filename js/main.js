var storedName = localStorage.getItem("storedName");
let labelSN = document.querySelector('.savedName');

function saveName() {
    var Name = document.getElementById("name").value;
    localStorage.setItem("storedName", Name);
    document.getElementById("savedName").textContent = `Welcome ${Name}`;
    document.querySelector('.changeBtn').innerHTML = 'Change Name';
}

function get() {
    localStorage.getItem("storedName");
    if(storedName === null) {
        document.getElementById("getName").innerHTML = '';
    }
    else {
        document.getElementById("getName").textContent = `Welcome ${storedName}. What is Your Goal Today?`;
        labelSN.style.display = 'none';
        document.querySelector('.changeBtn').innerHTML = 'Change Name';
    }
}

function deleteName() {
    localStorage.clear();
    document.getElementById("getName").innerHTML = '';
    labelSN.style.display = 'initial';
    document.querySelector('.changeBtn').innerHTML = 'Input Name';
}

function start() {
    get();
    initClock();
}