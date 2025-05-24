//ajout des taches
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
//db click
li.addEventListener("dblclick",()=>{
    const input2=document.createElement("input");
    input2.type = "text";
    const span=document.createElement("span");
     input2.value = li.textContent;
    
    li.textContent = '';
    li.appendChild(input2);
  input2.focus();  //bax nktb blama nb9a nclick 3ad nktb 
  
  input2.addEventListener("keydown",(e)=>{
    if (e.key === "Enter") {
                li.textContent = input2.value;
            }


  })

    
})}


)
// rechercher les taches :
const items = ul.getElementsByTagName('li');
searchInput.addEventListener("keyup",() =>{
    const term = searchInput.value.trim().toLocaleLowerCase();
    for(let i = 0; i < items.length; i++){
        const text = items[i].textContent.toLocaleLowerCase();
        items[i].style.display = text.includes(term)? '' : 'none';
    }
});


//suppression des taches :

