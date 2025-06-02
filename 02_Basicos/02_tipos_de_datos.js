/*
    Tipos de datos primitivos en JavaScript
    - number: 10, -20, 30.5
    - string: 'Hola', "Hola", `Hola`
    - boolean: true, falseq
    - undefined: undefined
    - null: null
    - bigint: 10n
    - symbol: Symbol('id')
*/

// typeof: nos permite saber el tipo de dato de una variable
let name = 'Juan';
let age = 30;
let isStudent = true;
let address;
let city = null;
let phoneNumber = 123456789n;
let id = Symbol('id');

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof city);
console.log(typeof phoneNumber);
console.log(typeof id);
