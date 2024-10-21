/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function takeFirstLetter(array){
    let firstLetterArray = [];
    let firstLetter;
    for(let i=0; i< array.length; i++){
        firstLetter = array[i].charAt(0);
        firstLetterArray.push(firstLetter)
    }
    return firstLetterArray
}
// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]