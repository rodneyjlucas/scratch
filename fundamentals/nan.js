// PRIMITIVE TYPES
// undefined
const undefinedValue = () => { return foo};

// number
let numberValue = 39;

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

// NaN
let nanValue = Number(stringValue);
console.log(Number.isNaN(nanValue));


//////////
// NaN - 
// -- Not A Number
// -- Better to think of it as an INVALID NUMBER

// 0 - zero
// o - lower case alpha "o"
console.log(Number("0o3"));

console.log(Number(numberValue));

// negative 0 - special number value
console.log(Number("-0"));

// a string will give you a NaN
console.log(Number("foo")); 



//////////
// isNaN()
// -- isNaN() is a functional property of global object
// -- this is not reliable and you should use Number.isNaN()
// 


// a valid number will give true: CORRECT
console.log(Number.isNaN(Number('0o35')));

// string  TRUE: CORRECT
console.log(Number.isNaN(Number('foo')));

// Nan is not equal to itself !!!!!!!
console.log(Number.isNaN(stringValue));

// any numeric operation using NaN will produce NaN
console.log(nanValue - 39)

// WTF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Nan is not equal to itself !!!!!!!
// Identity Property does not apply
console.log(nanValue === nanValue);

// WTF !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Number.isNaN will coeriece to a number first.  
console.log(Number.isNaN(stringValue));

