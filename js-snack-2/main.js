// inserisco due sezioni di input per l'utente dove dovrà inserire due parole

const firstInputWord = prompt("inserisci la prima parola");

const secondInputWord = prompt("Inserisci la seconda parola");


// successivamente creo una condizione che stamperà in console prima la parola più lunga e dopo quella più corta

if (firstInputWord.length < secondInputWord.length) {
    console.log('la parola più lunga è ' + secondInputWord + "la parola più corta è  " +firstInputWord)
} else if (secondInputWord.length < firstInputWord.length) {
    console.log(firstInputWord + "la parola più corta è " +secondInputWord)
};
