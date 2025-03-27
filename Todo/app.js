let userInput = document.querySelectorAll(".input")[0]
let errorMsg = document.querySelectorAll(".error-msg")[0]
let taskList = document.querySelectorAll(".task")[0]
let noTaskMsg = document.querySelectorAll(".noTaskMsg")[0]


function add() {
    let userValue = userInput.value
    if (userValue == "") {
        errorMsg.innerHTML = "Please enter a value"
        setTimeout(function () {
            errorMsg.innerHTML = ""
        }, 3000)
        return
    }

    let task = `<li><input type="checkbox" class="checkbox" onclick="check(this)"/><span>${userValue}</span><button class="task-remove" onclick="remove(this)">Delete</button></li>`
    taskList.innerHTML += task

    userInput.value = ""

    updateMsg()

}

function remove(btn){
    btn.parentElement.remove();
    updateMsg()
}

function updateMsg (){
    if (taskList.children.length == 0) {
        noTaskMsg.style.display = "block"
    }
    else {
        noTaskMsg.style.display = "none"
    }
}


function check(check){
    if(check.checked){
        check.nextElementSibling.style.textDecoration = "line-through";
    }
    else{
        check.nextElementSibling.style.textDecoration = "none";
    }
}