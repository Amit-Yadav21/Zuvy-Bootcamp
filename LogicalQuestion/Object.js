let string = "12345";
let formattedString = "";
let lastTwoDigits = string.slice(-2);

for (let i = string.length - 3; i >= 0; i--) {
  if ((string.length - i) % 2 === 0) {
    formattedString = "," + formattedString;
  }
  formattedString = string[i] + formattedString;
}
formattedString = formattedString + lastTwoDigits;

// console.log(formattedString);

// .................................That is 50% needs, 30% wants and 20% savings.
function calculateBudget(salary) {
    const needs = salary * 50/100;
    const wants = salary * 30/100;
    const savings = salary * 20/100;
    return { "Needs": needs, "Wants": wants, "Savings": savings };
    return { Needs: needs, Wants: wants, Savings: savings };

    return {
        "Needs": salary * 0.5,
        "Wants": salary * 0.3,
        "Savings": salary * 0.2
    };
}
// console.log(calculateBudget(10000)); // Output: { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// Return the total vote count
function totalVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}
const input1 = { upvotes: 13, downvotes: 0 };
const input2 = { upvotes: 2, downvotes: 33 };
const output1 = totalVoteCount(input1);
const output2 = totalVoteCount(input2);
// console.log(output1); // Output: 13
// console.log(output2); // Output: -31

// .................................Return volume of the box
function calculateVolume(obj) {
    const { width, length, height } = obj;
    // return width * length * height;

    return obj.width * obj.length * obj.height;
}
// console.log(calculateVolume({ width: 7, length: 2, height: 1 })); // Output: 14

const CVolume = ({ width, length, height }) => width * length * height;
// console.log(CVolume({ width: 7, length: 2, height: 1 })); // Output: 14
// ...............................
function calculateFoodItems(obj) {
    const minQuantity = Math.min(...Object.values(obj));
    return minQuantity;

    const smallValue = Object.values(obj).reduce((min, val) => Math.min(min, val), Infinity);
    return smallValue;
    
    for (const ingredient in obj) {
        if (obj[ingredient] < minQuantity) {
            minQuantity = obj[ingredient];
        }
    }
    return minQuantity;
}
// console.log(calculateFoodItems({"salt": 23,"oil": 12,"ketchup": 10})); // Output: 10

function isFreeDeliveryEligible(obj) {
    const toa = Object.values(obj).reduce((total, price) => total + price, 0);
    return toa > 50.00;

    let TOA = 0;
    for (let item in obj) {
        TOA += obj[item];
    }
    return TOA > 50.00;

    const totalAmount = Object.entries(obj).reduce((total, [item, price]) => total + price, 0);
    return totalAmount > 50.00;
}
// console.log(isFreeDeliveryEligible({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })); // true,false

// Return keys and values of object as seperate arrays
function keyValue(obj) {
    let ky = Object.keys(obj);
    let vl = Object.values(obj);
    let resultArray = [];
    resultArray.push(ky, vl);
    return resultArray;
}
// console.log(keyValue({ a: 1, b: 2, c: 3 }));    // [["a", "b", "c"], [1, 2, 3]]

// Return array such that drinks object is in sorted order on the basis of their price.
function sortItemsByPrice(items) {
    items.sort((a, b) => a.price - b.price);
    return items;
}
const input = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
];
const sortedItems = sortItemsByPrice(input);
// console.log(sortedItems);

// Return an array where each element represent key value
function array(obj){
    return Object.entries(obj)
}
// console.log(array({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]

// Return an obj such that keys becomes value and values become keys
function keyValues(obj) {
    const swappedObj = {};
    for (const key in obj) {
        const value = obj[key];
        swappedObj[value] = key;
    }
    return swappedObj;
}
// console.log(keyValues({ "z": "q", "w": "f" }));

// ......................................................... calculator using Object
let calculator = {
    description : 'this is a calculator',
    sum(a,b){
        return a+b
    },
    subscription(a,b){
        return a-b
    },
    multiplication(a,b){
        return a*b
    }
}
let ans = calculator.subscription(5,7);
// console.log(ans);

// ..............Given an array of objects, push all the names to a new array and return the new array
let arrays = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
  ]
function extractNames(arr) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
      names.push(arr[i].name);
    }
    return names;
}  
// console.log(extractNames(arrays));

function extractNames(arr) {
    return arr.map(obj => obj.name);
}
// console.log(extractNames(arrays));  

function extractNames(arr) {
    return arr.reduce((names, obj) => {
        names.push(obj.name);
        return names;
    }, []);
}
// console.log(extractNames(arrays));

// ..................................An object containing all the items greater than price.
function sortByPrice(obj, price) {
    // Convert the object into an array of key-value pairs
    const entries = Object.entries(obj);
    // Sort the array based on the values
    const sortedEntries = entries.filter(([key, value]) => value > price);
    // Convert the sorted array back into an object
    const sortedObj = Object.fromEntries(sortedEntries);
    // return sortedObj;

    let x ={};
    for ( i in obj){
        if(obj[i]>price){
            console.log('key',i);
            console.log('value',obj[i]);
            x[i]  = obj[i]
        }
    }
    // return x;
}
const input_obj = { "a": 3000, "b": 200, "c": 1050 };
// console.log(sortByPrice(input_obj, 1000));  // Output: { "a": 3000, "c": 1050 }

function sortByNunLenght(obj, num) {
    // Convert the object into an array of key-value pairs
    const entries = Object.entries(obj);
    // Sort the array based on the values
    const sortedEntries = entries.filter(([key, value]) => key.length> num);
    // Convert the sorted array back into an object
    const sortedObj = Object.fromEntries(sortedEntries);
    return sortedObj;
}
const input_objs = { "aaaaa": 3000, "bbbb": 200, "ccc": 1050 };
// console.log(sortByNunLenght(input_objs, 4));

// .........................................count letter and digit
function countLettersAndDigits(str) {
    let letterCount = 0;
    let digitCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (/[a-zA-Z]/.test(char)) {
            letterCount++;
        }
        else if(!isNaN(parseInt(char))){
            digitCount++;
        }
    }
    // return { letters: letterCount, digits: digitCount };

    let lCount = 0;
    let dCount = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            lCount++;
        } else if (char >= '0' && char <= '9') {
            dCount++;
        }
    }
    return {"LETTERS": lCount,"DIGITS": dCount};

    const letter = str.match(/[a-zA-Z]/g) || [];
    const digit = str.match(/\d/g) || [];
    // return { letters: letter.length, digits: digit.length };

    const letters = str.split('').filter(char => /[a-zA-Z]/.test(char));
    const digits = str.split('').filter(char => /\d/.test(char));
    return { letters: letters.length, digits: digits.length };
}
const inputString = 'H3ll0 Wor1d';
const counts = countLettersAndDigits(inputString);
// console.log(counts);