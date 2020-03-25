// Ejercicio #2 : Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos.

    /*
        Primeramente realizare la solicitud de 2 numeros y los guardare dentro de variables cada uno.
        tambien realizare un parseo para que el dato se guarde como numero.
    */

let n1 = parseFloat(prompt("Ingresa el numero 1: "));
let n2 = parseFloat(prompt("Ingresa el numero 2: "));

    /*
        Ahora realizare las operaciones para mostrarselas al usuario...
    */
console.log(`Los numeros son: n1: ${n1} y n2: ${n2}`);
console.log(`La suma es: ${n1+n2}`);
console.log(`La resta es: ${n1-n2}`);
console.log(`La multiplicación es: ${n1*n2}`);
console.log(`La división es: ${n1/n2}`);