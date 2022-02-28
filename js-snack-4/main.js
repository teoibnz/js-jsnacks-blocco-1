
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

let inputUserText = prompt("inserisci il tuo nome");

let checkUserInvitation = false;

for (let i=0; i < invitedList.length; i++){
    if (invitedList[i] === inputUserText){
        checkUserInvitation = true;
    }
};

if (checkUserInvitation = true) {
    console.log("Puoi partecipare al party!")
} else {
    console.log("mi dispiace, non puoi partecipare!")};