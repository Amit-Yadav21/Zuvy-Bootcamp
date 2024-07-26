// ========================================================== find fibonachi_number 1 to n ?
// const input =require('readline-sync')
// const num = input.questionInt('Enter your number -:')
// let x=0
// let y=1
// let z=0
// while (z<=num){
//     console.log(z);
//     x=y
//     y=z
//     z=x+y
// }

// let x=0
// let y=1
// let z=0
// for (let i=0 ; i<num; i++){
//     console.log(z);
//     x=y
//     y=z
//     z=x+y
// }

// function generateFibonacci(n) {
//     const sequence = [0, 1];
//     for (let i = 2; i < n; i++) {
//       sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence;
//   }
//   console.log(generateFibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

// ====================================================  find fibonachi_number  Not 1 to n_number ?

// const input =require('readline-sync')
// const a = input.questionInt('Enter your number -:')
// let x=0
// let y=1
// let z=0
// let feb_no=[]
// while(z<=a){ 
//     // console.log(z);
//     feb_no.push(z)
//     x=y
//     y=z
//     z=x+y
// }
// console.log("Febonacci_series:-",...feb_no); 

// let not_feb=[]
// for(let i=0;i<=a;i++){
//     if(!feb_no.includes(i)){
//         // console.log(i);
//         not_feb.push(i)
//     }
// }
// console.log("Not feb_series:-",...not_feb);

// ============================================== find perticuler fibonachi series ?

// const input =require('readline-sync')
// const num = input.questionInt('Enter your number -:')
// function getNthFibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     let a = 0;
//     let b = 1;
//     let temp;
//     for (let i = 2; i <= n; i++) {
//         temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return temp;
// }
// const thirdFibonacci = getNthFibonacci(num);
// console.log(thirdFibonacci); 

// ===================================================== check fibonachi_number yes/no ?

// const input =require('readline-sync')
// const num = input.questionInt('Enter your number -:')

// let x=0
// let y=1
// let z=0
// while (z<num){
//     x=y
//     y=z
//     z=x+y
// }
// if(z!=num){
//     console.log('no');
// }
// else{
//     console.log('yes');
// }

// const input =require('readline-sync')
// const num = input.questionInt('Enter your number -:')
// let x=0
// let y=1
// let z=0
// for (let i=0; i<num; i++){
//     // console.log(z);
//     x=y
//     y=z
//     z=x+y
// }
// if (z!=num){
//     console.log('not');
// }
// else{
//     console.log('yes');
// }


// ================================================================= between fibonachi number ?

// const int = require('readline-sync')
// const data = int.questionInt("Enter your from where number :-")
// const data1 = int.questionInt("Enter your till where number :-")
// let x=0
// let y=1
// let z=0

// while(z <= data1){
//     if(z > data && z < data1){
//         console.log(z);
//     }
//     x=y
//     y=z
//     z=x+y
// }

// const readlineSync = require('readline-sync');
// const data = readlineSync.questionInt("Enter your from where number: ");
// const data1 = readlineSync.questionInt("Enter your till where number: ");
// let x = 0;
// let y = 1;
// let z = 0;
// for (z = 0; z <= data1;) {
//     if (z > data && z < data1) {
//         console.log(z);
//     }
//     x = y;
//     y = z;
//     z = x + y;
// }

// =================================================================== 

// ager function ko console.log me call kiya gaya hai to function ke ander console.log ke jagah per, return likha layega
// ager function ko simple call kiya gaya hai to function ke ander console likha jayega 

// const input =require('readline-sync')
// const num = input.questionInt('Enter your number -:')
// function f (){
//     let x=0
//     let y=1
//     let z=0
//     while (z<num){
//         x=y
//         y=z
//         z=x+y
//     }
//     if(z!=num){
//         console.log('no');
//     }
//     else{
//         console.log('yes');
//     }
// }
// f(num)


// ------------------------------------------------------------

// const input =require('readline-sync')
// const num = input.questionInt('Enter your number -:')

// let serach = num
// let arr = []         
// let a=0
// let b=1
// let c=0
// for (let i=0; i<34; i++){
//     arr.push(c)
//     a=b
//     b=c
//     c=a+b
// }
// if (arr.includes(serach)){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }


// ******************************************************************************  --------- practice .