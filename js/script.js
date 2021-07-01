/*
Il programma dovrà chiedere all'utente il numero di chilometri che
vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale
del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo
due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/*
1 - Chiedere all'utente i chilometri che vuole percorrere
2 - Chiedere all'utente quanti anni ha
3 - Il costo del biglietto è definito in base ai km (0.21 € al km)
4 - Verificare l'età se è minore di 18 anni (sconto 20%)
5 - Verificare l'età se è maggiore di 65 anni (sconto 40%)
6 - Verificare l'età se è compresa tra 18 e 65 (nessuno sconto)
7 - Stampare il costo del biglietto con un massino di due cifre decimali
*/


var age = parseInt(prompt("Inserisci la tua età"));
var kilometres = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var underage = 17;
var overAge = 65;
var costTicket = 0.21; /*simbolo dell'euro da cercare*/
var ticketStandard = kilometres * costTicket;
var discountUnderage = 0.2;
var discountOverAge = 0.4;

console.log(age);
console.log(kilometres);

/*calcolo per gli sconti sia -18 che +65*/
var saleUnderage = (((ticketStandard * discountUnderage) - ticketStandard) * -1);
var saletOverAge = (((ticketStandard * discountOverAge) - ticketStandard) * -1);



// Validation da verificare meglio quello che stampa su html
var solution1 = document.getElementById('ticket');
solution1.innerHTML = 'Il costo del biglietto è di: ' + saleUnderage;
var solution2 = document.getElementById('ticket');
solution2.innerHTML = 'Il costo del biglietto è di: ' + ticketStandard;
var solution3 = document.getElementById('ticket');
solution3.innerHTML = 'Il costo del biglietto è di: ' + saletOverAge;

if (!isNaN(age)) {
    if (age <= underage) {
        console.log(saleUnderage);
    } else if (age) {
        console.log(ticketStandard);
    } else if (age >= overAge) {
        console.log(saletOverAge);
    }
} else {
    alert('hai inserito numeri non validi');
}

