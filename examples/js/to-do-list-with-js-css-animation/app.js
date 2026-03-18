const task = document.getElementById("input-text")
const list = document.getElementById("list-task")
const warning = document.getElementById("container-warning")
let listTasks = []

function addTask() {
    if(task.value === ""){
        warning.style.display="block"
        return
       
    }
    listTasks.push(task.value)
    task.value=""
    saveTasks()
    displayTasks()
    warning.style.display="none"

}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(listTasks))
    
}

function displayTasks() {
    let html = ""
    for (let i = 0; i<listTasks.length; i++) {
        html += `<li class="item-list" >` + 
            ` <p> ${listTasks[i]} </p> <button onclick='removeTask(${i})'>x</button></li>`;
    }
    list.innerHTML=html
}

function loadTasks(){
    let saved = localStorage.getItem("tasks")
    if(saved !== null){
        listTasks= JSON.parse(saved)
    }
}

function removeTask(i){
    listTasks.splice(i,1)
    saveTasks()
    displayTasks()
}

function clearAll(){
    listTasks=[]
    saveTasks()
    displayTasks()
}
