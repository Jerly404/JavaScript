/* 
    ¿Qué son las variables?
    Son contenedores para guardar información. En JavScript puedes usar 3 formas de declarar variables:

*/

var name = "Xanax";      // Forma antigua (no recomendada)
let age = 18;           // Moderna y segura
const PI = 3.1416;      // Constante (no se puede cambiar)

/*
    ¿Cúando usar let y const?
        - Usa let cuando la variable puede cambiar.
        - Usa const cuando el valor no deve cambiar nunca.
        - Evita var por que tiene un comportamiento confuso (hoisting y ámbito de función).
*/

// Example
let city = "Guadalajara";
console.log(city);      // Guadalajara

city = "Monterrey";
console.log(city);      // Monterrey    

const country = "México";
// country = "Estados Unidos";  // Error: no se puede cambiar el valor de una constante
