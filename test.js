/*
let add=document.getElementById("add");
let task=document.getElementById("task");
add.addEventListener("click",(e)=>{
    e.preventDefault();
let input=document.createElement("input");
input.setAttribute("type","checkbox")
li.textContent=task.value;





})
*/
const search = document.getElementById('search');
const todoList = document.getElementById('todo-list');
const todos = document.querySelectorAll('todo-item');

function filterTodos(){
    const search = document.getElementById('search').value.toLowerCase();
    const todos = document.querySelectorAll('.todo-item');

    todos.forEach(todo => {
        const text = todo.textContent.toLocaleLowerCase();
        if (text.includes(search)){
            todo.style.display='flex';
        }else{
            todo.style.display = 'none';
        }
    })



}
search.addEventListener("keyup", () => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term);
    });


