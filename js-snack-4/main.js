// creo un array contenente la lista di invitati alla festa
const invitedList = [
    'matteo', 
    'marco', 
    'francesco',
    'lucia',
    'elisa',
    'mamma',
    'babbo',
    'davide',
    'claudio',
    'daniela'];


// inserisco una sezione di input dove controllare se un nome inserito è presente nella lista invitati
let inputUserText = prompt("inserisci il tuo nome");

let checkUserInvitation = false;

for (let i = 0; i < invitedList.length; i++){
    if (invitedList[i] == inputUserText){
        checkUserInvitation = true;
    }
};

if (checkUserInvitation) {
    console.log("Puoi partecipare al party!")
} else {
    console.log("mi dispiace, non puoi partecipare!")
};

