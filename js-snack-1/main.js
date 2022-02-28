
// creo due variabili per permettere all'utente di inserire due input numerici
const firstNumber = prompt("inserisci il primo numero");
console.log(firstNumber);
const secondNumber = prompt("Inserisci il secondo numero");
console.log(secondNumber);

// creo una condizione per la quale verrà stampato nella console una frase che dirà qual'è il numero più grande 
if (firstNumber > secondNumber) {
    console.log("il primo è il numero superiore")
} else if (secondNumber > firstNumber) {
    console.log("il secondo è il numero superiore")
} else {
    console.log("i numeri sono uguali");
};