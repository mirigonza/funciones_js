/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/



function promedio(a, b, c, d, e) {
    alert(`El promedio de los numeros ${a},  ${b}, ${c} , ${d} y ${e} es: ${(a + b + c + d+ e) / 2}`);
    console.log(`El promedio de los numeros ${a},  ${b}, ${c} , ${d} y ${e} es: ${(a + b + c + d+ e) / 2}`);
}

promedio(5, 3, 2, 6, 7);