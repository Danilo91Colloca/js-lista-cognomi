//outputLista
var printLista = document.getElementById('lista-cognomi')
//questa è la lista dei cognomi
var surnameList = ['rossi', 'bianchi', 'verdi','scotti','rana','amadori'];

//il prompt ci darà il cognome dell'utente
var userSurname = prompt('inserisci il tuo cognome: (utilizzare caratteri in  minuscolo)');

//push del cognome dell'utente nella lista dei cognomi
surnameList.push(userSurname);

// sorted in alphabetical order
surnameList.sort()

//print della lista innerHTML

for (var i = 0; i < surnameList.length; i++) {
  
  printLista.innerHTML +=  '<li>' + surnameList[i] + '</li>';
}
