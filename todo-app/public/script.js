const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');
const clearBtn = document.getElementById('clearBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

let todos = [];
let currentFilter = 'all';

// Load todos when page loads
document.addEventListener('DOMContentLoaded', loadTodos);

// Add event listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

clearBtn.addEventListener('click', clearCompleted);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTodos();
  });
});

function loadTodos() {
  fetch('/api/todos')
    .then(response => response.json())
    .then(data => {
      todos = data;
      renderTodos();
    })
    .catch(error => console.log('Error:', error));
}

function addTodo() {
  const text = todoInput.value.trim();
  
  if (text === '') {
    alert('Please enter a task');
    return;
  }

  fetch('/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
  })
  .then(response => response.json())
  .then(newTodo => {
    todos.push(newTodo);
    todoInput.value = '';
    todoInput.focus();
    renderTodos();
  })
  .catch(error => console.log('Error:', error));
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  
  fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed: !todo.completed })
  })
  .then(response => response.json())
  .then(updatedTodo => {
    const index = todos.findIndex(t => t.id === id);
    todos[index] = updatedTodo;
    renderTodos();
  })
  .catch(error => console.log('Error:', error));
}

function deleteTodo(id) {
  fetch(`/api/todos/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(() => {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
  })
  .catch(error => console.log('Error:', error));
}

function clearCompleted() {
  const completedTodos = todos.filter(t => t.completed);
  
  if (completedTodos.length === 0) {
    alert('No completed tasks to clear');
    return;
  }

  completedTodos.forEach(todo => {
    deleteTodo(todo.id);
  });
}

function renderTodos() {
  let filtered = todos;

  // Apply filter
  if (currentFilter === 'active') {
    filtered = todos.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filtered = todos.filter(t => t.completed);
  }

  // Update task count
  const activeCount = todos.filter(t => !t.completed).length;
  taskCount.textContent = `${activeCount} ${activeCount === 1 ? 'task' : 'tasks'}`;

  // Clear and render list
  todoList.innerHTML = '';

  if (filtered.length === 0) {
    todoList.innerHTML = '<div class="empty-message">No tasks found</div>';
    return;
  }

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (todo.completed ? ' completed' : '');
    
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
      <span class="todo-text">${todo.text}</span>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    
    todoList.appendChild(li);
  });

  // Update clear button state
  clearBtn.disabled = todos.filter(t => t.completed).length === 0;
}
