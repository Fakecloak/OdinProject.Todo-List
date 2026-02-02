import { todos, setTodos } from "../state/state.js";
import { saveLocalStorage } from "../logic/storage.js";

function addTodo(todo) {
    todos.push(todo);
    saveLocalStorage();
}

function removeTodo(todoId) {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
    saveLocalStorage();
}


function toggleTodo(todo) {
    todo.completed = !todo.completed;
    saveLocalStorage();
}

export { addTodo, removeTodo, toggleTodo };