/* 
Ejercicio #4: Programar el juego del "Número Mágico" 
en el que se define un número y el usuario trata de adivinarlo,
si el número que ingresó el usuario es menor, imprimir la pista "El número mágico es mayor", 
si el número que ingresó el usuario es mayor imprimir la pista "El número mágico es menor",
*/

let nAleatorio = parseInt(Math.random()*(100-1)+1); // Declaro numero aleatorio entre 1 y 100
let intentos=0; // Declaro variable que mostrara los intentos...
//console.log(`numero generado ${nAleatorio}`); // muestro en consola el numero generado

/*
    Creo el bucle do-while para que pida un numero desde un inicio e incremente los intentos en 1..
    ademas hago las comparaciones de si el numero introducido es mayor o manor que el aleatorio
*/
do{
    intentos++;
    var numU = parseInt(prompt(`Intento: ${intentos} - Ingresa un numero: `));
    
    if(numU<nAleatorio){
        document.write(`Ingreso: ${numU} - El numero magico es mayor`);
    }else if(numU>nAleatorio){
        document.write(`Ingreso: ${numU} - El numero magico es menor`);
    }
}while(numU!=nAleatorio); // condicion: mientras el numero introducido sea diferente al aleatorio se repitira 

console.log(`Felicidades adivinaste el numero: ${nAleatorio} en ${intentos} intentos.`); // imprimo que adivino y el numero de intentos.