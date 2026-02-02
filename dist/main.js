/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
() {

eval("{const titleInput = document.getElementById(\"add-title-input\");\r\nconst descriptionInput = document.getElementById(\"add-desc-input\");\r\nconst dueDateInput = document.getElementById(\"add-date-input\");\r\nconst priorityInput = document.getElementById(\"add-priority-input\");\r\n\r\nconst Button = document.getElementById(\"add-todo-btn\");\r\nconst todoList = document.getElementById(\"todo-list\");\r\n\r\nlet todos = [];\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", loadLocalStorage);\r\n\r\nButton.addEventListener(\"click\", () => {\r\n    if (!titleInput.value.trim() || !descriptionInput.value.trim() || !dueDateInput.value.trim() || !priorityInput.value.trim()) {\r\n        alert(\"Please fill all the fields\");\r\n        return;\r\n    }\r\n\r\n    const todo = {\r\n        title: titleInput.value,\r\n        description: descriptionInput.value,\r\n        dueDate: dueDateInput.value,\r\n        priority: priorityInput.value,\r\n    }\r\n    addTodo(todo);\r\n    renderTodo(todo);\r\n    resetInputs();\r\n})\r\n\r\nfunction loadLocalStorage() {\r\n    todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\r\n    todos.forEach(todo => renderTodo(todo));\r\n}\r\n\r\nfunction addTodo(todo) {\r\n    todos.push(todo);\r\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n}\r\n\r\nfunction renderTodo(todo) {\r\n    const para = document.createElement(\"p\");\r\n    para.classList.add(\"todo-item\");\r\n    para.textContent = `${todo.title} - ${todo.description} - ${todo.dueDate} - ${todo.priority}`;\r\n    todoList.appendChild(para);\r\n\r\n    para.addEventListener(\"click\", () => {\r\n        para.style.textDecoration = \"line-through\";\r\n    });\r\n    para.addEventListener(\"dblclick\", () => {\r\n        todoList.removeChild(para);\r\n        removeTodo(todo);\r\n    });\r\n\r\n}\r\n\r\nfunction removeTodo(todo) {\r\n    const index = todos.indexOf(todo);\r\n    if (index > -1) {\r\n        todos.splice(index, 1);\r\n    }\r\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n}\r\n\r\nfunction resetInputs() {\r\n    titleInput.value = \"\";\r\n    descriptionInput.value = \"\";\r\n    dueDateInput.value = \"\";\r\n    priorityInput.value = \"low\";\r\n}\n\n//# sourceURL=webpack://odinproject.todo-list/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;