let addBtn = document.querySelector('#add');
let clearBtn = document.querySelector('#clear');
let input  = document.querySelector('input')
let todoUI = document.querySelector('#todo-items');
let completedUI = document.querySelector('#completed-todo');

addBtn.addEventListener('click', function () {
    // let todoItem = prompt("Enter todo ?");
    let todoItem= input.value;

    // if add empaty string , not add in ul
    if (todoItem === '') {
        return;
    }

    // add li under ul
    let li = document.createElement('li')
    li.innerText = todoItem;
    li.style.color = "red"
    li.style.listStyle = "none"

    // add Delete and Completed when create li
    li.innerHTML += `<button class ="delete">Delete</button> <button class ="completed">Completed</button>`
    todoUI.append(li);
});

// All clear
clearBtn.addEventListener('click', function () {
    todoUI.innerHTML = "";
})

todoUI.addEventListener('click', function (event) {
    // Delete one by one
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
    if(event.target.classList.contains('completed')){
        let completedLi = event.target.parentElement.cloneNode(true);

        let completedBtn = completedLi.querySelector('.completed')
        completedBtn.remove();

        completedUI.append(completedLi);
        event.target.parentElement.remove();
    }
})

// Add after completed h1 tag
completedUI.addEventListener('click',function(event){
    // add Deleted button
    if(!event.target.classList.contains('delete')) return;
    event.target.parentElement.remove();
})