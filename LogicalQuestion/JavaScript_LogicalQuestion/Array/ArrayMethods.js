const list1 = [1, 2, 3, 4];
const multiply = list1.map((el) => el * 2); // [2, 4, 6, 8]
// console.log(multiply);

const Even = list1.filter((el) => el % 2 === 0); // [2, 4]
// console.log(Even);

const AddArrayItem = list1.reduce((total, item) => total + item); 
// console.log(AddArrayItem);

const ZeroArrayItem = list1.fill(0); // [0, 0, 0, 0, 0]
// console.log(ZeroArrayItem);

const campare1 = list1.find((el) => el === 3); // 3
const campare2 = list1.find((el) => el === 6); // undefined
// console.log(campare1,",",campare2);

const findIndex1 = list1.indexOf(3); // 2
const findIndex2 = list1.indexOf(6); // -1 ( if not present in array )
// console.log(findIndex1,",",findIndex2);

const lastIndex1 = list1.lastIndexOf(3); // 2
const lastIndex2 = list1.lastIndexOf(3, 1); // -1
// console.log(lastIndex1,lastIndex2);

const arrayItem = [5, 12, 8, 130, 44];
const a = arrayItem.findIndex((element) => element > 13); // 3
// console.log(a);

// Q. what is the use of tostring() and Join() methods in array ?
// The toString() method returns an array as a comma separated string ✅
// The join() method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator:✅

// =================================================== practice Question 
let ar = [1,2,3,4,5,6,7,8,9,10];
let remove=ar.splice(4,ar.length -4);
// console.log(remove); // [ 5, 6, 7, 8, 9, 10 ]

const array = [1,2,3,4,5,6];
let c= array.find((num)=>num%2==0);
// console.log(c);

const count = array.filter(num => num % 2 === 0).length;
// console.log(count); // Output: 3

// ........................ sum of Array elements
function sumOfArrayItem(a,b, ...rest){
    // console.log({a,b, rest});
    let result = a + b;
    result = rest.reduce((sum, item) =>{
        return sum+item;
    },result)
    return result;
}
let arr = [1,2,3,4,5,6,7,8,9]
let result = sumOfArrayItem(...arr)
// console.log(result);

// ................................................... slice method
let my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Slice from the 4th element from the end to the 2nd element from the end
let sliced_list = my_list.slice(-4, -1);
// console.log(sliced_list); // Output: [7, 8, 9]

// Slice from the 3rd element from the end to the end of the list
sliced_list = my_list.slice(-3);
// console.log(sliced_list); // Output: [8, 9, 10]

// Slice from the beginning of the list to the 5th element from the end
sliced_list = my_list.slice(0, -5);
// console.log(sliced_list); // Output: [1, 2, 3, 4, 5]

// Slice from the 5th element from the end to the 2nd element from the end, skipping every other element
sliced_list = my_list.slice(-5, -1).filter((_, index) => index % 2 === 0);
// console.log(sliced_list); // Output: [6, 8]

// Slice from the end of the list to the beginning, reversing the list
let reversed_list = my_list.slice().reverse();
// console.log(reversed_list); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ....................................................... splice method
let fruits = ['apple', 'banana', 'cherry', 'date'];
// Remove one element at index 2
let removedItem = fruits.splice(2, 1);
// console.log('Array after removing one element:', fruits); // Output: ['apple', 'banana', 'date']
// console.log('Removed element:', removedItem); // Output: ['cherry']

let colors = ['red', 'green', 'blue'];
// Replace one element at index 1
colors.splice(1, 1, 'yellow');
// console.log('Array after replacing one element:', colors); // Output: ['red', 'yellow', 'blue']

let animals = ['cat', 'dog', 'elephant'];
// Insert two elements starting from index 1
animals.splice(1, 0, 'bird', 'fish');
// console.log('Array after adding elements:', animals); // Output: ['cat', 'bird', 'fish', 'dog', 'elephant']

let languages = ['JavaScript', 'Python', 'Java', 'C++'];
// Remove all elements starting from index 0
languages.splice(0);
// console.log('Array after removing all elements:', languages); // Output: []

let numbers = [1, 2, 3, 4, 5];
// Remove three elements starting from index 1
let removedItems = numbers.splice(1, 3);
// console.log('Array after removing three elements:', numbers); // Output: [1, 5]
// console.log('Removed elements:', removedItems); // Output: [2, 3, 4]