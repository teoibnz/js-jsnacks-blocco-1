
let sum = 0;

for (let i= 0; i < 10; i++) {
    const inputNumber = parseInt( prompt("inserisci un numero"));
    console.log(inputNumber);
    sum += inputNumber;
}

console.log(sum);