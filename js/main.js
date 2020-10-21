// Dichiarazione variabili

var calcTicket = document.getElementById('biglietto');
var btnGenera = document.getElementById('btn-genera');
var btnAnnulla = document.getElementById('btn-annulla');

// EVENTI
// CLICK SUL BOTTONE "GENERA"
btnGenera.addEventListener('click', function () {
  // dati utente
  var userName = document.getElementById('userName').value;
  // console.log(userName);

  var kmViaggio = document.getElementById('distanzaKM').value;
  // console.log(kmViaggio);

  var fasciaEta = document.getElementById('fasciaEta').value;
  // console.log(fasciaEta);

  // costo biglietto base
  var priceKm = 0.21;
  var costoBiglietto = priceKm * kmViaggio;
  var offerta = 'Biglietto Standard';

  // calcolo sconti in base alla fascia età
  if (fasciaEta == 'minorenne') {
    // -20%
    costoBiglietto -= costoBiglietto * 0.2;
    offerta = 'Sconto Young';
  }
  else if (fasciaEta == 'over65') {
    // -40%
    costoBiglietto -= costoBiglietto * 0.4;
    offerta = 'Sconto Senior';
  }
  costoBiglietto = costoBiglietto.toFixed(2) + '€';

  var numCarrozza = Math.floor(Math.random() * 10 ) + 1;
  var codiceCp = Math.floor(Math.random() * (100000 -  90000) ) + 90000;

  // compilazione tabella
  document.getElementById('nomePasseggero').innerHTML = userName;
  document.getElementById('discount').innerHTML = offerta;
  document.getElementById('numCarrozza').innerHTML = numCarrozza;
  document.getElementById('codice-cp').innerHTML = codiceCp;
  document.getElementById('costoBiglietto').innerHTML = costoBiglietto;

  calcTicket.className = 'show';
});

// CLICK SUL BOTTONE "ANNULLA"
 btnAnnulla.addEventListener('click', function () {

    document.getElementById('userName').value = '';
    document.getElementById('distanzaKM').value = '';
    document.getElementById('fasciaEta').value = '';

   document.getElementById('nomePasseggero').innerHTML = '';
   document.getElementById('discount').innerHTML = '';
   document.getElementById('numCarrozza').innerHTML = '';
   document.getElementById('codice-cp').innerHTML = '';
   document.getElementById('costoBiglietto').innerHTML = '';

   calcTicket.className = 'hidden';

 });
