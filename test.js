document.addEventListener('DOMContentLoaded', () => {
    // Éléments DOM
    const taskInput = document.getElementById('task');
    const addBtn = document.getElementById('add');
    const todoList = document.getElementById('todo-list');
    const searchInput = document.getElementById('search');
    const filterAll = document.getElementById('toutes');
    const filterInProgress = document.getElementById('en-cours');
    const filterCompleted = document.getElementById('termine');

    // Données
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [
        { id: 1, text: 'Faire les devoirs', completed: false },
        { id: 2, text: 'Appeler maman', completed: false },
        { id: 3, text: 'Aller à la gym', completed: false },
        { id: 4, text: 'Terminer le projet', completed: false }
    ];

    // Render tasks
    function renderTasks(filter = 'all', searchTerm = '') {
        todoList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesFilter = filter === 'all' || 
                (filter === 'completed' && task.completed) || 
                (filter === 'in-progress' && !task.completed);
            const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });

        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `todo-item ${task.completed ? 'completed' : ''}`;
            li.dataset.id = task.id;
            li.innerHTML = `
                <span>${task.text}</span>
                <div>
                    <button class="complete-btn">${task.completed ? '✓' : '◻'}</button>
                    <button class="delete-btn">🗑</button>
                </div>
            `;
            todoList.appendChild(li);
        });

        // Sauvegarde locale
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Événements
    addBtn.addEventListener('click', () => {
        if (taskInput.value.trim()) {
            tasks.push({
                id: Date.now(),
                text: taskInput.value.trim(),
                completed: false
            });
            taskInput.value = '';
            renderTasks();
        }
    });

    todoList.addEventListener('click', (e) => {
        const taskId = parseInt(e.target.closest('li')?.dataset.id);
        if (!taskId) return;

        if (e.target.classList.contains('delete-btn')) {
            tasks = tasks.filter(task => task.id !== taskId);
        } 
        else if (e.target.classList.contains('complete-btn')) {
            const task = tasks.find(task => task.id === taskId);
            if (task) task.completed = !task.completed;
        }
        renderTasks();
    });

    // Filtres
    filterAll.addEventListener('click', () => renderTasks('all'));
    filterInProgress.addEventListener('click', () => renderTasks('in-progress'));
    filterCompleted.addEventListener('click', () => renderTasks('completed'));

    // Recherche
    searchInput.addEventListener('input', (e) => {
        renderTasks('all', e.target.value);
    });

    // Initial render
    renderTasks();
});