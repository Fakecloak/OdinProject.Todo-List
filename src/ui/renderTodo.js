import { removeTodo, toggleTodo } from "../logic/todo.js";

function renderTodo(todo) {
    const para = document.createElement("p");
    para.classList.add("todo-item");
    para.textContent =
        `${todo.title} - ${todo.description} - ${todo.dueDate} - ${todo.priority}`;

    if (todo.completed) {
        para.classList.add("completed");
    }

    para.addEventListener("click", () => {
        toggleTodo(todo);
        para.classList.toggle("completed", todo.completed);
    });

    para.addEventListener("dblclick", () => {
        removeTodo(todo.id);
        para.remove();
    });

    return para;
}








export { renderTodo };