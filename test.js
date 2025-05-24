
const input=document.getElementById("task");
const add=document.getElementById("add");
const ul=document.getElementById("todo-list");
const list_box=document.getElementById("list_box");
const searchInput = document.getElementById('search');




// ajouter tache
add.addEventListener("click",()=>{
    if(input.value !== ''){
        const li=document.createElement("li");
li.textContent = input.value;
// supression des taches :
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "🗑";
deleteBtn.addEventListener('click',() =>{
    li.remove();
});
li.appendChild(deleteBtn);
ul.appendChild(li);
 input.value = '';
}
});   
// rechercher les taches :
searchInput.addEventListener("keyup",() =>{
    const term = searchInput.value.trim().toLowerCase();
    const items = ul.getElementsByTagName('li');

    for(let i = 0; i < items.length; i++){
        const text = items[i].textContent.toLowerCase();
        items[i].style.display = text.includes(term)? '' : 'none';
    }
});



    ul.addEventListener("click",function(event){
        if(event.target.tagName==="LI"){
            event.target.classList.toggle("checked");
        }
    });
    

    const first = document.getElementById("toutes");

    first.addEventListener("click",()=>{
        
    });



