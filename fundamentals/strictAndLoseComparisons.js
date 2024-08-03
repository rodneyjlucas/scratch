// Primitive types - typeof operator

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

