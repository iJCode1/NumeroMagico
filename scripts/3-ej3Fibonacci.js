// Ejercicio #3: Imprimir la sucesión fibonacci el número de veces que indicó el usuario.

let numbers = [0,1]; // Declaro los numeros iniciales de dicha Sucesion...

let len = parseInt(prompt("Cuantos numeros deseas ver?: ")); // Pido la dimension de dicha susecion

/*
    Esta parte es la mas importante debido a que es la parte en donde hago la sucesion...
    Primeramente creo un For el cual empezara desde 0 y terminara hasta que la variable i sea menor al numero ...
    ... que ingreso el usuario como final de la sucesion.

    Posteriormente hago una suma dentro, donde sumo el valor en la posicion i + la posicion i+1.
    ese valor (nuevo) lo guardo en la posicion del arreglo en i+2.
*/

for(let i=0;i<len;i++){
    suma = numbers[i]+numbers[i+1];
    numbers[i+2]=suma;
}

// Recorro mi arreglo con el forEach, utilizando una Arrow Function.

numbers.forEach((ele => document.write("<h3>"+ele+"</h3>")));