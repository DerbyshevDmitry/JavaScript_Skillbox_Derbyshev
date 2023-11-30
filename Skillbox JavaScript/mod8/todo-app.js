function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Function to retrieve data from LocalStorage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data) || [];
}

// Create ID - simple increment for demonstration purposes
let idCounter = 1;
function generateId() {
    return idCounter++;
}

function createTodoApp(container, title = 'Список дел', listName) {
    let todoItems = getFromLocalStorage(listName);

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        // Initially disable the button if input is empty
        button.disabled = true;

        input.addEventListener('input', function() {
            button.disabled = !input.value.trim();
        });

        return {
            form,
            input,
            button,
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function renderTodoList() {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // Check LocalStorage for existing items
        if (todoItems.length > 0) {
            todoItems.forEach((item) => {
                const todoItem = createTodoItem(item.name);
                todoItem.item.dataset.id = item.id;

                todoItem.doneButton.addEventListener('click', function () {
                    const itemId = parseInt(todoItem.item.dataset.id);
                    const index = todoItems.findIndex((i) => i.id === itemId);
                    todoItems[index].done = !todoItems[index].done;
                    todoItem.item.classList.toggle('list-group-item-success');
                    saveToLocalStorage(listName, todoItems);
                });

                todoItem.deleteButton.addEventListener('click', function () {
                    const itemId = parseInt(todoItem.item.dataset.id);
                    const index = todoItems.findIndex((i) => i.id === itemId);
                    if (confirm('Вы уверены?')) {
                        todoItems.splice(index, 1);
                        todoItem.item.remove();
                        saveToLocalStorage(listName, todoItems);
                    }
                });

                todoList.append(todoItem.item);
            });
        }

        todoItemForm.form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (!todoItemForm.input.value.trim()) {
                return;
            }

            const newItem = {
                id: generateId(),
                name: todoItemForm.input.value,
                done: false
            };

            todoItems.push(newItem);

            const todoItem = createTodoItem(newItem.name);
            todoItem.item.dataset.id = newItem.id;

            todoItem.doneButton.addEventListener('click', function () {
                const itemId = parseInt(todoItem.item.dataset.id);
                const index = todoItems.findIndex((i) => i.id === itemId);
                todoItems[index].done = !todoItems[index].done;
                todoItem.item.classList.toggle('list-group-item-success');
                saveToLocalStorage(listName, todoItems);
            });

            todoItem.deleteButton.addEventListener('click', function () {
                const itemId = parseInt(todoItem.item.dataset.id);
                const index = todoItems.findIndex((i) => i.id === itemId);
                if (confirm('Вы уверены?')) {
                    todoItems.splice(index, 1);
                    todoItem.item.remove();
                    saveToLocalStorage(listName, todoItems);
                }
            });

            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
            saveToLocalStorage(listName, todoItems);
        });
    }

    renderTodoList();
}

document.addEventListener('DOMContentLoaded', function () {
    createTodoApp(document.getElementById('todo-app'), 'Мои дела', 'my');
});