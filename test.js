
const input=document.getElementById("task");
const add=document.getElementById("add");
const ul=document.getElementById("todo-list");
const list_box=document.getElementById("list_box");
add.addEventListener("click",()=>{
const li=document.createElement("li");
li.textContent=input.value;
ul.appendChild(li);
input.value=''
})
