// We neeed to color all the diagnoal elements red.

// const table = document.querySelector('table');
// const rows = table.rows;

// for (let i = 0; i < rows.length; i++) {
//     rows[i].cells[i].style.backgroundColor = 'red';
// }

const tr = document.querySelectorAll('tr')
let j=0;
for(let i=0; i<tr.length;i++){
    let diagnoal = tr[i].children[j]
    diagnoal.style.backgroundColor = 'red'
    j++;
}