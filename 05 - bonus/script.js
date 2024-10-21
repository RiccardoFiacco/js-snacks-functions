/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
let greeting = (string)=>{
    if(typeof string === 'string'){
        return "ciao "+string;
    }else{
        return 
    }
}

// Invoca la funzione qui e stampa il risultato in console
let result = greeting(name);
console.log(result);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.