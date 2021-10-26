const inputVal = document.getElementsByClassName('inputVal')[0];
const addBtn = document.getElementsByClassName('tdBtn')[0];

function openToDo() {
    toDoConts.style.top = '18.1vw';
    toDoCtr.style.display = 'initial';
    let elems = document.getElementsByClassName('todoList');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = 'flex';
    }
    document.querySelector('.clearTask').style.display = 'initial';
}

function closeToDo() {
    toDoCtr.style.display = 'none';
    toDoConts.style.top = '21vw';
    let elems = document.getElementsByClassName('todoList');
    for (let i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }
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