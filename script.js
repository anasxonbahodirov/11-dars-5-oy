// function addTodo() {
//     const todoInput = document.getElementById('todo-input');
//     const todoList = document.getElementById('todo-list');

//     if (todoInput.value.trim() === '') {
//         alert('Vazifa matnini kiriting');
//         return;
//     }

//     const li = document.createElement('li');
//     li.textContent = todoInput.value;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'O\'chirish';
//     deleteButton.onclick = function () {
//         todoList.removeChild(li);
//     };

//     li.appendChild(deleteButton);
//     li.onclick = function () {
//         li.classList.toggle('checked');
//     };

//     todoList.appendChild(li);
//     todoInput.value = '';
// }

function addTodo() {
    let todoInput = document.getElementById('todo-input');
    let todoText = todoInput.value.trim();

    if (todoText !== "") {
        let todoList = document.getElementById('todo-list');
        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.onclick = toggleTodo;

        let todoContent = document.createElement('span');
        todoContent.textContent = todoText;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "O'chirish";
        deleteBtn.onclick = deleteTodo;

        li.appendChild(checkbox);
        li.appendChild(todoContent);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = ""; 
    }
}

function deleteTodo() {
    this.parentElement.remove();
}

function toggleTodo() {
    this.parentElement.classList.toggle('completed');
}
