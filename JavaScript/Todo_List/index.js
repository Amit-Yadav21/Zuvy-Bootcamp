let input = document.querySelector('input')
let addBtn = document.querySelector('#add');
let clearBtn = document.querySelector('#clear');
let todoUI = document.querySelector('#todo-items');
let clear_completed = document.querySelector('#clear-completed')
let completedUI = document.querySelector('#completed-todo');

addBtn.addEventListener('click', function () {
    // let todoItem = prompt("Enter todo ?");
    let todoItem = input.value;
    
    // Clear the input field after adding the todo
    input.value = '';

    // if add empaty string , not add in ul
    if (todoItem === '') {
        return;
    }

    // add li under ul
    let li = document.createElement('li')
    li.innerText = todoItem;
    li.style.color = "black"
    li.style.listStyle = "none"
    li.style.marginRight = "40px"
    li.style.fontSize = "22px"

    // Add odd and even background colors
    if (document.querySelectorAll('li').length % 2 === 0) {
        li.style.backgroundColor = "white"; // Even background color
    } else {
        li.style.backgroundColor = "Lightgray"; // Odd background color
    }

    // add Delete and Completed when create li
    // li.innerHTML += `<button class ="delete">Delete</button> <button class ="completed">Completed</button>`
    li.innerHTML += ` <i class="fas fa-trash-alt delete"></i> <i class="fas fa-check-circle completed"></i>`

    // select inside li delete and completed icons
    let deleteIcon = li.querySelector('.delete');
    deleteIcon.style.color = "red"
    deleteIcon.style.cursor = "pointer"

    let completedIcon = li.querySelector('.completed');
    completedIcon.style.color = "green"
    completedIcon.style.cursor = "pointer"

    deleteIcon.addEventListener('click', function () {
        li.remove(); // Remove the current todo item when delete icon is clicked
    });

    todoUI.append(li);
});

// All clear
clearBtn.addEventListener('click', function () {
    todoUI.innerHTML = "";
})

clear_completed.addEventListener('click', function () {
    completedUI.innerHTML = "";
})

todoUI.addEventListener('click', function (event) {
    // Delete one by one
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
    if (event.target.classList.contains('completed')) {
        let completedLi = event.target.parentElement.cloneNode(true);

        let completedBtn = completedLi.querySelector('.completed')
        completedBtn.remove();

        completedUI.append(completedLi);
        event.target.parentElement.remove();
    }
})

// Add after completed h1 tag
completedUI.addEventListener('click', function (event) {
    // add Deleted button
    if (!event.target.classList.contains('delete')) return;
    event.target.parentElement.remove();
})