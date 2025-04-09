// let userInput = document.querySelectorAll(".input")[0]
// let errorMsg = document.querySelectorAll(".error-msg")[0]
// let taskList = document.querySelectorAll(".task")[0]
// let noTaskMsg = document.querySelectorAll(".noTaskMsg")[0]


// function add() {
//     let userValue = userInput.value
//     if (userValue == "") {
//         errorMsg.innerHTML = "Please enter a value"
//         setTimeout(function () {
//             errorMsg.innerHTML = ""
//         }, 3000)
//         return
//     }

//     let task = `<li><input type="checkbox" class="checkbox" onclick="check(this)"/><span>${userValue}</span><button class="task-remove" onclick="remove(this)">Delete</button></li>`
//     taskList.innerHTML += task

//     userInput.value = ""

//     updateMsg()

// }

// function remove(btn){
//     btn.parentElement.remove();
//     updateMsg()
// }

// function updateMsg (){
//     if (taskList.children.length == 0) {
//         noTaskMsg.style.display = "block"
//     }
//     else {
//         noTaskMsg.style.display = "none"
//     }
// }


// function check(check){
//     if(check.checked){
//         check.nextElementSibling.style.textDecoration = "line-through";
//     }
//     else{
//         check.nextElementSibling.style.textDecoration = "none";
//     }
// }













//                                               2 logic





let todos = []
let newTodo = document.querySelectorAll(".input")[0]
let olEl = document.querySelectorAll(".taskList")[0]
let addBtn = document.querySelectorAll(".addBtn")[0]
let noTaskMsg = document.querySelectorAll(".noTaskMsg")[0]
let errorMsg = document.querySelectorAll(".error-msg")[0]


let editTodoIndex;
function updateTodos() {
    olEl.innerHTML = ""
    for (let i = 0; i < todos.length; i++) {
        olEl.innerHTML += `
        <li>
            <input type="checkbox" class="checkbox" onclick="check(this)"/>
            <span>${todos[i]}</span>
            <button class="task-remove" onclick="edit(${i})">Edit</button>
            <button class="task-remove" onclick="remove(${i})">Delete</button>
        </li>`
    }
    todos.length == 0 ? noTaskMsg.style.display = "block" : noTaskMsg.style.display = "none"
}

function add() {
    if (newTodo.value == "") {
        errorMsg.innerHTML = "Please enter a value"
        setTimeout(function () {
            errorMsg.innerHTML = ""
        }, 3000)
        return
    } else {
        errorMsg.innerHTML = ""
        todos.push(newTodo.value)
        newTodo.value = ""
        updateTodos()
    }
}

function remove(index) {
    todos.splice(index, 1)
    updateTodos()
}

function edit(editIndex) {
    newTodo.value = todos[editIndex]
    editTodoIndex = editIndex
    addBtn.innerHTML = "Save"
    addBtn.onclick = updateEdit

}
function updateEdit() {
    todos.splice(editTodoIndex, 1, newTodo.value)
    updateTodos()
    newTodo.value = ""
    addBtn.innerHTML = "Add Todo"
    addBtn.onclick = add
}


function check(check) {
    if (check.checked) {
        check.nextElementSibling.style.textDecoration = "line-through";
    }
    else {
        check.nextElementSibling.style.textDecoration = "none";
    }
}

function noTodoMSg() {

}