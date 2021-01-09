//Ejercicio 1 - suma

function suma_dos_numeros() {
    var numero01, numero02, resultado;


    //en el alert escribirá la frase "suma simple..." - se pone "number" para que lo reconozca como numero
    numero01 = Number(prompt("Suma simple, ingresar el primer número: "));


    numero02 = Number(prompt("Ingresar el segudo número: "));

    resultado = numero01 + numero02;


    // se concatena con una "coma" 
    alert("el resultado de la suma es:" + resultado);
}


//Ejercicio 2 - positivo-negativo

function positivoOnegativo() {
    var numero01;

    numero01 = Number(prompt("Ingresa un número, determinaremos si es positivo o negativo"));
    if (numero01 >= 0) {
        alert("El número es POSITIVO");
    } else {
        alert("El número es NEGATIVO");
    }
}

//Ejercicio 3 - calculadora

function calculadora() {
    var div_num1, div_num2, mult_num1, mult_num2, opcion_operacion, resta_num1, resta_num2, resultado, suma_num1, suma_num2;


    opcion_operacion = Number(prompt("Calculadora simple: 1.suma, 2.resta, 3.multiplicación, 4.división \n Escribe el número de la operación que deseas realizar"));
    switch (opcion_operacion) {
        case 1:
            suma_num1 = Number(prompt("Elegiste suma: ingresa en primer número"));
            suma_num2 = Number(prompt("ingresa en segundo número"));
            resultado = suma_num1 + suma_num2;
            alert("El resultado de la suma es:" + resultado);
            break;
        case 2:
            resta_num1 = Number(prompt("Elegiste resta: ingresa en primer número"));
            resta_num2 = Number(prompt("ingresa en segundo número"));
            resultado = resta_num1 - resta_num2;
            alert("El resultado de la resta es:" + resultado);
            break;
        case 3:
            mult_num1 = Number(prompt("Elegiste multiplicación: ingresa en primer número"));
            mult_num2 = Number(prompt("ingresa en segundo número"));
            resultado = mult_num1 * mult_num2;
            alert("El resultado de la multiplicación es:" + resultado);
            break;
        case 4:
            div_num1 = Number(prompt("Elegiste división: ingresa en primer número"));
            div_num2 = Number(prompt("ingresa en segundo número"));
            resultado = div_num1 / div_num2;
            alert("El resultado de la división es:" + resultado);
            break;
        default:
            alert("No seleccionaste una opción válida, vuelve a intentar");
    }
}

//mes del calendariofunction

function mesCalendario() {
    var numeromes;

    numeromes = Number(prompt("Ingrese un número entre 1 al 12 para visualizar el mes"));
    switch (numeromes) {
        case 1:
            alert("Elegiste el número 1 \n El mes es: ENERO ");
            break;
        case 2:
            alert("Elegiste el número 2 \n El mes es: FEBRERO");
            break;
        case 3:
            alert("Elegiste el número 3 \n El mes es: MARZO");
            break;
        case 4:
            alert("Elegiste el número 4 \n El mes es: ABRIL");
            break;
        case 5:
            alert("Elegiste el número 5 \n El mes es: MAYO");
            break;
        case 6:
            alert("Elegiste el número 6 \n El mes es: JUNIO");
            break;
        case 7:
            alert("Elegiste el número 7 \n El mes es: JULIO");
            break;
        case 8:
            alert("Elegiste el número 8 \n El mes es: AGOSTO");
            break;
        case 9:
            alert("Elegiste el número 9 \n El mes es: SEPTIEMBRE");
            break;
        case 10:
            alert("Elegiste el número 10 \n El mes es: OCTUBRE");
            break;
        case 11:
            alert("Elegiste el número 11 \n El mes es: NOVIEMBRE");
            break;
        case 12:
            alert("Elegiste el número 12 \n El mes es: DICIEMBRE");
            break;
        default:
            alert("Fallaste, número no válido, intenta de nuevo", '<BR/>');
    }
}

//suma de numero pares e impares

function paresImpares() {
    var i, suma_impar, suma_par;
    i = 0;
    suma_par = 0;
    suma_impar = 0;
    while (i < 101) {
        if (i % 2 == 0) {
            suma_par = suma_par + i;
        } else {
            suma_impar = suma_impar + i;
        }
        i = i + 1;
    }
    alert("La suma de los primeros números PARES entre 0 y 100 es: " + suma_par + "\nLa suma de los primeros números IMPARES entre 0 y 100 es: " + suma_impar);
}

//tabla de multimplicar

function tablaMultiplicar() {
    var contador01, numero01;
    numero01 = Number(prompt("Ingresa un número para generar su tabla de multiplicar"));
    contador01 = 1;
    do {
        alert(numero01 + " x " + contador01 + " = " + (numero01 * contador01) + "\n");
        contador01 = contador01 + 1;
    } while (contador01 != 11);
}

//salario semanal

function salarioSemanal() {
    var horas, salario, salariobase;
    horas = Number(prompt("Calcularemos el salario semanal de un trabajador \n Ingresa el número de horas que trabaja a la semana"));
    salariobase = Number(prompt("Ingresa el salario base por hora"));
    salario = salariobase * horas;
    alert("El salario semanal será de: $" + salario + " USD");
}

//jubilación

function jubilacion() {
    var anosaportacion, edad, genero, persona;
    persona = 1;
    do {
        anosaportacion = Number(prompt("Ingresando 3 datos sabremos si tiene derecho a jubilación \n \nDatos de persona " + persona + "\n¿Cuántos años lleva aportando (ingresa un número entero)"));
        edad = Number(prompt("¿Qué edad tiene actualmente (ingresa un número entero)"));
        genero = Number(prompt("¿Género Femenino (presiona 1), género masculino (presiona 2)"));
        switch (genero) {
            case 1:
                if (anosaportacion >= 20 && edad >= 60) {
                    alert("SI tiene derecho a jubilación");
                } else {
                    alert("NO tiene derecho a jubilación");
                }
                break;
            case 2:
                if (anosaportacion >= 20 && edad >= 65) {
                    alert("SI tiene derecho a jubilación");
                } else {
                    alert("NO tiene derecho a jubilación");
                }
                break;
            default:
                alert("No escribiste una letra válida para género, intenta nuevamente");
        }

        alert("Siguiente consulta");
        persona = persona + 1;
    } while (persona !== 11);
    alert("Alcanzó el límete de personas, fin del programa");
}