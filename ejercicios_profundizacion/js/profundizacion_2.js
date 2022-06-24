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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/

let cantidad = prompt("ingrese si ingresaran 1 , 2 o 3 invitados");

function generarInvitados(){
    if (cantidad == 1){
        let nombre1 = prompt("Ingrese el nombre del invitado")
        alert(`el nombre del invitado es ${nombre1}`);
    } else if (cantidad == 2){
        let nombre2 = prompt("ingrese el nombre del primer invitado");
        let nombre3 = prompt("ingrese el nombre del segundo invitado");
        alert(`el nombre del invitado es ${nombre2} y ${nombre3}`);
    } else if (cantidad == 3){
        let nombre4 = prompt("ingrese el nombre del primer invitado");
        let nombre5 = prompt("ingrese el nombre del segundo invitado");
        let nombre6 = prompt("ingrese el nombre del tercer invitado");
        alert(`el nombre del invitado es ${nombre4} , ${nombre5} y ${nombre6}`);
    } else {
        alert("debe ingresar una cantidad correcta");
    }

    }
   

generarInvitados();