const title = document.querySelector("#title").firstChild.nodeValue = "Belajar Javascript Mantap Banget";    

const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

//function
addTodo = (e) => {
    e.preventDefault();
    
    // membuat virtual DOM untuk element li
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center mb-1";
    li.appendChild(document.createTextNode(todoInput.value));
    
    const a = document.createElement("a");
    a.href = "#";
    a.className = "badge badge-danger";
    a.innerHTML = "Delete";
    li.appendChild(a);
    
    todoList.appendChild(li);

}

//event listener
todoForm.addEventListener("submit", addTodo);