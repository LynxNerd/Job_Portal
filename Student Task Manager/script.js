let tasks = [];

function addTask(){

  let name = document.getElementById("taskInput").value;
  let priority = document.getElementById("priority").value;

  if(name === ""){
    alert("Enter task");
    return;
  }

  let task = {
    id: Date.now(),
    name: name,
    priority: priority,
    completed: false
  };

  tasks.push(task);

  document.getElementById("taskInput").value = "";

  renderTasks(tasks);
}

function renderTasks(taskArray){

  let list = document.getElementById("taskList");

  list.innerHTML = "";

  taskArray.forEach(function(task){

    let li = document.createElement("li");

    if(task.completed){
      li.classList.add("completed");
    }

    li.innerHTML = `
      ${task.name} (${task.priority})
      <div>
      <button onclick="completeTask(${task.id})">✔</button>
      <button onclick="deleteTask(${task.id})">X</button>
      </div>
    `;

    list.appendChild(li);

  });

}

function completeTask(id){

  tasks.forEach(function(task){
    if(task.id === id){
      task.completed = !task.completed;
    }
  });

  renderTasks(tasks);
}

function deleteTask(id){

  tasks = tasks.filter(function(task){
    return task.id !== id;
  });

  renderTasks(tasks);
}

function showAll(){
  renderTasks(tasks);
}

function showCompleted(){

  let completed = tasks.filter(function(task){
    return task.completed;
  });

  renderTasks(completed);
}

function showPending(){

  let pending = tasks.filter(function(task){
    return !task.completed;
  });

  renderTasks(pending);
}