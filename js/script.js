//outputLista
var printLista = document.getElementById('lista-cognomi')

//questa è la lista dei cognomi
var surnameList = ['Rossi', 'Bianchi', 'Verdi','Scotti','Rana','Amadori'];

//il prompt ci darà il cognome dell'utente
var userSurname = prompt('inserisci il tuo cognome: ');


//RIGA 12 AGGIUNTA POSTO CORREZIONE
userSurname = userSurname[0].toUpperCase() + userSurname.slice(1).toLowerCase();

//push del cognome dell'utente nella lista dei cognomi
surnameList.push(userSurname);

// sorted in alphabetical order
surnameList.sort()

//print della lista innerHTML
for (var i = 0; i < surnameList.length; i++) {
  printLista.innerHTML +=  '<li>' + surnameList[i] + '</li>';
}

//get position userSurname dentro surnameList
var userPosition = surnameList.indexOf(userSurname) + 1;

/*  ho inserito +1 dopo la userPosition poichè il conteggio degli elementi di un array parte dal num. zero, ciò comporterebbe che il primo elemento di una lista ci risulta in posizione zero, aggiungendo il +1 ed essendo la userPosition un numero generato dal method indexOf, il problema si risolve poichè il print ci darà (0 + 1) = 1, (1 + 1) = 2 ecc dove il primo numero dell'addizione è il numero della posizione che l'array ritorna al method indexOf e il +1 è il nostro numero che ci serve per restituri la posizione all utente come se contasse a partire da 1*/

//print della userPosition
document.getElementById('position').innerText = 'il tuo cognome è nella posizione numero: ' + (userPosition) + ' della lista';
