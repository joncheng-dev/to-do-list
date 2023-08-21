<!-- reqs -->
<!-- 1: add to to do list
  initialize to do list object which will hold tasks
  add id += to task
  add a task
2: option to indicate task complete
  is task complete? return bool t/f
3: Remove task from list -->

Describe: ToDoList();
Test 1: "It should initialize a ToDoList constructor function which should contain an object to hold tasks."
Code: ToDoList();
Expected Output: this.tasks = {};

Describe: Task();
Test 1: "It should initialize a Task constructor function, which should create an instance of a task, which takes two arguments, storing them as properties in the created object." 
Code: Task("walk the dog", false);
Expected Output: 
{completed: false
 taskName: "walk the dog"}

 Describe: ToDoList.prototype.addTask();
 Test 1: "It should add a task in the ToDoList object's task property."
 Code: ToDoList.prototype.addTask(taskOne);
 Expected Output: ("Go to the park", false);

Describe: ToDoList.prototype.assignId 
Test 1: "It should assign an ID to each individual task and allow the ID to be incremented in the property this.tasks found in the instance of the ToDoList object."
Code: taskOne;
Expected Output: 
{taskName: "Go to the park", 
completed: false, 
id: 1}
 
Describe Task.prototype.isComp
Test 1: "it should allow user to mark task as complete with a boolean"
Code: 
  taskOne.isComp();
  taskOne;
Expected output: {taskName: "Go to the park", 
completed: true, 
id: 1}
