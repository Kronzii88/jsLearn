const title = document.querySelector("#title").firstChild.nodeValue = "Belajar Javascript Mantap Banget";    

const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

//function
addTodo = (e) => {
    e.preventDefault();

    if(todoInput.value) {
        // membuat virtual DOM untuk element li
        const li = document.createElement("li");
        li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"; //penambahan className todo-item untuk function filterTodo 
        li.appendChild(document.createTextNode(todoInput.value));
        
        const a = document.createElement("a");
        a.href = "#";
        a.className = "badge badge-danger delete-todo"; //penambahan className delete-todo untuk function deleteTodo
        a.innerHTML = "Delete";
        li.appendChild(a);
        
        todoList.appendChild(li);
        todoInput.value = "";
    } else {
        alert("anda belum memasukkan aktivitas");
    }
    

}

deleteTodo = (e) => {
    e.preventDefault();
    if(e.target.classList.contains("delete-todo")) {
        console.log("terhapus");
        const parent = e.target.parentElement;
        parent.remove();
    }
}

clearTodo = () => {
    console.log("clicked");
    todoList.innerHTML = "";
}

filterTodo = (e) => {
    //menggunakan method index of
    e.preventDefault();
    const isi = e.target.value.toLowerCase();
    const todoItem = document.querySelectorAll(".todo-item");
    todoItem.forEach((item) => {
        const itemText = item.firstChild.textContent.toLowerCase();
        //memakai method indexOf()
        if(itemText.indexOf(isi) === -1) {
            item.setAttribute("style", "display: none !important;");
        } else {
            item.setAttribute("style", "display: block;");
        }
        console.log(itemText);
    })

    // console.log(todoItem);

}

//event listener
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodo);
filterInput.addEventListener("keyup", filterTodo);