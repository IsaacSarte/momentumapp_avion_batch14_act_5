const inputVal = document.getElementsByClassName('inputVal')[0];
const addBtn = document.getElementsByClassName('tdBtn')[0];

function openToDo() {
    toDoConts.style.top = '18.1vw';
    toDoCtr.style.display = 'initial';
    document.querySelector('.todoList').style.display = 'flex';
    document.querySelector('.clearTask').style.display = 'initial';
}

function closeToDo() {
    toDoCtr.style.display = 'none';
    toDoConts.style.top = '21vw';
    document.querySelector('.todoList').style.display = 'none';
    document.querySelector('.clearTask').style.display = 'none';
}

// Main To Do List Function
addBtn.addEventListener('click', function() {
    if(inputVal.value.trim() != 0) {
        // Local Storage
        let storedToDo = JSON.parse(localStorage.getItem('toDo'))
        if (storedToDo === null) {
            taskList = []
        }
        else {
            taskList = storedToDo;
        }
        taskList.push(inputVal.value)
        localStorage.setItem('toDo', JSON.stringify(taskList));
    }
    showToDo()
})

// Showing To Do List Function
function showToDo() {
    let storedToDo = JSON.parse(localStorage.getItem('toDo'))
    if (storedToDo === null) {
        taskList = []
    }
    else {
        taskList = storedToDo;
    }
    let html = '';
    let itemShow = document.querySelector('.toDoLists');
    taskList.forEach((data, index ) => {
        
    
        html += `
        <div class="todoList">
        <p class="pText">• ${data}</p>
        <button class="deleteTask" onClick="deleteItem(${index})">x</button>
        </div>
        `
    })

    itemShow.innerHTML = html;
}
showToDo()

function deleteItem(index){
    let storedToDo = JSON.parse( localStorage.getItem('toDo'))
    taskList.splice(index, 1)
    localStorage.setItem('toDo', JSON.stringify(taskList));
    showToDo()
}

function clearTask(){
    localStorage.removeItem('toDo')
    window.location.reload();
    showToDo()
}


// Local Storage
/* let storedToDo = localStorage.getItem("toDo");
let toDoData = storedToDo ? JSON.parse(storedToDo) : [] */

// Button Event
/* addToDo.addEventListener('click', saveToDo)

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
            toDoData.splice(p);
            localStorage.setItem("toDo", JSON.stringify(toDoData));
        })
    }
} */

