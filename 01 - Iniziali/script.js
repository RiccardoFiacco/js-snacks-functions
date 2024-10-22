/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function takeFirstLetter(array){
    let firstLetterArray = [];
    let firstLetter;
    for(let i=0; i< array.length; i++){
        if(isString(array[i])){
            firstLetter = array[i].charAt(0);
            firstLetterArray.push(firstLetter)
        }else{
            let msg ="errore: il "+ i +" valore non è una stringa";
            return msg;
        }
        
    }
    return firstLetterArray
}

function isString(string){
    if(typeof string === 'string'){
        return true;
    }else{
        return false; 
    }
}
//seconda soluzione

function getFirstLetter(array){
    return array.map((el)=>el[0])
}
// Invoca la funzione qui e stampa il risultato in console
let result = takeFirstLetter(names);
console.log(result);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]