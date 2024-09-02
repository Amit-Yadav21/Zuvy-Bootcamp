const obj = {name:'amit', age:24, name:'yadav'}
// console.log(Object.values(obj));

const person = { name: 'John', age: 30 };
for (let key in person) {
    // console.log(key + ': ' + person[key]);
}

const keys = Object.keys(person);
// console.log(keys); // Output: ['name', 'age']

const values = Object.values(person);
// console.log(values); // Output: ['John', 30]

const entries = Object.entries(person);
// console.log(entries); // Output: [['name', 'John'], ['age', 30]]

// ************************************************* object ?
var obj2 = {
	a: "hello world", // property
	b: 42,
	c: true
};

obj2.a;		// "hello world", accessed with doted notation
obj2.b;		// 42
obj2.c;		// true
// console.log(obj2.a,',',obj2.b,',',obj2.c);

obj2["a"];	// "hello world", accessed with bracket notation
obj2["b"];	// 42
obj2["c"];	// true
// console.log(obj2["a"],',',obj2["b"],',',obj2["c"]);

// ----------------------------------------------------------

var obj3 = {
	a: "hello world",
	b: 42
};

var b = "a";
// obj3[b];		// "hello world"
// obj3["b"];		// 42

// console.log(obj3[b],',',obj3["b"]);

// ========================================================================== concat / marge ?
// // marge karte samy updated value leta hai ...

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };
const obj3 = {...obj1, ...obj2}; 
// console.log(obj3);	// { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// // --------------------------------------
const target = {a: 1, b: 2, c: 3};
const source = {d: 4, e: 5, f: 6};
Object.assign(target, source);
// console.log(target); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

// ------------------------------------- 

const objOne = { a: "a" }
const objTwo = { ...objOne, b: "b" }
// console.log(objTwo) // { a: "a", b: "b" }

// ----------------------------------------
const obj_1 = { a: "a", x: { y: "y" } }
const obj_2 = { a: obj_1.a, b: "b", ...objOne.x }
// console.log(objTwo) // { a: "a", b: "b", y: "y" }

// --------------------------------------------
const objA = { a: 10 }
const objB = { a: 15 }
// console.log({ ...objA, ...objB }) // { a: 15 }
// console.log({ ...objB, ...objA }) // { a: 10 }

// -------------------------------------------------

const person2 = {
    name: 'John Doe', 
    age: 24,
    location: "U.S.A"
} 
const job = {
    title: "Full stack developer",
    location: "Remote"
}
const employee = Object.assign(person2, job);
// console.log(employee);

// ------------ output here -
// {
// 	name: 'John Doe',
// 	age: 24,
// 	location: 'Remote',
// 	title: 'Full stack developer'
//   }

// -------------------------------------------------
const persons = {
    name: "John Doe",
    location: {
        city: "London", 
        country: "England"
    }
}
const job_name = {
    title: "Full stack developer"
}

const employees = {...persons, ...job_name};
// console.log(employees.location === persons.location);	// true

// --------------------------------------- output :- 7 4 1
var obj4 =[
    {"a":7},
    {"c":1},
    {"e":4}
]
let res = []
for(i of obj4){
    // console.log(i)
    let v = Object.values(i)
    res.push(...v)
}
// console.log(...res.sort((a,b)=>b-a))

