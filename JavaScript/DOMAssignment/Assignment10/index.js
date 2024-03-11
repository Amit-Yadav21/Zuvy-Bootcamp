// let liInsideUl = document.querySelectorAll('li:has(ul');
// liInsideUl.forEach(function(li){
//     let innerLi = li.querySelectorAll('li');
//     let liLength = innerLi.length;
//     li.firstChild.data += `[${liLength}]`;
// });

// const liInsideUl = document.querySelectorAll('li');
// liInsideUl.forEach(li => {
//     if (li.querySelector('ul')) {
//         const innerLi = li.querySelectorAll('li');
//         const liLength = innerLi.length;
//         li.firstChild.data += `[${liLength}]`;
//     }
// });


document.querySelectorAll('li > ul').forEach(ul => {
    const liLength = ul.parentElement.querySelectorAll('li').length;
    ul.parentElement.firstChild.data += `[${liLength}]`;
});
