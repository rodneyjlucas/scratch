// Negative Zero / -0
// https://medium.com/coding-at-dawn/is-negative-zero-0-a-number-in-javascript-c62739f80114
// +0 is the same as 0

//
// Comparing +0 and -0
// == and === will equal
console.log(+0 == -0);
console.log(-0 === +0)




//
// Creating Negative Zero
//

// positive zero is divided by negative number
console.log(+0/-37) 
console.log(+0/-Infinity) 


// using Infinity 
console.log(1/+0 === Infinity) // true
console.log(1/-0 === -Infinity) // true

console.log(-1/+0 === -Infinity) // true
console.log(-1/-0 === Infinity) // true


// Best way to tell the difference 
console.log(Object.is(+0,-0)) // false

