const search = document.getElementById('search');
const todoList = document.getElementById('todo-list');
const todos = todoList.getElementsByTagName('li');

function filterTodos(term) {
    for (let todo of todos) {
        todo.style.display = todo.textContent.toLowerCase().includes(term) ? '' : 'none';
    }
}
search.addEventListener("keyup", () => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term);
    });
    
