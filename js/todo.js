// Const Values from the HTML Objects
const inputVal = document.querySelector(".toDoCtr input");
const addBtn = document.querySelector(".toDoCtr .tdBtn");
const todoList = document.querySelector(".toDoLists");

let openToDo = () => {
    toDoConts.style.top = '18.1vw';
    toDoCtr.style.display = 'initial';
    let elems = document.getElementsByClassName('todoList');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = 'flex';
    }
    document.querySelector('.clearTask').style.display = 'initial';
}

let closeToDo = () => {
    toDoCtr.style.display = 'none';
    toDoConts.style.top = '21vw';
    let elems = document.getElementsByClassName('todoList');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }
    document.querySelector('.clearTask').style.display = 'none';
}

// Main To Do List Function
addBtn.onclick = () => {
    let enteredToDo = inputVal.value;
    let storedToDo = localStorage.getItem('toDo');
    storedToDo == null ? (listTask = []) : (listTask = JSON.parse(storedToDo));
    listTask.push(enteredToDo);
    localStorage.setItem('toDo', JSON.stringify(listTask));
    showToDo();
}

// Showing To Do List Function
let showToDo = () => {
    let storedToDo = localStorage.getItem('toDo');
    storedToDo == null ? (listTask = []) : (listTask = JSON.parse(storedToDo));
    let newList = ''; // Creating new List
    listTask.forEach((data, index ) => { 
        newList += `
        <div class="todoList">
        <p class="pText">• ${data}</p>
        <button class="deleteTask" onClick="deleteItem(${index})">x</button>
        </div>
        `
    })

    todoList.innerHTML = newList;
    inputVal.value = "";
}

showToDo();

let deleteItem = (index) => {
    let storedToDo = localStorage.getItem('toDo');
    listTask = JSON.parse(storedToDo);
    listTask.splice(index, 1)
    localStorage.setItem('toDo', JSON.stringify(listTask));
    showToDo();
}

let clearTask = () => {
    let storedToDo = localStorage.getItem('toDo');
    storedToDo == null ? (listTask = []) : (listTask = JSON.parse(storedToDo), listTask = []);
    localStorage.setItem('toDo', JSON.stringify(listTask));
    showToDo();
}