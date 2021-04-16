var datoUtente = prompt("inserisci una parola");



function Palidrmo(dato) {

    var parolaDivisa = dato.split('');
    // console.log(parolaDivisa);
    
    var parolaDivisa = parolaDivisa.reverse();
    // console.log(parolaDivisa);
    
    var parolaInvertita = parolaDivisa.join('');
    // console.log(parolaInvertita);

    if (dato === parolaInvertita) {
        return true;
    } else {
        return false;
    }
}

var risultato = Palidrmo(datoUtente);
if(risultato === true){
    console.log("la parola è palindroma")
} else {
    console.log("la parola non è palindroma")
}
