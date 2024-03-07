// How to find?…
// The table with id="age-table".
// All label elements inside that table (there should be 3 of them).
// The first td in that table (with the word “Age”).
// The form with name="search".
// The first input in that form.
// The last input in that form.

let table=document.querySelector("#age-table")
let label=table.querySelectorAll('label')
let td=table.querySelector('td')
let form=document.querySelector('form[name="search"]')
let firstinput=form.querySelector('input')
let lastInput=form.querySelectorAll('input')
console.log(table)
console.log(label)
console.log(td)
console.log(form)
console.log(firstinput)
console.log(lastInput[1])

// var ageTable = document.getElementById('age-table');
// var labelsInAgeTable = ageTable.querySelectorAll('label');
// var firstTdInAgeTable = ageTable.querySelector('td');
// var searchForm = document.forms['search'];
// var firstInputInSearchForm = searchForm.querySelector('input');
// var inputsInSearchForm = searchForm.querySelectorAll('input');
// var lastInputInSearchForm = inputsInSearchForm[inputsInSearchForm.length - 1];

// console.log("Table with id='age-table':", ageTable);
// console.log("All label elements inside that table:", labelsInAgeTable);
// console.log("The first td in that table:", firstTdInAgeTable);
// console.log("The form with name='search':", searchForm);
// console.log("The first input in that form:", firstInputInSearchForm);
// console.log("The last input in that form:", lastInputInSearchForm);
