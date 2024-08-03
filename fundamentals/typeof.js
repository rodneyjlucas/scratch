// Primitive types - typeof operator

// PRIMITIVE TYPES
// undefined
let undefinedValue;

// number
let numberValue = 394;

// boolean
let booleanValue = true;

// object
let objectValue = {};

// symbol
let symbolValue = Symbol;

// null
let nullValue = null;

// string
let stringValue = "my very old dog";

// bigInt
let bigIntValue= BigInt(9007199254740991);



//////////
// typeof operator always returns a string
//;
console.log(typeof undefinedValue);

// string
console.log(typeof stringValue);

// boolean
console.log(typeof booleanValue);

// object
console.log(typeof objectValue);

// symbol
console.log(typeof symbolValue);

// number
console.log(typeof numberValue);

// bigint
console.log(typeof bigIntValue);

// 
// null !!!!!!!!!!!!
// !!!!!!! ARG !!!!!!!!
// null returns 'object' and not null
v = null
console.log(typeof nullValue);

// number
v = 1;
console.log(typeof numberValue);

// bigInt
v = 42n;
console.log(typeof bigIntValue);


// NOT TYPES but interesting or used often

// array
// use Array.isArray() instead
v = [1,2,3];
console.log(typeof v);

// function
v = function() {
};
console.log(typeof v);

console.log(3 ** 2);

// peter is not declared but typeof is ok with this
console.log(typeof peter)

const truthy_values = [
    false,
    0,
    ``,
    '',
    "",
    null,
    undefined,
    NaN,
    '0',
    'false',
    [],
    {},
    function() {}
  ].filter(Boolean);
  
  // Filter out falsy values and log remaining truthy values
  console.log(truthy_values);