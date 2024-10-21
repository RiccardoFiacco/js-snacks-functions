/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
let greeting = (string)=>{
    const date = new Date();
    const hour = date.getHours();
    let msg;
    if(typeof string === 'string'){
        if(hour>6  && hour<=13){
            msg = "buongiorno "+string;
        }else if(hour > 13 && hour<= 17){
            msg = "buon pomeriggio "+string;
        }else if( hour > 17 && hour <= 23){
            msg = "buonasera "+string;
        }else if( hour > 23 || hour>= 0){
            msg = "buonanotte "+string;
        }
    }else{
        msg="non è stata inserita una stringa";  
    }
    return msg;
}

// Invoca la funzione qui e stampa il risultato in console
let result = greeting(name);
console.log(result);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.