/**
 * 19 + JavaScript Shorthand Coding Techniques
 * https: //www.sitepoint.com/shorthand-javascript-techniques/
 * 
 */

 console.log("==> JavaScript Shorthand Coding Techniques  <==");

 // [ 1 ] The Ternary Operator :: if..else statement in just one line.
 
 let x = 20;
 const answer = x > 10 ? 'greater than 10' : 'less than 10';

 // output
 console.log("{1} (const answer = x > 10 ? 'greater than 10' : 'less than 10';) ");
 console.log("result:: "+ answer);


// [ 2 ] Short-circuit Evaluation Shorthand
// When assigning a variable value to another variable, you may want to ensure that the source variable is not null, undefined or empty.

let variable1 = 'Hello';
let variable2 = variable1 || '';
console.log(variable2); // prints Hello


// [ 3 ]  Declaring Variables Shorthand

let a = "hi", b, c = 5.5;
console.log(a, b, c);