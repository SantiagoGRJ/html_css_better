const task = document.getElementById("input-text")
const list = document.getElementById("list-task")
let listTasks = []

function addTask() {
    if(task.value === ""){
        return
    }
    listTasks.push(task.value)
    task.value=""
    saveTasks()
    displayTasks()

}

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(listTasks))
    
}

function displayTasks() {
    let html = ""
    for (let i = 0; listTasks.length; i++) {
        html += `<li class="item-list" >" + listTasks[i] +
            " <button onclick='removeTask(" + i + ")'>x</button></li>`;
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
