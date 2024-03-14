// Sort the table
// There may be more rows in it.
// Write the code to sort it by the "name" column.

let tbody = document.querySelector('tbody');
let rows = Array.from(tbody.querySelectorAll('tr'));
rows.sort((a, b) => {
    let A = a.cells[0].innerText;
    let B = b.cells[0].innerText;
    return A.localeCompare(B);
});
rows.forEach(row => tbody.appendChild(row));