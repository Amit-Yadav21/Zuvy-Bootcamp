// ------------------------------------------------------------------------------- callback function ?
var inp = require('readline-sync')
function callbackFunction(name) {
    console.log("Hello " + name);
  }
  function outerFunction(callback) {
    let name = inp.question("Please enter your name :- ");
    callback(name);
  }
  outerFunction(callbackFunction);
  
// --------------------------------------------------------
amit()
function amit(){
    console.log('my name is yadav'); // trun the code 
}

console.log(declearFunction());
const declearFunction = function(){
    console.log('my city is jaunpur'); // Cannot access 'declearFunction' before initialization
}