// https://www.interviewbit.com/javascript-mcq/
// https://www.geeksforgeeks.org/javascript-quiz-set-3/

// (function(a){
//     return (function(){
//       console.log(a);
//       a = 6;
//     })()
//    })(21);
// a) 6     b) NaN      c) None of above    d)) 21  
// --------------------------------------------------------
// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//    })();
// a)) 2 4 3 1   b) 1 2 3 4  c) 2 3 4 1  d ) 4 3 2 1
// ----------------------------------------------------------
//  var x=12;
//  var y=8;
//  var res=eval("x+y");
//  document.write(res);

// a)) 20        b) x+y      c) 128      d) None of above
// ----------------------------------------------------------------  
// function Func()  
// {  
// document.getElementById("example").innerHTML=Math.sqrt(81);  
// }  

// a)) 9     b) 81       c) 0        d) Error
// --------------------------------------------------------
// When an operator’s value is NULL, the typeof returned by the unary operator is:
// a) Boolean       b) Undefined        c)) Object       d) Integer

// a= null;     // object
// console.log(typeof(a));

// Which function is used to serialize an object into a JSON string in Javascript?
// a)) stringify()     b) parse()        c) convert()

// Which of the following are closures in Javascript?
// a) Variable      b) Function     c) Object       d)) All of the above

//------------------------------------------------------
// var a = 1;  
// var b = 0;  
// while (a <= 3)  
// {  
//    a++;  
//    b += a * 2;  
//    console.log(b);  // 4 10 18
// }
// loop will run 3 times, before meeting the exit condition. First value of b will be 2 * 2 = 4, followed by 4 + 3 * 2 = 10, and then value of 10 + 4 * 2 = 18.

// console.log(NaN === NaN);
// a) true      b)) false        c) undefined        d)  Error

// console.log(typeof NaN === "number");  // true

// console.log(typeof(NaN));
// a) Object    b)) Number       c) String       D) none of above

// let sum = 0; 
// const a = [1, 2, 3];
// a.forEach(getSum);
// console.log(sum);
// function getSum(ele) {
//    sum += ele;
// }
// a)) 6     b) 1        c) 2        d) None of above

// a = [1, 2, 3, 4, 5];
// console.log(a.slice(2, 4));
// a)) 3,4      b) 2, 3      c) 3,4,5    d) 2,3,4

// console.log(+true);           // 1
// console.log(+false);           // 0
// console.log(typeof(+true));   // number 

// -----------------------------------------------------
// console.log(parseInt("123Hello"));
// console.log(parseInt("Hello123"));
// a)) 123 NaN       b) 123 123      c) 123Hello Hello123    d) NaN NaN

// ------------------------------------------------
const example = ({ a, b, c }) => {
    // console.log(a, b, c);
   };
   example(0, 1, 2);
// a)) Undefined Undefined Undefined    b) 0 1 2    c) 0 Undefined Undefined

// -------------------------------------------------------
// const obj1 = {};
// const obj2 = {};
// console.log(obj1 === obj2);
// a) true      b)) false       c) Undefined 

// const obj1 = [];
// const obj2 = [];
// console.log(obj1 === obj2);
// a) true      b)) false       c) Undefined 

// ----------------------------------------------------
// function test(...args) {
//     console.log(typeof args);
// }
// test(12);
// a) NaN   b) Number   c)) Object   d) Array

// ------------------------------------------------------
// const obj1 = {first: 20, second: 30, first: 50};
// console.log(obj1);
// a) {first: 20, second: 30}   b)) {first: 50, second: 30}     c) {first: 20, second: 30, first: 50}

// -------------------------------------------------------- 
// for (var i=0; i<3; i++){
//     setTimeout(() =>console.log(i));
// }    // 3 3 3

// for (let i=0; i<3; i++){
//     setTimeout(() =>console.log(i));
// }    // 0 1 2

// ----------------------------------------------------
// var a = [, , ,].length
// console.log(a);     // 3

// var a = true + false
// console.log(a);     // 1

// var a = false+true
// console.log(a);     // 1

// var a = (NaN === undefined)
// console.log(a);     // false

// var a = (true == "true") 
// console.log(a);     // false

// var a = Array.from(Array(3).keys())
// console.log(a);     // [ 0, 1, 2 ]

// var a=!!""
// console.log(a);     // false

// var a= [1, 2, 3] + [4, 5, 6]
// console.log(a);     // 1,2,34,5,6

// var a= 10 , 2
// console.log(a); // error

// var a =0.2 + 0.1 === 0.3
// console.log(a); // false


// let number =5
// console.log(number++); // 5
// console.log(--number); // 4
// console.log(++number);   // 6

// let sum = eval('10*10+5')
// console.log(sum);    // 105

// let a= {1:'a', 2:'b', 3:'c'}
// console.log(a.hasOwnProperty('1'));  // true
// console.log(a.hasOwnProperty(1));    // true
// console.log(a.hasOwnProperty('hello'));  // true

// for(let i=1; i<5; i++){
//     if(i===3) continue;
//     console.log(i);          // 1 2 4
// }

// console.log(typeof 1);           // number
// console.log(typeof typeof 1);    // string

// console.log(!!null);     // flase
// console.log(!!'');       // flase
// console.log(!!1);        // true

// let a = 7 + null;
// console.log(a); // 7
// let b = 7 * null;
// console.log(b); // 0
// let c = 8 + undefined;
// console.log(c); //NaN
// let d = 8 * undefined;
// console.log(d); //NaN

// let a_a =[1,2,3,4]
// let b_b = a_a
// b_b[0] = 0
// b_b = []
// console.log(a_a); // [ 0, 2, 3, 4 ]

// Upon encountering empty statements, what does the Javascript Interpreter do?
// a) None of the above
// b) Ignores the statements ( this is the right ans )
// c) Throws an error
// d) Gives a warning

// Which of the following methods can be used to display data in some form using Javascript?
// a) console.log()
// b) document.write()
// c) All of the above ( this is the right ans )
// d) window.alert()

// How can a datatype be declared to be a constant type?
// a) let
// b) var
// c) const ( this is the right ans )
// d) constant

// What will be the output of the following gode snippet? <script type="text/javascript"> a = 5+ "9"; document.write(a): </script>
// a) 59 ( this is the right ans )
// b) 14
// c) Runtime Error
// c) compilation Error

// What will be the output of the following code snippet? <script type="text/javascript language="javascript"> var a= "Scaler": var result = a.substring(2, 4); document.write(result): </script>
// a) al (this is the right ans)
// b) ale
// c) caler
// d) cal

// What will be the output of the following code snippet? <script type="text/javascript language="javascript"> var a= "Scaler": var result = a.substring(2, 4); document.write(result): var x=12; var y=8; var res=eval("x+y");document.write(res); </script>
// a) al20 (this is the right ans)
// b) 128
// c) x+y 
// d) None of above

// What will be the output of the following code snippet? <script type="text/javascript language="javascript"> var x=12; var y=8; var res=eval("x+y");document.write(res); </script>
// a) 20 (this is the right ans)
// b) 128
// c) x+y 
// d) None of above

// -------------------------------- OR Oparetor 
// The “OR” operator is represented by two vertical lines (||). In JavaScript, the “OR” operator evaluates the values from left to right and returns the first truthy value. If none of the values are truthy, the “OR” operator will return the last operand.

// let x = 'Hello' || false; // x is equal to 'Hello' (first truthy value)
// let y = false || 'Yes' || 1; // y is equal to 'Yes' (first truthy value)
// let z = false || undefined || 0; // since all are false, z is equal to 0 (the last value)

// ----------------------------------------------- AND Oparetor 
// The “AND” operator is represented by two ampersands (&&). In JavaScript, the “AND” operator evaluates the values from left to right and returns the first falsy value. If all the operands are true, the “AND” operator will return the last operand.

// let x = 'Hello' && false; // x is equal to 'false' (first falsy value)
// let y = 0 && 'Yes' && true; // y is equal to 0 (first falsy value)
// let z = true && 'Hello' && 10; // since all are truthy, z is equal to 10 (the last value)

// ----------------------------------------------- NOT Oparetor
// The “NOT” operator is represented by an exclamation mark (!). the “NOT” operator accepts a single argument and returns the inverse of its boolean value. The argument is first converted into a boolean (true or false). The argument’s boolean value is then inverted and returned (true becomes false and vice versa).

// let x = !false; // x is equal to true
// let y = !('Hello'); // y is equal to false ('Hello' is truthy)

// -----------------------------------------------------------------

// console.log(1 +  "2" + "2"); // 1+'2'= 12 + '2' => 122

// console.log(1 +  +"2" + "2");   // 1+ +'2'= 3 + '2' => 32 the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2")

// console.log(1 +  -"1" + "2");   // 1 + -'1'= 0 + '2' => 02  except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1 yielding 0, which is then converted to a string and concatenated with the final "2" operand, yielding "02"

// console.log(+"1" +  "1" + "2"); // 1 + '1' + '2' => 112 Although the first "1" operand is typecast to a numeric value based on the unary + operator that precedes it, it is then immediately converted back to a string when it is concatenated with the second "1" operand, which is then concatenated with the final "2" operand, yielding the string "112"

// console.log( "A" - "B" + "2");  // Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.

// console.log( "A" - "B" + 2);    // As exlained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.

// console.log("0 || 1 = "+(0 || 1));  // 1 In JavaScript, both || and && are logical operators that return the first fully-determined “logical value” when evaluated from left to right.

// console.log("1 || 2 = "+(1 || 2));  // 1 The or (||) operator. In an expression of the form X||Y, X is first evaluated and interpreted as a boolean value. If this boolean value is true, then true (1) is returned and Y is not evaluated, since the “or” condition has already been satisfied. If this boolean value is “false”, though, we still don’t know if X||Y is true or false until we evaluate Y, and interpret it as a boolean value as well. Accordingly, 0 || 1 evaluates to true (1), as does 1 || 2.  

// console.log("0 && 1 = "+(0 && 1));  // 1 The and (&&) operator. In an expression of the form X&&Y, X is first evaluated and interpreted as a boolean value. If this boolean value is false, then false (0) is returned and Y is not evaluated, since the “and” condition has already failed. If this boolean value is “true”, though, we still don’t know if X&&Y is true or false until we evaluate Y, and interpret it as a boolean value as well.

// console.log("1 && 2 = "+(1 && 2));  // 2 However, the interesting thing with the && operator is that when an expression is evaluated as “true”, then the expression itself is returned. This is fine, since it counts as “true” in logical expressions, but also can be used to return that value when you care to do so. This explains why, somewhat surprisingly, 1 && 2 returns 2 (whereas you might it expect it to return true or 1).

// console.log(false == '0')   // true
// console.log(false === '0')  // false

// ----------------------------------------------------

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };
// var stoleSecretIdentity = hero.getSecretIdentity;
// console.log(stoleSecretIdentity()); // undefiend 
// console.log(hero.getSecretIdentity());  // john doe
// The first console.log prints undefined because we are extracting the method from the hero object, so stoleSecretIdentity() is being invoked in the global context (i.e., the window object) where the _name property does not exist.

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();  // undefine Neither 21, nor 20, the result is undefined . It’s because JavaScript initialization is not hoisted.

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// } // It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.

// console.log(1 < 2 < 3); // The first statement returns true which is as expected.
// console.log(3 > 2 > 1); // The second returns false because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false.

// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a[6]); // It will not crash. The JavaScript engine will make array slots 3 through 9 be “empty slots.” Here, a[6] will output undefined

// typeof undefined == typeof NULL? //The expression will be evaluated to true, since NULL will be treated as any other undefined variable.


// console.log(typeof typeof 1); // string  typeof 1 will return "number" and typeof "number" will return string.
// console.log(typeof typeof '1'); // string 

// How do you clone an object?
// var obj = {a: 1 ,b: 2}
// var objclone = Object.assign({},obj);
// Now the value of objclone is {a: 1 ,b: 2} but points to a different object than obj.

// let x = true
// let count =1;
// setInterval(() => {
//     if (x) {
//         console.log(count++)
//     }
// }, 200) // 1,2,3 ......

// let x = true;
// let count = 1;
// const intervalId = setInterval(() => {
//     if (x) {
//         console.log(count++);
//         if (count > 100) {
//             clearInterval(intervalId); // Clear the interval when count reaches 100
//         }
//     }
// }, 1000);

// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// let x = 6+3 +'3';
// console.log(x);

// function runFunc(){
//     console.log("1" + 1);
//     console.log("A" - 1);
//     console.log(2 + "-2" + "2");
//     console.log("Hello" - "World" + 78);
//     console.log("Hello"+ "78");
//   }
//   runFunc();    // 11 NaN 2-22 NaN Hello78

// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};
// console.log(x[y]);

// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
//   func1();   // output 2 12

// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }
//   func2();   // output 3 3 3

// console.log(1 == '1'); 		// true
// console.log(1 == [1]); 		// true
// console.log(1 == true); 	    // true
// console.log(0 == ''); 		// true
// console.log(0 == '0'); 		// true
// console.log(0 == false); 	// true

// console.log(null == null); // true
// console.log(null === null); // true
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// var a=3;
// var b=a++;
// console.log('b........................',b);
// var c=++a;
// console.log('c...........',c);  // 
// console.log(a,b,c) //5 3 5

// let x = "hello, world!";
// let y = "string";
// console.log(y === typeof(x)); // true

// let x = [3,3];
// let y = x[0] + x[1];
// console.log(y); // 6

// const num = [1,2,3];
// num.push(4);
// num.pop();
// num.push(4);
// console.log(num.length); // 4

// let x = 'lerem';
// let y = x[3].toUpperCase();
// console.log(y); // E

// const print = console.log;
// print('amit yadav'); // amit yadav

// let count =5;
// count += ++count;
// console.log(count); // 11

// var a = "Scaler";
// var result = a.substring(2, 4);
// console.log(result); // al

// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//    })(); // 2 4 3 1

// console.log(0.1 + 0.2 === 0.3); // false 
// console.log(typeof NaN === "number"); // true

// let x = "abc";
// let y = [...x]
// console.log(y);      // [ 'a', 'b', 'c' ]

// let a = 10;
// if (a === 10){
//     let a =20;
//     console.log('inner output :',a);    // inner output : 20
// }
// console.log('outer output :',a);        // outer output : 10

// var a = 10;
// if (a === 10){
//     var a =20;
//     console.log('inner output :',a);    // inner output : 20
// }
// console.log('outer output :',a);     // outer output : 20

// let x = [1,2,3]
// x.push(...[4,5])
// console.log(x);      // [ 1, 2, 3, 4, 5 ]

// let arr = [1, 2, 3, 3, 4, 5, 5, 6];
// let uniqueArr = Array.from(new Set(arr));
// console.log(uniqueArr);

// let x = true
// console.log(!x);    // false
// console.log(!!x); // true

// let x = (a,b) => a%b;
// let y = x(9,3);
// console.log(y);     // 0

// console.log(user); //undefined
// var user =10; // Value is undefined, type is undefined

// console.log(user); //undefined
// var user =10; // Value is undefined, type-++- is undefined

// var user = null;
// console.log(typeof user); //object

// let a = new Set([1,2,3])
// console.log(a.size);

// let x=0
// console.log(x++) // 0
// console.log(++x)  // 0 2

// console.log("2">"12"); // true
// Note:-
// The comparison > is used with strings, so JavaScript performs a character-by-character comparison starting from the left.
// The comparison starts with the first characters of both strings, which are '2' and '1'.
// In Unicode, the character '2' has a higher code point than '1'.
// Therefore, in this comparison, '2' is considered greater than '1', resulting in the expression "2" > "12" being evaluated as true.

// console.log([]+{}); // [object object]
// Note:-
// When you use the + operator between an empty array [] and an empty object {}, JavaScript tries to convert both the array and the object into strings and then performs string concatenation.
// The empty array [] gets converted to an empty string "", and the empty object {} gets converted to "[object Object]" when coerced to a string (which is the default string representation of an object in JavaScript).

// console.log("1"- -"1"); // 2
// Note :-
// "1" is a string representing the number 1.
// The - operator in front of the second "1" is not a subtraction operation but rather a unary negation (the minus sign before a single operand).
// JavaScript attempts to convert the strings to numbers and perform the operation.
// - - "1" can be interpreted as -(-1), which resolves to 1 (because the unary negation of -1 is 1).
// Therefore, console.log("1" - - "1") simplifies to 1 - (-1), resulting in 2.

// const x = 10;
// function foo() {
//   console.log(x);
//   const x = 20;
// }
// foo();   //  ReferenceError: Cannot access 'x' before initialization

// What will be the output of the following code? console.log(3 === 3 === 3);
// a) Error    b) true     c)) false       d) undifine 
// Note :- 
// 3 === 3 is evaluated first. This comparison 3 === 3 is true because 3 is strictly equal to itself.
// Then, the expression becomes true === 3.
// However, JavaScript's comparison operators follow left-to-right associativity and evaluate operands one at a time.
// Now, when JavaScript tries to compare true === 3, it attempts to compare a boolean (true) with a number (3). The === operator checks for both value and type equality.
// This comparison will result in false because true (boolean) is not strictly equal to 3 (number).
// Therefore, the output of the code console.log(3 === 3 === 3); will be false.

// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory