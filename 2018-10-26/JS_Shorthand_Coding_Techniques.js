/**
 *  JavaScript Shorthand Coding Techniques
 */

 console.log("==> JavaScript Shorthand Coding Techniques  <==");

 // [ 1 ] The Ternary Operator :: if..else statement in just one line.
 
 let x = 20;
 const answer = x > 10 ? 'greater than 10' : 'less than 10';

 console.log(answer);


// [ 2 ] Short-circuit Evaluation Shorthand
// When assigning a variable value to another variable, you may want to ensure that the source variable is not null, undefined or empty.

let variable1 = 'Hello';
let variable2 = variable1 || '';
console.log(variable2); // prints Hello


// [ 3 ]  Declaring Variables Shorthand

let a = "hi", b, c = 5.5;
console.log(a, b, c);


// [ 4 ] If Presence Shorthand

let z = false;
if (!z) {
    console.log("false")
}

let y = true;
if (y) {
    console.log("True")
}


//

// [ 5 ] JavaScript for Loop Shorthand

ls = [1,2,3,4,5,6,7,8,9,10]

for (let index of ls){
    console.log(index);
}

 // For ..each
ls.forEach(element => {
    console.log(element*10);
});


// [ 6 ] Short - circuit Evaluation  .. assign a default value ( || ==> or )

const dbHost = process.env.DB_HOST || 'localhost';
console.log(dbHost);


// [ 7 ] Decimal base exponents
// For example, 1e7 essentially means 1 followed by 7 zeros.

// All the below will evaluate to true
console.log(1e0 === 1);
console.log(1e1 === 10);
console.log(1e2 === 100);
console.log(1e3 === 1000);
console.log(1e4 === 10000);
console.log(1e5 === 100000);
console.log(1e6 === 1000000);

 
// [ 8 ] Object Property Shorthand || > const obj = { x:x, y:y };
const obj = { x, y};
console.log(obj);


// [ 9 ]  Arrow Functions Shorthand

/** function expression version
const add = function(x, y) {
  return x + y;
};*/ 

// // arrow function version
const add = (x, y) => x + y;
console.log(add(1, 2));


// [ 10 ]  Default Parameter Values

volume = (l, w = 5, h = 4) => (l * w * h);

console.log(volume(2)); //output: 40