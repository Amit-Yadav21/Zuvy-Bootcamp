// We neeed to color all the diagnoal elements red.

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
    rows[i].cells[i].style.backgroundColor = 'red';
}
