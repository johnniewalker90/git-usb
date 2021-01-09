//1. Variables
//1.1 var
var nombre; // variable creada
var apellido;
var edad;

nombre = "Shoon"; // cadena de texto
apellido = "Mondragon";
edad = 37; // declarado como número

console.log(nombre)
console.log(apellido)
console.log(edad) /* cargar en la consola */

//############################################


var nombre01,
    apellido01,
    edad01;

nombre01 = "Jonathan";
apellido01 = "Lara";
edad01 = 100;

console.log(nombre, apellido, edad);
console.log(nombre01, apellido01, edad01);


//############################################


var nombreProfesor = "Bastian";
console.log(nombreProfesor);


//1.2 let

let nombreAlumno = "Shoon"; // toma variable 
console.log(nombreAlumno);
nombreAlumno = "Johnny"
console.log(nombreAlumno);

//1.3 const

const nombreAlumno01 = "Mondra";
console.log(nombreAlumno01);

// 2.Datos
// 2.1 números

let precio = 32;
console.log(precio);

// 2.2 string
precio = "32";
console.log(precio);

// 2.3booleanos

precio = true;
console.log(precio);


// 3. Operadores
/* introduccón a funciones*/
console.clear(); //limpiar consola


const numero1 = 20,
    numero2 = 30,
    numero3 = "10",
    numero4 = 10.50,
    numero5 = -10.50;

let resultado;

//suma
resultado = numero1 + numero2;

//resta
resultado = numero4 - numero5;

//multiplicar
resultado = numero2 * numero4;

console.log(resultado);