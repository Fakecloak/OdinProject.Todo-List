let todos = [];

function setTodos(newTodos) {
    todos = newTodos;
}

function getTodos() {
    return todos;
}

export { todos, setTodos, getTodos };