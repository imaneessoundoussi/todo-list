//ajout des taches
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

li.addEventListener("dblclick", () => {
    const taskTextNode = Array.from(li.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
    const currentText = taskTextNode ? taskTextNode.textContent.trim() : '';

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.value = currentText;

    // Hide the text and replace it with the input
    li.insertBefore(input2, li.firstChild);
    if (taskTextNode) taskTextNode.remove();
    input2.focus();

    input2.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const newText = document.createTextNode(input2.value);
            li.insertBefore(newText, input2);
            input2.remove();
        }
    });

    
});

 
}


});   

input.addEventListener("keydown",(event) =>{
    if(event.key === "Enter"){
        add.click();
    }
  })


// rechercher les taches :
const items = ul.getElementsByTagName('li');
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

       const tasks=ul.querySelectorAll("li");
       tasks.forEach(task=>{
        task.style.display='';
       })
    })

        
   


    const second=document.getElementById("en-cours");

    second.addEventListener("click",()=>{
        const tasks=ul.querySelectorAll("li");
       tasks.forEach(task=>{
        task.style.display=(task.classList.contains("checked")?'none':'');
       })
    })

    const third=document.getElementById("termine");

    third.addEventListener("click",()=>{
        const tasks=ul.querySelectorAll("li");
       tasks.forEach(task=>{
        task.style.display=(task.classList.contains("checked")?'':'none');
       })
    })


