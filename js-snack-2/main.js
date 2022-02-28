const firstInputWord = prompt("inserisci la prima parola").length;
console.log(firstInputWord);
const secondInputWord = prompt("Inserisci la seconda parola").length;
console.log(secondInputWord);

firstInputWord.value ="";
secondInputWord.value ="";

if (firstInputWord.length < secondInputWord.length) {
    console.log("la parola più corta è " +firstInputWord)
} else if (!firstInputWord.length < secondInputWord.length) {
    console.log("la parola più corta è " +secondInputWord)
    } else {
        console.log('Le parole hanno la stessa lunghezza');
};
