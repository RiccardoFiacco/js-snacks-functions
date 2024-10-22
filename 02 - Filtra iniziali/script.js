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

function getName(array, letter){
    let filteredArray = [];
    array.map((el)=>{
        let app = el.toLowerCase();   
        if(app[0]===letter){
                filteredArray.push(el);
            }
        }
    )
    return filteredArray;
}


// Invoca la funzione qui e stampa il risultato in console
let result = takeName(names, 'a');
console.log(result);
let result2 = getName(names, 'l');
console.log(result2);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]