let listTxt = document.getElementById("toDoField");
let addToDo = document.getElementById("toDoBtn");

function openToDo() {
    toDoConts.style.top = '18.1vw';
    toDoCtr.style.display = 'initial';
}

function closeToDo() {
    toDoCtr.style.display = 'none';
    toDoConts.style.top = '21vw';
}

// Local Storage
let storedToDo = localStorage.getItem("toDo");
let toDoData = storedToDo ? JSON.parse(storedToDo) : []

// Button Event
addToDo.addEventListener('click', saveToDo)

function saveToDo() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('p-styling');
    paragraph.textContent = "• " + listTxt.value;
    toDoCtr.appendChild(paragraph);
    listTxt.value = "";

    console.log(paragraph.textContent);
    toDoData.push(paragraph.textContent);
    localStorage.setItem("toDo", JSON.stringify(toDoData));
}

function getToDo() {
    for (let i = 0; i < toDoData.length; i++) {
        console.log(toDoData[i]);
        let p = document.createElement('p');
        p.classList.add('p-styling');
        p.textContent = toDoData[i];
        toDoCtr.appendChild(p);
        console.log(JSON.stringify(toDoData));

        p.addEventListener('click', function(){
            p.style.textDecoration = "line-through";
        })

        p.addEventListener('dblclick', function(){
            toDoCtr.removeChild(p);
            
        })
    }
}

