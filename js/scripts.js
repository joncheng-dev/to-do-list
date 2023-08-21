function ToDoList(){
    this.tasks = {};
}

function Task(name, completionStatus) {
    this.taskName = name;
    this.completed = completionStatus;
}