
const numbers = [];


for ( let i = 0; i > 7 ; i++) {
    let userInputNumbers = parseInt ( prompt('inserisci un numero'));

    if (userInputNumbers % 2 !== 0) {
        numbers.push(userInputNumbers);
        console.log("il numero è pari verrà inserito nell'array");
    } 
};

console.log(numbers);


