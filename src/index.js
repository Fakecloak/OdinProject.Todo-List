import { todos } from "./state/state.js";
import { loadLocalStorage } from "./logic/storage.js";
import { addTodo } from "./logic/todo.js";
import { renderTodo } from "./ui/renderTodo.js";
import "./style.css";


// DOM elements
const titleInput = document.getElementById("add-title-input");
const descriptionInput = document.getElementById("add-desc-input");
const dueDateInput = document.getElementById("add-date-input");
const priorityInput = document.getElementById("add-priority-input");

const Button = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");


//load exisiting data from local storage 
window.addEventListener("DOMContentLoaded", loadState);

function loadState() {
    loadLocalStorage();
    todos.forEach(todo => {
        const element = renderTodo(todo)
        todoList.appendChild(element);

    });
}

//add todo btn
Button.addEventListener("click", () => {
    if (!titleInput.value.trim() ||
        !descriptionInput.value.trim() ||
        !dueDateInput.value.trim() ||
        !priorityInput.value.trim()
    ) {
        alert("Please fill all the fields");
        return;
    }

    const todo = {
        id: crypto.randomUUID(),
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
        completed: false,
    }
    addTodo(todo);

    const element = renderTodo(todo)
    todoList.appendChild(element);

    resetInputs();
});

function resetInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "low";
}