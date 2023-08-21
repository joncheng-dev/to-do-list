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

let todaysChores = new ToDoList();

let taskOne = new Task("Go to the park", false);
let taskTwo = new Task("Go to the mall", false);

todaysChores.addTask(taskOne);
todaysChores.addTask(taskTwo);