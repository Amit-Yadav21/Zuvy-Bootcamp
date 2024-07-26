// let arr = [1,2,3,4,5];
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element) {
//     console.log(element);
// });

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.toString()); // Prints: 1,2,3,4,5
// console.log(arr.join(' ')); // Prints: 1 2 3 4 5 (joined with space)

// const numbers = [1, 2, 3, 4, 5];
// for (let num of numbers) {
//     console.log(num);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(...arr); // Prints: 1 2 3 4 5 (separate elements)

// ---------------------------------------------- matrics ?
// var arr = [
//     [1,2,12],
//     [4,5,6],
//     [7,8,9]
// ]
// var a = (arr[0][0] + arr[1][1] + arr[2][2]);
// var b = (arr[0][2] + arr[1][1] + arr[2][0]);
// console.log(a-b);

// -------------------------------------------- if any one value less then 18 . then output false
const AGEs = [32, 33, 16, 40];
const Data = AGEs.every(checkAge)
function checkAge(age) {
    return age > 18
}
// console.log(Data);

// ------------------------------------- fill all elements kiwi ?
const FRUITS = ["Banana", "Orange", "Apple", "Mango", "amit", "yadav"];
FRUITS.fill("Kiwi");
// console.log(FRUITS); // [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

// --------------------------------- fill index posotion to right side ?

const Fruits = ["Banana", "Orange", "Apple", "Mango"];
Fruits.fill("Kiwi", 2);
// console.log(Fruits); // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]

// ---------------------------------- filter age ?
const Ages = [32, 33, 16, 40];
const RESULT = Ages.filter(checkAdult);
function checkAdult(age) {
    return age >= 18;
}
// console.log(RESULT); // [ 32, 33, 40 ]


// ---------------------------------------- find data in array ?
const AGES = [3, 10, 18, 20];
var checkAge = age => age > 18;
const DATA = AGES.find(checkAge)
// console.log(DATA); // 20

// ------------------------------------------ 
const ages = [3, 10, 18, 20];
function checkAge(age) {
    return age > 18;
}
const DATAS = ages.findIndex(checkAge);
// console.log(DATAS);

// --------------------------------------------- 
var fruits = ["apple", "orange", "cherry"];
var text = "";
function myFunction(item, index) {
    text += `${index + ": " + item}'\n'`;
}
fruits.forEach(myFunction);
// console.log(text);

// ----------------------------------------- change array from a string:
let TEXT = "ABCDEFGHIJK"
const myArr = Array.from(TEXT);
// console.log(myArr);

// =============================================== reverse array without revrse() method ?
const arr = [1, 2, 3, 4, 5, 6, 7]
var newArray = [];
for (var i = arr.length - 1; i >= 0; i--) {
    // console.log(arr[i]);
    newArray.push(arr[i]);
}
// console.log(newArray);

// ------------------------ reverse forEach method ?
const arr_item = [1, 2, 3, 4];
var arr1 = [];
arr_item.forEach(element => {
    arr1.unshift(element)
});
// console.log(arr1);   //Output: [4, 3, 2, 1]

// ------------------------- Reverse sort() method ?
let arr_ = [1, 2, 3, 4, 5];
arr.sort((a, b) => b - a); // sort in descending order
// console.log(arr_); // [5, 4, 3, 2, 1]

// ------------------------------ Reverse an array without using the reverse method & without a second array.

let a = ["a", "b", "c", "d"]
let res = a.map((ele, index, array) => {
    return array[array.length - 1 - index]
})
// console.log(res);   // output :-  [ 'd', 'c', 'b', 'a' ]


// ============================================== array convert into object
//  array me jo value hai vah object ka value aur array ka index key ke formate ho ?

const array_ = [1, 2, 3];
const obj = { ...array_ };
// console.log(obj);    // { 0: 1, 1: 2, 2: 3 }


const arrays = [1, 2, 3];
let n = {}
for (i in arrays) {
    n[i] = arrays[i]
}
// console.log(n);

// =================================== neated array data find output single array  ?
const nest_arr = [1, 2, [3, 4, [5, 6, [1, 2]], 4, 3], 2, 4]
const resu = nest_arr.flat(Infinity)
a = resu.sort()
// console.log(a);         // output :- [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6 ]

// ============================= find string/boolean/number in array ?

const array4 = [["jay", [90, 85, 95]], ["amit", [70, 60, 50, false]], ["aniket", [20, 50, 40, true]]];
const resul = array4.flat(Infinity).filter((element) => typeof element === "number")  // string/boolean/number
// console.log(resul);   // [ 90, 85, 95, 70, 60,50, 20, 50, 40 ] 

// ------------------------------ find float value array ?
const array5 = ["amit", "kumar", "yadav", 1, 3, 5, 6, true, false, 1.8, 3.5, 0.4];
const floatArr = array5.filter((value) => typeof value === "number" && Number.isFinite(value) && !Number.isInteger(value));
// console.log("Float values in array: ", floatArr);
// ------------------------------------------------------
a = [2, 4.5, 7, 6, 5, 0.4, "dygf", 6, [7, 6, 12, "dafag", 0.6, "sg", 7.6,], 62, "fsgw", 6, 5.6, "wgyw", 5]
let ARR = a.flat().sort((a, b) => a - b).filter(ele => typeof ele === 'number');
// console.log(ARR)

// ==============================================================  spread operator ?
let z = [1, 2, 3, 4, 5]
// console.log(...z); // 1 2 3 4 5

// ***************************************************** Arrays ?

var array6 = ["hello world", 42, true];

array6[0];			// "hello world"
array6[1];			// 42
array6[2];			// true
array6.length;		// 3
typeof array6;		// "object"

// console.log(array6[0],',',array6[1],',',array6[2],',',array6.length,',',typeof(array6));

// ======================================================== sum reduce/loop ?
var array7 = [1, 2, 5, 10, 20];
var sum = array7.reduce((a, i) => {
    return a + i;
});
// console.log(sum);

// ----------------------------------------------------------
function sum(n) {
    return n.reduce((previous, current) => {
        return previous + current
    })
}
let array8 = [2, 4, 5, 7, 8, -1]
// console.log(sum(array8));

// ------------------------------------------------------------
function sum(n) {
    let num = 23
    let b = n.reduce((previous, current) => previous + current)
    if (b > num) {
        return `${b} is Gratter than ${num}`
    }
    else {
        return `${b} is Less than ${num}`
    }
}
let array9 = [2, 4, 5, 8, -1]
// console.log(sum(array9));

//----------------------------------------
var array_1 = [1, 2, 5, 10, 20];
var sum = 0;
for (let i in array_1) {
    sum += arr[i];
}
// console.log(sum);

// ==============================================================

const array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array_2.length; i++) {
    //   setTimeout(() => console.log(array_2[i]), 1000);
}

let count = 1;
const intervalId = setInterval(() => {
    //   console.log(count);
    if (count === 10) clearInterval(intervalId);
    count++;
}, 1000);

let coun = 1;
const interval = setInterval(() => {
    //   console.log(coun);
    if (coun++ === 10) clearInterval(interval);
}, 1000);

for (var i = 0; i < 10; i++) {
    //   setTimeout(() => console.log(a[i]), 1000);
}       // 10 time undefine

// ======================================================= How to convert an Object {} into an Array [] in JavaScript?

let obj_ = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// Method 1: - Object.keys()
// console.log(Object.keys(obj_)); 

// Method 2: - Object.values()
// console.log(Object.values(obj_)); 

// Method 3: - Object.entries()
// console.log(Object.entries(obj));


// ======================================== count dublicate values from array ?
let arr_1 = [1, 2, 4, 5, 2, 8, 5, 9, 0, -2,]
let obj_1 = {};
for (let i of arr_1) {
    if (!obj_1[i]) {
        obj_1[i] = 0
    }
    obj_1[i] += 1
}
// console.log(obj_1);

// ------------------------------------ OR ?
Str = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'h', 'e', 'a'];
var obje = {}
for (var i = 0; i < Str.length; i++) {
    if (obje[Str[i]] != null) {
        obje[Str[i]] += 1;
    } else {
        obje[Str[i]] = 1;
    }
}
// console.log(obj);

const allStudentsAge = [
    [1, 19],
    [3, 4],
    [5, 19],
    [7, 8, 19],
    [10, 11, 12, 13, 14, 15],
    [19, 22, 18, 19, 12, 18, 19, 12, 24]
];
let target = 19;
let counter = 0;
for (studentAge of allStudentsAge.flat()) {
    if (studentAge == target) {
        counter++;
    }
};

// console.log(counter); // 6

// ---------------------------------------------------- ?

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = "";
fruits.forEach(myFunction);
function myFunction(value) {
    text += value + "\n";
}
// console.log(text);

// ------------------------------------------------------

const fruit = ["Banana", "Orange", "Apple"];
fruit[6] = "Lemon";
let fLen = fruit.length;
let text_ = "";
for (i = 0; i < fLen; i++) {
    text_ += fruits[i] + "\n";
}
// console.log(text);

// -------------------------------------------------------- add element in end ?
const phal = ["Banana", "Orange", "Apple", "Mango"];
phal[phal.length] = "Kiwi";
// console.log(phal);

// --------------------- OR

const myArray = ["Emil", "Tobias", "Linus"];
const myChildren = myArray.concat("Peter");
// console.log(myChildren);

// -------------------------------------------- multiply by six 
let arrs = [5, 1, 30, 2, 6, 21, 18];
const six = arrs.filter(ele => ele % 6 === 0);
// console.log(six); // [ 30, 6, 18 ]

// -------------------------------------------------------------- multiply ?
const items = [1, 29, 47];
const copy = [];
items.forEach((item) => {
    copy.push(item * item);
});
// console.log(copy);      // [ 1, 841, 2209 ]

// -------------------------------------------------------- power of array ?
var arr1 = [1, 2, 3]
const arr2 = arr1.map((x) => x ** 2);
// console.log(arr2); // [1, 4, 9]

// -------------------------find the area of an array elements using map method
var array = [2, 4, 6, 8];
const areas = array.map(side => side * side);
// console.log(areas); 

{
let a = [2, 3, 4, 5, 6]
let area = a.map(r => Math.PI * (r ** 2));
// console.log('ko',area);
}


// ==================================================== clear array data ?

arry = [1, 2, 3, 4];
arry.length = 0;           // Assign array’s length to zero
// console.log(arry);
//-------------------------
arry = [1, 2, 3, 4];
arry.splice(0, a.length);      // Using the splice() method
// console.log(arry);
// ---------------------------
arry = [1, 2, 3, 4];
while (arry.length > 0) {
    arry.pop();             // Using the pop() method
}
// console.log(arry);
//------------------------------
arry = [1, 2, 3, 4];
while (arry.length > 0) {
    arry.shift();           // // Using the shift() method
}
// console.log(arry);

// .......................................................................... IMP ?

const arr_number = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3)); // 2
// console.log(arr.includes(5)); // true
// console.log(arr.find(elem => elem > 2)); // 3
// console.log(arr.filter(elem => elem % 2 === 0)); // [2, 4]


let arr_0 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr_0.length; i++) {
    //   console.log(arr_0[i]);
}


let arr_00 = [1, 2, 3, 4, 5];
for (let elem of arr_00) {
    //   console.log(elem);
}

let arr_2 = [1, 2, 3, 4, 5];
let newArr = [...arr_2];
// console.log(newArr[0]); // 1  

let arr_3 = [1, 2, 3, 4, 5];
arr_3.sort((a, b) => b - a); // sort in descending order
// console.log(arr); // [5, 4, 3, 2, 1]

let nested_arr = [[1, 2], [3, 4, [5, 6]]];
let y = nested_arr.flat(Infinity);
// console.log(y);

let x = [1, 2, 3];
x.shift();
// console.log(x) // 2,3
x.pop();
// console.log(x)  // 2
// console.log(x.lenght);   // undefined

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
// console.log(arrayIntegers1);
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]


// const firstOrder = () => console.log("I am a first order function!");
// firstOrder();

// ---------------------------------- What is Hoisting 
function somemethod() {
    // console.log(counter1); // undefined
    // console.log(counter2); // ReferenceError
    // console.log(counter3); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
    const counter3 = 3;
}
// somemethod();

var message;
// console.log(message);    // output : undefined 
message = "The variable Has been hoisted";

// ------------------------------------- What is IIFE(Immediately Invoked Function Expression)
(function () {
    var message = "IIFE";
    // console.log(message);
})();
//   console.log(message); //Error: message is not defined

// ********************************************************************************* find max value ?
a = [5, 3, 8, 9, 0, 2, 5];
var max = a.reduce((acc, current) => (acc > current ? acc : current));
// console.log(max); // Output: 9

// --------------------------------------- OR ------ OK
var arrinNum = [3, 5, 8, 100, 20];
var max = Math.max(...arrinNum);
// console.log("max number -",max);
// const index = arr.indexOf(max);
// console.log("Index of max number -",index);

// -------------------------------------------------OR ------ OK 
const arrofNumber = [5, 3, 8, 9, 0, 2, 5];
var max = 0
for (let i = 0; i < arrofNumber.length; i++) {
    if (arrofNumber[i] > max) {
        max = arrofNumber[i]
    }
}
// console.log(max);

// -------------------------------------------- OR -------
const ArrofNum = [5, 3, 8, 9, 0, 2, 5];
const MAX_num = Math.max.apply(null, ArrofNum);
// console.log(MAX_num); // Output: 9

var array = [3, 8, 2, 1, 5, 9, 4];
const MAX = Math.max(...array);
// console.log(MAX); // Output:

let numbers = [10, 5, 8, 20, 3, 15];
let maxNumber = numbers.reduce(function (max, current) {
    return Math.max(max, current);
});
// console.log("Array:", numbers);
// console.log("Maximum value:", maxNumber);
// ------------------------------------------------------ find max number using promises
function findMaximum(numbers) {
    return new Promise((res, rej) => {
        const maximum = Math.max(...numbers);
        res(maximum);
    })
}

const maximumFunction = async () => {
    try {
        const arr = [5, 25, 33, 18, 2];
        let m = await findMaximum(arr)
        console.log(m)
    } catch (err) {
        console.log(err)
    }
}
// maximumFunction();

// ********************************************************** find details ?
const users = [
    { fName: "John1", lName: "Doe1", age: 34 },
    { fName: "John2", lName: "Doe2", age: 35 },
    { fName: "John3", lName: "Doe3", age: 34 },
    { fName: "John4", lName: "Doe4", age: 45 },
];

const fullname = users.map((user) => `${user.fName} ${user.lName}`);
// console.log(fullname);

const data = users.filter((user) => user.age < 40);
// console.log(data);

const user = users.filter((user) => user.age < 40).map((ele) => ele.fName);
// console.log(user);

// ======================================================================== find the sum of array
var ar = [4, 8, 7, 13, 10]
var sum = ar.reduce(function (x, y) {
    return x + y;
});
// console.log("Sum using Reduce method : " + sum);
// ................................................
var arra = [4, 8, 7, 13, 12]
var sum = 0;
for (let i = 0; i < arra.length; i++) {
    sum += arr[i];
}
// console.log("Sum is using loop : " + sum) // 44
// ...............................................
function sumArrays(arr1, arr2) {
    return arr1.map((num, index) => num + arr2[index]);
}
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var sumArray = sumArrays(array1, array2);
// console.log(sumArray);
// ..................................................
var sum = []
for (var i = 0; i < array1.length; i++) {
    sum.push(array1[i] + array2[i]);
}
//  console.log(sum);

// ------------------------------------------- odd/even number using loop /
// for (let i=1;i<=10; i++){
//     if (i%2!==0 ){
//         console.log(i)
//     }
// }

// -------------------------------------------------
let num = [1, 2, 3, 4, 5, 6, 7]
let result = num.filter(ele => ele % 2 != 0).filter((ele) => {
    count = 0
    for (let i = 1; i <= ele; i++) {
        if (ele % i == 0) {
            count += 1
        }
    }
    if (count == 2) {
        return ele
    }
})
// console.log(result)

// ------------------------------------------------------ divisible by 3 and 5
const num_num = [1, 5, 9, 15, 20, 25, 30];
const divisibleNumbers = num_num.filter(number => number % 3 === 0 && number % 5 === 0);
// console.log(divisibleNumbers);  // Output: [15, 30]

// ............... Creating a New Array using the Existing Array/List and output lenght of the element 
var fruit_s = ["apple", "mango", "watermelon", "orange"];
var fruits_len = fruit_s.map((ele) => ele.length);
// console.log(fruits_len) // [ 5, 5, 10, 6 ]

var fruits_ = ["apple", "mango", "watermelon", "orange"];
var even_fruits = fruits_.filter(ele => ele.length % 2 !== 0);
// console.log(even_fruits) // [ 'apple', 'mango' ]

var fru = ["apple", "mango", "watermelon", "orange"];
var datas = fru.find(element => element.length > 6 && element.length % 2 !== 0);
// console.log(datas) // 2

// ******************************************************* find unique and not unique value ?
arr1 = [1,2,3,5]
const numberofArray = [1,0,3,5,6]
a= [];
for (let i of arr1){
    if (!arr2.includes(i)){
        a.push(i)
    }
}
for (let i of numberofArray){
    if (!arr1.includes(i)){
        a.push(i)
    }
}
// console.log(a);
// -------------------------------- find unique valuse ?
const arrOF1 = [1,2,3,5]
const arrOF2 = [1,0,3,5,6]
const empatyArray= [];
for (let i of arrOF1){
    if (arrOF2.includes(i)){
        empatyArray.push(i)
    }
}
// console.log(a);

// ************************************************************************************** Question ?
// ------------------------------------------- even number ?
const arR = [5,2,3,4,8,7];
const store = arR.filter(a => a%2==0);
// console.log(store);
// --------------------------------------------- odd number ?
var vari = arR.filter(a => a%2!=0);
// console.log(vari);
// --------------------------------------------- odd number ture and even number false ?
var vari = arR.map(a => a%2!=0);
// console.log(vari);
// --------------------------------------------- even number true and odd number false ?
var vari = arR.map(a => a%2==0);
// console.log(vari);
// --------------------------------------------- self multiply number ?
var vari = arR.map(a => a*a);
// console.log(vari);
// ------------------------------------------------- reduce ?
const sumOfnumber = arR.reduce((num1,num2)=>{
    return num1 + num2
})
// console.log('sum of all array elelment',sumOfnumber);
// --------------------------------------------------- find even and multiply self ?
var vari = arR.filter(a => a%2==0).map(a => a*a);
// console.log('self multiply',vari);
// ----------------------------------------------------- output 84 ?
var vari = arR.filter(a => a%2==0).map(a => a*a).reduce((a,b) =>(a+b));
// console.log(vari);  // output :- 2,4,8 ,, 4,8,16 ,, 84
// --------------------------------------------------------------------------

const ArrOffruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = ArrOffruits.slice(2);
// console.log(citrus);
// ------------------------------------------------------------ output []

var vari = arR.length;
// console.log('lenght of array',vari);

const vari1 = arR.filter(a => a%2==0).map(a => a*a);
// console.log('filter and self multiply',vari1);