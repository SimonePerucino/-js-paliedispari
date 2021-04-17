

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt("scegli pari o dispari")
if (sceltaUtente != "pari" && sceltaUtente != "dispari") {

    var sceltaUtente = prompt("devi scegliere pari o dispari")
}

console.log("hai scelto " + sceltaUtente)
var NumeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"))
if (NumeroUtente <= 0 || NumeroUtente >= 6) {
    console.log("devi scegliere un numero tra 1 e 5")
} else {
    console.log("hai scelto il numero " + NumeroUtente)
    var numeroComputer = NumeroRandom();
    console.log("il numero del computer è " + numeroComputer)
    var somma = numeroComputer + NumeroUtente;
    console.log("la somma è " + somma)
    var risultato = pariDispari(somma);
    console.log("il risultato è " + risultato)
    if (risultato === "pari" && sceltaUtente === risultato) {
        console.log("hai vinto")
    } else {
        console.log("il computer ha vinto")
    }
}



//  Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function NumeroRandom() {
    var numeroComputer = Math.floor(Math.random() * 6);
    return numeroComputer
}

function pariDispari(num1) {
    if (num1 % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}