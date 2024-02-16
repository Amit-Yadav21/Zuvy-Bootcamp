let arr = ['amit','kumar','yadav','city','jaunpur'];

let [firstname,lastName] = arr;
// console.log({firstname,lastName});

let empty = {};
[empty.firstname,empty.lastName] = arr;
// console.log(empty);

let [FName,LName, ...rest] = arr;
// console.log({firstname,lastName,rest});

// ..............................................

const array = [];
let [fn="amit",ln="yadav", ...rests] = array;
// console.log({fn,ln,rests});

// =============================================== object
const userdata = {
    firstname : "amit",
    lastname: "yadav",
    age : 23,
    gender : "mele",
    role:"admin",
}
let {age, gender} = userdata;
// console.log({age,gender});

let {age:a, gender:g} = userdata;
// console.log({a,g});

let {Age=19, Gender = "Mele"} = userdata;
// console.log({Age, Gender});

let {age:b=20, fg="Female"} =userdata;
// console.log({b,fg});

let {role:roles='user'} =userdata;
// console.log({roles});

let {firstname:F_name,lastname:L_name, ...REST} = userdata;
console.log({F_name,L_name, REST});