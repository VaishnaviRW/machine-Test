const cl = console.log;

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const updateBtn = document.getElementById("updateBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editId = null;

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.name}</span>
      <div class="actions">
        <button onclick="onEdit('${todo.id}')">✏️</button>
        <button onclick="onDelete('${todo.id}')">🗑️</button>
      </div>
    `;
    todoList.appendChild(li);
  });
};

const addTodo = (name) => {
  const newTodo = {
    id: Date.now().toString(),
    name,
  };
  todos.push(newTodo);
  saveToLocalStorage();
  renderTodos();
};

const onEdit = (id) => {
  const todo = todos.find((t) => t.id === id);
  editId = id;
  todoInput.value = todo.name;
  addBtn.style.display = "none";
  updateBtn.style.display = "inline";
};

const onUpdate = () => {
  const updatedName = todoInput.value.trim();
  if (!updatedName) return alert("Enter a task!");

  todos = todos.map((t) =>
    t.id === editId ? { ...t, name: updatedName } : t
  );

  saveToLocalStorage();
  renderTodos();
  editId = null;
  todoInput.value = "";
  addBtn.style.display = "inline";
  updateBtn.style.display = "none";
};

const onDelete = (id) => {
  todos = todos.filter((t) => t.id !== id);
  saveToLocalStorage();
  renderTodos();
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = todoInput.value.trim();
  if (!name) return alert("Please enter a task");
  addTodo(name);
  todoInput.value = "";
});

updateBtn.addEventListener("click", onUpdate);

// Initial render
renderTodos();

// Make functions global for inline HTML buttons
window.onEdit = onEdit;
window.onDelete = onDelete;
