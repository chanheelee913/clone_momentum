const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

const TODOS_KEY = "todos";

console.dir(todoForm);

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.addEventListener("click",deleteToDo);

    button.innerText = "x";

    li.appendChild(span);
    li.appendChild(button);
    
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    
    li.remove();
    

    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}



function sayHello(item) {
    console.log("this is the turn of"+item);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos!==null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}