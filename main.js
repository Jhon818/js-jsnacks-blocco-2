// // Inserisci un numero, 
// var number = parseInt(prompt("inserisci un numero"));
// // se è pari stampa il numero,
// if (number %2 == 0) {
//     console.log(number);
// }
// //  se è dispari stampa il numero successivo
// else {
//     console.log(number + 1)
// }

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
//  Gatsby vuole generare una falsa lista di invitati.

// var names = ["Giovanni" ,"Alberto","Paolo"];
// var lastNames = ["Rossi","Verdi","Neri"];


// var randomInvited = names[Math.floor(Math.random()*names.length)]+" " + lastNames[Math.floor(Math.random()*lastNames.length)];
// console.log(randomInvited);


// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// var numberInteger = [1,2,3,4,5,6,7,8,9]
// var sum = 0;

// for (var i = 0; i < numberInteger.length; i++){
//     if (i %2 == 1) {
//         sum=sum+i;
//         console.log(sum)
//         }
// }

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var array1 = [1,2,3,4,5];
var array2 = ["nome","cognome","secondonome"];

for (i = 0; i < array1.length; i++) {
    if(array2.length < array1.length) {
        array2.push("terzonome" , "quartonome");
        console.log(array2);
    }
}

