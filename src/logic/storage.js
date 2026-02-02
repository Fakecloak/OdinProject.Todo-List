import { todos, setTodos } from "../state/state.js";

function loadLocalStorage() {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(data);
};

function saveLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
};

export { loadLocalStorage, saveLocalStorage };