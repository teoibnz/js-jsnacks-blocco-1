
const userNumber = prompt("inserisci un numero a 7 cifre");
console.log(userNumber);

let sum = 0;

for ( let i = 0; i < userNumber.length; i++) {
    sum += parseInt(userNumber.charAt(i));
    
}; 


console.log(sum);