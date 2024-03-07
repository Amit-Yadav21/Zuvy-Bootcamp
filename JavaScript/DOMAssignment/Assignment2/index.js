// For each of the following, give at least one way of how to access them:
// The <div> DOM node?
// The <ul> DOM node?
// The second <li> (with Singh)?


const div = document.querySelector("div");
const ulDOMnode = document.querySelector("ul");
let ul= document.querySelector('ul');
let Secondli = ul.lastElementChild
Secondli.textContent += " Singh"

console.log(div);
console.log(ulDOMnode);
console.log(Secondli)