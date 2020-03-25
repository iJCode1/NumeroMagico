//Ejercicio #1 : Tomando como entrada un número entero, imprimir si es par o impar.

    /*
        Primeramente le pedire al usuario un numero, dicho numero lo guardare en una variable.
        pero le aplicare un parseo para que no se guarde como texto, si no como numero.
    */

let number = parseInt(prompt("Ingresa un numero: "));

    /*
        Creare un condicional para saber si el numero introducido es par o impar.
    */

if(number%2==0){ // Operado % es para calcular el residuo de la division "number/2" si es igual a 0 es par.
    console.log(`${number} es un numero par!`);
}else{ // Si el residuo no es igual a 0 estamos hablandp de un numero Impar.
    console.log(`${number} es un numero impar!`);
}