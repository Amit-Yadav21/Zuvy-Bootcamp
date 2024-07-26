let arr = ['amit', 'kumar', 'yadav', 'city', 'jaunpur'];
// -------------skip the second element in array with (,)
let [firstname, ,lastName] = arr;
// console.log({firstname,lastName});

let empty = {};
[empty.firstname, empty.lastName] = arr;
// console.log(empty);

let [FName, LName, ...rest] = arr;
// console.log({firstname,lastName,rest});

const array = [];
let [fn = "amit", ln = "yadav", ...rests] = array;
// console.log({fn,ln,rests});

const nestedArray = [1, [2, 3], 4];
const [aa, [bb, c], d] = nestedArray;
// console.log(aa, bb, c, d); // Output: 1 2 3 4

// =================================== object ==========================
const userdata = {
    firstname: "amit",
    lastname: "yadav",
    age: 23,
    gender: "mele",
    role: "admin",
}
let { age, gender } = userdata;
// console.log({age,gender});
// -------------------------------change key name
let { age: a, gender: g } = userdata;
// console.log({a,g});

let { Age = 19, Gender = "Mele" } = userdata;
// console.log({Age, Gender});

let { age: b = 20, fg = "Female" } = userdata;
// console.log({b,fg});

let { role: roles = 'user' } = userdata;
// console.log({roles});

let { firstname: F_name, lastname: L_name, ...REST } = userdata;
// console.log({F_name,L_name, REST});

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};
const { name, address: { city, country } } = person;
// console.log({name,city,country}); 

let objData ={
    firstname:"amit",
    lastname:"yadav",
    age:20,
    nested : {
        width : 22,
        height:[1,2,3,4,5],
        data:{
            title:1,
            description:"this is my data"
        }
    }
}
// let {nested:{height},...rest} = objData
let {nested:{data:{description}},...restData} = objData
// console.log(height);
// console.log(restData);
// console.log(description);