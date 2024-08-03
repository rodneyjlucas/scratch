
// PRIMITIVE TYPES (8)
// Primitive types with typeof operator

// undefined
let undefinedValue;
console.log(typeof undefinedValue);

// number
let numberValue = 39;
console.log(typeof numberValue);

// boolean
let booleanValue = true;
console.log(typeof booleanValue);

// object
let objectValue = {};
console.log(typeof objectValue);

// symbol
let symbolValue = Symbol;
console.log(typeof symbolValue);

// null
let nullValue = null;
console.log(typeof nullValue);

// string
let stringValue = "my very old dog";
console.log(typeof stringValue);

// bigInt
let bigIntValue= BigInt(9007199254740991);
console.log(typeof bigIntValue);


// 
// null !!!!!!!!!!!!
// !!!!!!! ARG !!!!!!!!
// null returns 'object' and not null
v = null
console.log(typeof nullValue);


// NOT TYPES but interesting or used often

// array
// use Array.isArray() instead
v = [1,2,3];
console.log(typeof v);

// function
v = function() {
};
console.log(typeof v);


// peter is not declared but typeof is ok with this
console.log(typeof peter)




