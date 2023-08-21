<!-- reqs -->
<!-- 1: add to to do list
  initialize to do list object which will hold tasks
  add id += to task
  add a task
2: option to indicate task complete
  is task complete? return bool t/f
3: Remove task from list -->

Describe: ToDoList():

Test 1: "It should initialize a ToDoList constructor function which should contain an object to hold tasks."
Code: ToDoList();
Expected Output: this.tasks = {};


Describe: Task();
Test 1: "It should initialize a Task constructor function, which should create an instance of a task, which takes two arguments, storing them as properties in the created object." 
Code: Task("walk the dog", false);
Expected Output: 
{completed: false
 taskName: "walk the dog"}