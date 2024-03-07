// Console log all the child nodes of ul element with the id of outer

// const c = document.querySelector('#outer');
// console.log(c.childNodes);

var outerUl = document.getElementById('outer'); // Access the <ul> element with id "outer"
var childNodes = outerUl.children; // Get all child elements of the <ul> element

for (var i = 0; i < childNodes.length; i++) {
    console.log(childNodes[i]);
}
