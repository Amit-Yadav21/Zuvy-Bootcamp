// Write a function to create a list from user input.
// For every list item:
// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or via an empty entry).
// All elements should be created dynamically.
// If a user types HTML-tags, they should be treated like a text.


function UserInput() {
    let ul = document.createElement('ul');
    while (true) {
        let input = prompt("Enter list item ?");
        if (input === "" || input === null) {
            break;
        }
        else {
            let li = document.createElement('li'); li.textContent = input;
            ul.append(li);
        }
    }
    document.body.append(ul);
}
UserInput();  // completed
