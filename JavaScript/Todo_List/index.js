let addBtn = document.querySelector('#add');
let clearBtn = document.querySelector('#clear');
let ul = document.querySelector('#todo-items');
let completedUi = document.querySelector('#completed-todo');

addBtn.addEventListener('click', function () {
    let todoItem = prompt("Enter todo ?");

    if (todoItem === '') {
        return
    }

    let li = document.createElement('li')
    li.innerText = todoItem;
    li.innerHTML = `<button class ="delete">Delete</button><button class ="completed">Completed</button>`
    ul.append(li);
});

clearBtn.addEventListener('click', function () {
    ul.innerHTML = "";
})

ul.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElenent.remove();
    }
    if(event.target.classList.contains('completed')){
        let completedLi = event.target.parentElenent.cloneNode(true);

        let completedBtn = completedLi.querySelector('.completed')
        completedBtn.remove();

        completedUi.append(completedLi);
        event.target.parentElenent.remove();
    }
})

completedUi.addEventListener('click',function(){
    
})