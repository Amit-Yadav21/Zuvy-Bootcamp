// let div = document.querySelector("h1")
// let h1 = div.innerText="Gandhi from navgurukul" // find element 
// console.log(h1);

// .....................................................................................
let div = document.createElement("div");    // create div(Node Object) tag
div.setAttribute("id", "element");  // add ID
div.innerHTML = "<h2>Amit Yadav</h2>"   // aadd h2 tag

let a= document.createElement("a");
a.href = "https://google.com"
a.textContent = "Google"

document.body.append(div)
// div.insertAdjacentHTML("beforebegin","<img src='https://picsum.photos/id/237/200/300'</img>") // add image bfore div element
// div.insertAdjacentHTML("beforeend","<img src='https://picsum.photos/id/237/200/300'</img>") // add image inside before end div element 
div.insertAdjacentHTML("afterbegin","<img src='https://picsum.photos/id/237/200/300'</img>") // add image inside after start div element 
// div.insertAdjacentHTML("afterend","<img src='https://picsum.photos/id/237/200/300'</img>") // add image afer div element

// document.body.append(div)   // add h2 tag iinside the div tag
// document.body.append(div,a)   // add h2 tag iinside the div tag
// document.body.prepend(div)   // add h2 tag begning of the line and after body
// document.body.before(div)   // add h2 tag before body
// document.body.after(div)   // add h2 tag after body
// document.body.replaceWith(div)   // replace body tag with div tag

console.log(div.outerHTML); // return parent and child element 
console.log(div.innerHTML); // return child element of the parent 
console.log(div.outerText); // return h2 inside element 
