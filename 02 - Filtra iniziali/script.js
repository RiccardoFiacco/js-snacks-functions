/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function takeName(array, letter){
    letter = letter.toUpperCase();
    let filteredArray = [];
    let firstLetter;
    for(let i=0; i< array.length; i++){
        firstLetter = array[i].charAt(0);
        if(firstLetter === letter){
            filteredArray.push(array[i]);
        }  
    }
    return filteredArray
}

// Invoca la funzione qui e stampa il risultato in console
let result = takeName(names, 'a');
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]