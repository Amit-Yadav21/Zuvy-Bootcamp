// Write the code that for each <li> shows:
// Console log the text inside it (without the subtree)
// console log The number of nested <li> – all descendants, including the deeply nested ones.

// Function to log text inside <li> and number of nested <li>
var listItems = document.querySelectorAll('li');
listItems.forEach(function (item) {
    var text = item.firstChild.textContent.trim(); // Get text inside <li>
    var nestedCount = item.querySelectorAll('li').length; // Get number of nested <li>
    console.log("Text inside <li>: " + text);
    console.log("Number of nested <li>: " + nestedCount);
}); // completed 