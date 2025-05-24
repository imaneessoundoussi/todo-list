const input = document.getElementById("task");
const add = document.getElementById("add");
const ul = document.getElementById("todo-list");
const list_box = document.getElementById("list_box");
const searchInput = document.getElementById('search');

add.addEventListener("click", () => {
  if (input.value !== '') {
    const li = document.createElement("li");
    li.textContent = input.value;

    // Bouton suppression
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteBtn);

    // Double clic pour modifier la tâche
    li.addEventListener("dblclick", () => {
      const input2 = document.createElement("input");
      input2.type = "text";
      input2.value = li.textContent.replace('🗑', '').trim();

      li.textContent = '';
      li.appendChild(input2);
      input2.focus();

      input2.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          li.textContent = input2.value;
          li.appendChild(deleteBtn);
        }
      });
    });

    ul.appendChild(li);
    input.value = '';
  }
});

// Ajout ici la gestion de la touche Enter sur l’input
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    add.click();
  }
});

// Recherche des tâches
searchInput.addEventListener("keyup", () => {
  const term = searchInput.value.trim().toLowerCase();
  const items = ul.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();
    items[i].style.display = text.includes(term) ? '' : 'none';
  }
});

// Gestion du clic pour cocher/décocher une tâche
ul.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// Filtrer toutes les tâches
const first = document.getElementById("toutes");
first.addEventListener("click", () => {
  const tasks = ul.querySelectorAll("li");
  tasks.forEach(task => {
    task.style.display = '';
  });
});

// Filtrer les tâches en cours (non cochées)
const second = document.getElementById("en-cours");
second.addEventListener("click", () => {
  const tasks = ul.querySelectorAll("li");
  tasks.forEach(task => {
    task.style.display = (task.classList.contains("checked") ? 'none' : '');
  });
});

// Filtrer les tâches terminées (cochées)
const third = document.getElementById("termine");
third.addEventListener("click", () => {
  const tasks = ul.querySelectorAll("li");
  tasks.forEach(task => {
    task.style.display = (task.classList.contains("checked") ? '' : 'none');
  });
});