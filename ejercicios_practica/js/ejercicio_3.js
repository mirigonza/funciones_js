"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada
function generarInvitados(){
    let nombre1 = prompt("Ingrese el primer nombre");
    let nombre2 = prompt("Ingrese el segundo nombre");
    let nombre3 = prompt("Ingrese el tercer nombre");
    console.log(`Se han ingresado los nombres ${nombre1} , ${nombre2} y ${nombre3}`);
}

generarInvitados();