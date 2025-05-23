
const input=document.getElementById("task");
const add=document.getElementById("add");
const ul=document.getElementById("todo-list");
const list_box=document.getElementById("list_box");
add.addEventListener("click",()=>{
const li=document.createElement("li");
li.innerHTML=input.value;
list_box.appendChild(li);
input.textContent='';
})
