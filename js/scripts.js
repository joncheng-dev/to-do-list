function ToDoList(){
    this.tasks = {};
}

function Task(name, completionStatus) {
    this.taskName = name;
    this.completed = completionStatus;
}

ToDoList.prototype.addTask = function(newTask) {
    this.tasks[newTask.taskName] = newTask;
}

let todaysChores = new ToDoList();

let taskOne = new Task("Go to the park", false);
let taskTwo = new Task("Go to the mall", false);
