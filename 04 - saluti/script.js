/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
let greeting = (string)=>{
    if(typeof string === 'string'){
        return "ciao "+string;
    }else{
        let msg ="errore valore non stringa";
        return msg; 
    }
}

// Invoca la funzione qui e stampa il risultato in console
let result = greeting(name);
console.log(result);


//Risultato atteso se si passa 'Mario': // ciao Mario