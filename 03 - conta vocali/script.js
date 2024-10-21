/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vowelsCounter(string){
   if(typeof string === 'string'){
    let counter = 0;
        for(let i=0; i<word.length; i++){
            if(string.charAt(i) === 'a'){
                console.log('vocale');
            }
        }
   }else{
        return 
   }
}

// Invoca la funzione qui e stampa il risultato in console
vowelsCounter(word)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)