// const obj = {name:'amit', age:24, name:'yadav'}
// console.log(Object.values(obj));

// const person = { name: 'John', age: 30 };
// for (let key in person) {
//     console.log(key + ': ' + person[key]);
// }

// const person = { name: 'John', age: 30 };
// const entries = Object.keys(person);
// console.log(entries); // Output: ['name', 'age']

// const person = { name: 'John', age: 30 };
// const values = Object.values(person);
// console.log(values); // Output: ['John', 30]

// const person = { name: 'John', age: 30 };
// const entries = Object.entries(person);
// console.log(entries); // Output: [['name', 'John'], ['age', 30]]

// ************************************************* object ?
var obj = {
	a: "hello world", // property
	b: 42,
	c: true
};

obj.a;		// "hello world", accessed with doted notation
obj.b;		// 42
obj.c;		// true
// console.log(obj.a,',',obj.b,',',obj.c);

obj["a"];	// "hello world", accessed with bracket notation
obj["b"];	// 42
obj["c"];	// true
// console.log(obj["a"],',',obj["b"],',',obj["c"]);

// ----------------------------------------------------------

var obj = {
	a: "hello world",
	b: 42
};

var b = "a";
// obj[b];		// "hello world"
// obj["b"];		// 42

// console.log(obj[b],',',obj["b"]);

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

const person = {
    name: 'John Doe', 
    age: 24,
    location: "U.S.A"
} 
const job = {
    title: "Full stack developer",
    location: "Remote"
}
const employee = Object.assign(person, job);
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

// ------------------------------------------------------

// const input =require('readline-sync')
// const n = input.question('Type your text -:')
// function countPhoneNumbers(obj) {
// 	let count = 1;
// 	for (const key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			const value = obj[key];
// 			if (typeof value === 'string' && /\d{3}-\d{3}-\d{4}/.test(value)) {
// 				count++;
// 			}
// 		}
// 	}

// 	return count;
// }
// console.log(countPhoneNumbers(n));

// ============================= searching any data here ?

const data = [
	{
		"Employee_ID": 1,
		"Name": "amit ok",
		"Email": "amitok@gmail.com",
		"Address": "amit ok nagar, mohla gali, machhi market",
		"Phone_Number": "1234567890"
	},
	{
		"Employee_ID": 2,
		"Name": "amit kumar",
		"Email": "amitk@gmail.com",
		"Address": "amit kumar nagar, mohla gali, machhi market",
		"Phone_Number": "1234567891"
	},
	{
		"Employee_ID": 3,
		"Name": "yadav",
		"Email": "yadav@gmail.com",
		"Address": "yadav nagar, mohla gali, machhi market",
		"Phone_Number": "1234567892"
	},
	{
		"Employee_ID": 4,
		"Name": "papa",
		"Email": "papa@gmail.com",
		"Address": "papa nagar, mohla gali, machhi market",
		"Phone_Number": "9651025253"
	}
];

const input = require('readline-sync')
const num = input.question('Enter your number -:')
const searchTerm = num; // The term you want to search for
// // console.log('what is serach :-',searchTerm);

const searchData = data.filter((item) => {
	const name = item.Name.toLowerCase();
	const email = item.Email.toLowerCase();
	const address = item.Address.toLowerCase();
	const phone = item.Phone_Number;

	return (
		name.includes(searchTerm.toLowerCase()) ||
		email.includes(searchTerm.toLowerCase()) ||
		address.includes(searchTerm.toLowerCase()) ||
		phone.includes(searchTerm)
	);
});
// console.log(searchData);

// --------------------------------------- output :- 7 4 1
var obj =[
    {"a":7},
    {"c":1},
    {"e":4}
]
let res = []
for(i of obj){
    // console.log(i)
    let v = Object.values(i)
    res.push(...v)
}
// console.log(...res.sort((a,b)=>b-a))

