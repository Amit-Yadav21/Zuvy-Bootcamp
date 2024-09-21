// ...................... question 
const arrObj = [
    { name: "Bob", notes: [3, 5, 4] },
    { name: "Rary", notes: [1, 4, 6] },
    { name: "Jack", notes: [1, 2, 3] }
];

// .............................. output
[
    { name: 'Bob', goodnotes: 5 },
    { name: 'Rary', goodnotes: 6 },
    { name: 'Jack', goodnotes: 3 }
]

// ..................... map
const result = arrObj.map(person => ({
    name: person.name,
    goodnotes: Math.max(...person.notes)
}));
// console.log(result);

// ....................... forEach
const results = [];
arrObj.forEach(person => {
    const goodnotes = Math.max(...person.notes);
    results.push({ name: person.name, goodnotes: goodnotes });
});
console.log(results);

//..................... using for loop
const result_1 = [];
for (let i = 0; i < arrObj.length; i++) {
    const goodnotes = Math.max(...arrObj[i].notes);
    result_1.push({ name: arrObj[i].name, goodnotes: goodnotes });
}
// console.log(result_1);

// ...................... for loop
const result_2 = [];
let i = 0;
while (i < arrObj.length) {
    const goodnotes = Math.max(...arrObj[i].notes);
    result_2.push({ name: arrObj[i].name, goodnotes: goodnotes });
    i++;
}
// console.log(result_2);

// ...................... reduce 
const result_3 = arrObj.reduce((acc, person) => {
    acc.push({ name: person.name, goodnotes: Math.max(...person.notes) });
    return acc;
}, []);
// console.log(result_3);