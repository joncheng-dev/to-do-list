// Business Logic
function ToDoList(){
    this.tasks = {};
    this.currentId = 0;
}

function Task(name, completionStatus) {
    this.taskName = name;
    this.completed = completionStatus;
}

ToDoList.prototype.addTask = function(newTask) {
    newTask.id = this.assignId();
    this.tasks[newTask.id] = newTask;
}

ToDoList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

Task.prototype.isComp = function() {
  this.completed = true;
}

ToDoList.prototype.deleteTask = function(id) {
    if (this.tasks[id] === undefined) {
        return false;
    } delete this.tasks[id];
    return true;
};



// User Interface Logic
window.addEventListener("load", formLoader);

function formLoader() {
    let userForm = document.querySelector("form");
    userForm.addEventListener("submit", formSubmissionHandler);
}

function formSubmissionHandler(event) {
    event.preventDefault();

    let todaysChores = new ToDoList();

    let taskOne = new Task("Go to the park", false);
    let taskTwo = new Task("Go to the mall", false);

    todaysChores.addTask(taskOne);
    todaysChores.addTask(taskTwo);

    // let todaysChores = newToDoList();
    // let userEnteredTask = document.getElementById("task-input").value;
    // todaysChores.addTask(userEnteredTask);
    document.querySelector("p").innerText = todaysChores.tasks[1].taskName;
    
}
