// Esto es un comentario en línea. Los comentarios no se ejecutan, se utilizan para explicar el código.

/*
Esto es un comentario de varias líneas.
Puedes escribir en varias líneas y aún así será un comentario.
*/

// 1. Declaración de Variables
// Las variables se usan para almacenar datos.

var nombre = "Santiago"; // 'var' es una forma de declarar variables. Es un tipo de declaración antigua.
let edad = 30; // 'let' es una forma moderna de declarar variables que tiene un alcance de bloque.
const pais = "Colombia"; // 'const' declara una constante, un valor que no puede cambiar.

// 2. Tipos de Datos
// Los datos en JavaScript pueden ser de diferentes tipos.

let numero = 10; // Número (Integer o Decimal)
let texto = "Hola, Mundo"; // Cadena de texto (String)
let verdadero = true; // Booleano (true o false)
let indefinido; // Undefined: una variable declarada pero sin valor asignado.
let nulo = null; // Null: representa la ausencia intencional de un valor.

console.log(numero); // Imprime el valor de la variable 'numero' en la consola.


// 3. Operadores
// Los operadores se usan para realizar operaciones con variables y valores.

let suma = 5 + 3; // Operador de suma
let resta = 10 - 6; // Operador de resta
let multiplicacion = 4 * 2; // Operador de multiplicación
let division = 8 / 2; // Operador de división

// Operadores de comparación
let esIgual = 5 == 5; // Devuelve true porque los valores son iguales.
let esIgualEstricto = 5 === "5"; // Devuelve false porque uno es número y otro es cadena.
let esMayor = 10 > 5; // Devuelve true porque 10 es mayor que 5.
let esMenor = 5 < 10; // Devuelve true porque 5 es menor que 10.


// 4. Condicionales
// Las condicionales permiten ejecutar un bloque de código si se cumple una condición.

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// 5. Bucles
// Los bucles permiten ejecutar un bloque de código repetidamente.

for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

// Mientras (While)
let contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}

// 6. Funciones
// Las funciones son bloques de código reutilizables que realizan una tarea específica.

function saludar(nombre) {
    return "Hola, " + nombre;
}

let saludo = saludar("Santiago"); // Llamada a la función 'saludar'
console.log(saludo);

// 7. Objetos
// Los objetos son colecciones de pares clave-valor.

let persona = {
    nombre: "Santiago",
    edad: 30,
    pais: "Colombia"
};

console.log(persona.nombre); // Accede al valor de la propiedad 'nombre'
console.log(persona["edad"]); // Otra forma de acceder a una propiedad

// 8. Arreglos (Arrays)
// Los arreglos son listas ordenadas de valores.

let numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // Accede al primer elemento del arreglo

// 9. Métodos de Array
// Los arrays tienen métodos incorporados para realizar operaciones comunes.

numeros.push(6); // Agrega un elemento al final del array
console.log(numeros);

numeros.pop(); // Elimina el último elemento del array
console.log(numeros);

numeros.shift(); // Elimina el primer elemento del array
console.log(numeros);

numeros.unshift(0); // Agrega un elemento al inicio del array
console.log(numeros);

// 10. Funciones flecha (Arrow Functions)
// Una forma más corta de escribir funciones.

const sumar = (a, b) => a + b;
console.log(sumar(2, 3)); // Llama a la función flecha
