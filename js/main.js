var storedName = localStorage.getItem("storedName");

function saveName() {
    var Name = document.getElementById("name").value;
    localStorage.setItem("storedName", Name);
    document.getElementById("savedName").textContent = `Welcome ${Name}`;
    // window.location.reload();
    document.querySelector('.changeBtn').innerHTML = 'Change Name';
}

function get() {
    localStorage.getItem("storedName");
    if(storedName === null) {
        document.getElementById("getName").innerHTML = '';
    }
    else {
        document.getElementById("getName").textContent = `Welcome ${storedName}. What is Your Plan Today?`;
        document.querySelector('.changeBtn').innerHTML = 'Change Name';
    }
}

function deleteName() {
    localStorage.clear();
    document.getElementById("getName").innerHTML = '';
    document.querySelector('.changeBtn').innerHTML = 'Input Name';
}