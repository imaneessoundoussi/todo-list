
const input=document.getElementById("task");
const add=document.getElementById("add");
const ul=document.getElementById("todo-list");
const list_box=document.getElementById("list_box");
const searchInput = document.getElementById('search');



add.addEventListener("click",()=>{
const li=document.createElement("li");

li.textContent = input.value;
ul.appendChild(li);
input.value = '';

})
// rechercher les taches :
searchInput.addEventListener("keyup",() =>{
    const term = searchInput.value.trim().toLocaleLowerCase();
    const items = ul.getElementsByTagName('li');

    for(let i = 0; i < items.length; i++){
        const text = items[i].textContent.toLocaleLowerCase();
        items[i].style.display = text.includes(term)? '' : 'none';
    }
});


    ul.addEventListener("click",function(event){
        if(event.target.tagName==="LI"){
            event.target.classList.toggle("checked");
        }
    })
    


//suppression des taches :

