
let sum = 0;
// con un ciclo creo 10 input dove l'utente dovrà inserire un numero

for (let i= 0; i < 10; i++) {
    const inputNumber = parseInt( prompt("inserisci un numero"));
    console.log(inputNumber);
    sum += inputNumber;
}
// alla fine di ogni ciclo viene sommato il numero inserito a quello di partenza
// alla fine dei cicli verrà mostrata in console la somma di tutti i numeri inseriti

console.log("la somma dei numeri inseriti è " +sum);