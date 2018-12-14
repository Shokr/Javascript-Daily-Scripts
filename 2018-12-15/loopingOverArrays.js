/**
 *
 * @name: Looping over arrays
 * @author: MuhammedShokr
 * @description: There’s a few methods for looping over arrays in Javascript. We’ll start with the classical ones and move towards additions made to the standard.
 */

console.log('===while====0=======')

// [1] while
let index0 = 0
const array0 = [1, 2, 3, 4, 5, 6]

while (index0 < array0.length) {
  console.log(array0[index0])
  index0++
}

console.log('===for [classical]=====1======')

// [2] for [classical]
const array1 = [1, 2, 3, 4, 5, 6]
for (let index1 = 0; index1 < array1.length; index1++) {
  console.log(array1[index1])
}

console.log('====forEach=====2=====')

// [3] forEach
const array2 = [1, 2, 3, 4, 5, 6]

array2.forEach(function (current_value, index2, array2) {
  console.log(`At index ${index2} in array ${array2} the value is ${current_value}`)
})

console.log('======map====3====')

// [4] map ::  applying a function over every element and then returning the new array.
const array3 = [1, 2, 3, 4, 5, 6]
const square = x => Math.pow(x, 2)
const squares = array3.map(square)
console.log(`Original array: ${array3}`)
console.log(`Squared array: ${squares}`)

console.log('===reduce=======4====')

// [4] reduce :: The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const array4 = [1, 2, 3, 4, 5, 6]
const sum = (x, y) => x + y
const array_sum = array4.reduce(sum, 0)
console.log(`The sum of array: ${array4} is ${array_sum}`)

console.log('===filter=======5====')

// [5] filter:: Filters elements on an array based on a boolean function.
const array5 = [1, 2, 3, 4, 5, 6]
const even = x => x % 2 === 0
const even_array = array5.filter(even)
console.log(`Even numbers in array ${array5}: ${even_array}`)

console.log('===every=======6====')

// [6] every:: Got an array and want to test if a given condition is met in every element?
const array6 = [1,2,3,4,5,6];
const under_seven = x => x < 7;

if (array6.every(under_seven)) {
  console.log('Every element in the array is less than 7');
} else {
  console.log('At least one element in the array was bigger than 7');
}

console.log('===some=======7====')

// [7] some:: Test if at least one element matches our boolean function.
const array7 = [1,2,3,10,5,6,4];
const over_seven = x => x > 7;

if (array7.some(over_seven)) {
  console.log('At least one element bigger than 7 was found');
} else {
  console.log('No element bigger than 7 was found');
}


console.log('======================')
console.log('==>shokr@github.com<==')
console.log('======================')