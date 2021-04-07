// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
//  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// inizio
// Generare 5 numeri random e metterli in un alert.
var numeriMaster = [];

while (numeriMaster.length < 5){

    var numeroGenerato = generanumeri(100);

    if (numeriMaster.includes(numeroGenerato) == false){
    
        numeriMaster.push(numeroGenerato);          
    
    }

}

function generanumeri(max){
    
    return Math.floor(Math.random() *  max) +1 ;

}

console.log(numeriMaster);
alert("START GAME");
alert("Memorizza questi numeri: "+ numeriMaster);

// partire 10 sec di tempo dove poi appare un prompt:

setTimeout(function(){
    
    var mieiNumeri= [];

    for( var i=0; i< numeriMaster.length; i++){
        var thisNumber = numeriMaster[i];
        console.log(thisNumber);

        // l'utente inserice i suoi numeri
        var inserisciNumeri = parseInt(prompt("che numeri Erano? inseriscili ora!"));

        if ( numeriMaster.includes(inserisciNumeri) && mieiNumeri.includes(inserisciNumeri)== 0){
            mieiNumeri.push(inserisciNumeri);
        }
    }

    // stampare i risultati
    alert("Ti Sei Ricordato " + mieiNumeri.length + " numeri Su "+ numeriMaster.length + "  E sono i seguenti: " + mieiNumeri + " ...i numeri da ricordare erano: " + numeriMaster);

} , 10000);
