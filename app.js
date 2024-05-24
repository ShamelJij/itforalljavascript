/*
var tarif = [
  {
    name: "Einzelfahrt",
    preis: 2.5,
  },
  {
    name: "Kinder Einzelfahrt",
    preis: 1.7,
  },
  {
    name: "4-Fahrten-Karte",
    preis: 9.0,
  },
  {
    name: "4-Fahrten-Karte Kinder",
    preis: 6.1,
  },
  {
    name: "Tageskarte",
    preis: 6.2,
  },
  {
    name: "Gruppentageskarte",
    preis: 12.2,
  },
  {
    name: "Wochenkarte",
    preis: 22.4,
  },
  {
    name: "Wochenkarte Schüler / Azubis",
    preis: 16.8,
  },
  {
    name: "Monatskarte",
    preis: 70.1,
  },
  {
    name: "Monatskarte Schüler / Azubis",
    preis: 52.6,
  },
  {
    name: "Hunde- / Fahrrad-Karte",
    preis: 1.9,
  },
];
var elem = null;
var kauf = [];
// Hauptfunktion -- wird in der HTML-Datei aufgerufen
function init() {
  // Anzeige der Tarifinformationen
  document.getElementById("display").innerHTML =
    " Hallo <br> Bitte klicken Sie auf den Button" +
    "<br>" +
    "<button onclick = 'listTarif();'>Start</button>";
}
function listTarif() {
  document.getElementById("display").innerHTML = "";
  //Auslesen des Arrays Tarif, Erzeugung eines neuen Knotenpunktes je Datensatz und Anzeige des erstellte Knotens
  for (i in tarif) {
    var node =
      '<div class="ticketelem" onclick="addTicket(' +
      i +
      ')">' + // Klickevent ausführen (Ticket auswählen und index aus Array übergeben)
      '<div class="ticketname">' +
      tarif[i].name +
      "</div>" +
      '<div class="ticketprice">' +
      tarif[i].preis.toFixed(2) +
      " &euro;</div>" +
      "</div>";
    // toFixed ; nur Anzeigen der Preis aber nicht rechnen
    document.getElementById("display").innerHTML += node;
  }
}
// Ausgewählte Ticket anzeigen
function addTicket(a) {
  document.getElementById("display").innerHTML = "";
  elem = new Object();
  // Objekt elem mit dem Datenzatz aus Übergegenem Index (a) befüllen
  var kauf = [];
  elem.name = tarif[a].name;
  elem.preis = tarif[a].preis;
  elem.anz = 1;
  // Anzeige des Datensatzes
  document.getElementById("display").innerHTML =
    '<span id="anz" class="anz">' +
    elem.anz +
    " x </span>" +
    elem.name +
    '<button onclick="addCount();">+</button>' + // Fuktionaufruf Anzahl der Tickets erhöhen
    '<button onclick="subCount();">-</button>' + // Fuktionaufruf Anzahl der Tickets veringern
    '<span id="preis" class="Preis">' +
    (elem.anz * elem.preis).toFixed(2) +
    " &euro;" +
    "</span><br>" +
    '<button onclick="listTarif();">Zurück</button>' + // Zirück zur Ansicht der Tarife
    '<button onclick="kauf.push(elem); showTickets();">Weiter</button>'; // weiter zur Ansicht der ausgewählten Tickets
}
// Anzahl der benötigten Tickets erhöhen
function addCount() {
  elem.anz++;
  document.getElementById("anz").innerHTML = elem.anz + " x ";
  document.getElementById("preis").innerHTML =
    (elem.anz * elem.preis).toFixed(2) + " &euro;";
}
// Anzahl der benötigten Tickets veringern
function subCount() {
  elem.anz = elem.anz > 1 ? elem.anz - 1 : 1;
  document.getElementById("anz").innerHTML = elem.anz + " x ";
  document.getElementById("preis").innerHTML =
    (elem.anz * elem.preis).toFixed(2) + " &euro;";
}
function delTicket(a) {
  kauf.splice(a, 1);
  if (kauf.length == 0) {
    listTarif();
  } else {
    showTickets();
  }
}
function storno() {
  kauf = [];
  init();
}
// Anzeige der ausgewählten Tickets
function showTickets() {
  gp = 0; // Gesamtpreis initialisieren (Summe aller Ticketpreise)
  // Erzeugen einer Tabelle
  document.getElementById("display").innerHTML = '<table id="tickets"></table>';
  // Auslesen des Warenkorbes (Array kauf)
  for (i in kauf) {
    preis = kauf[i].preis.toFixed(2); // Ticketpreis auf 2 Nachkommastellen kürzen
    ep = parseFloat(preis * kauf[i].anz).toFixed(2); // Berechnung des Einzelpreises aus Ticketpreises * Anzahl und Umwandlung in eine Fliesskommazahl mit zwei dezimalstellen
    gp = (parseFloat(gp) + parseFloat(ep)).toFixed(2); // Berechnung des Gesamtpreises durch addition des Einzelpreises und Umwandlung in eine Fliesskommazahl mit
    // Anzeige der Daten, Erzeugung einer Tabellenzeile und Einfügen der Zeile in die Tabelle
    document.getElementById("tickets").innerHTML +=
      '<tr> <td class="name">' +
      kauf[i].name +
      "</td>" +
      "<td>" +
      kauf[i].anz +
      " x " +
      preis +
      "</td>" +
      '<td class="preis">' +
      ep +
      " &euro;</td>" +
      '<td><button onclick="delTicket(' +
      i +
      ');">löschen</button></td>' +
      "</tr>";
  }
  // Nach Auslesen des Warenkorbes Anzeige des zu bezahlenden Gesamtpreises und Einfügen der Zeile in die Tabelle
  document.getElementById("tickets").innerHTML +=
    '<tr> <td class="name">zu zahlen</td>' +
    "<td></td>" +
    '<td class="preis">' +
    gp +
    " &euro;</td>" +
    "</tr>";
  // zwei Buttons einfügen --> zurück zur Tarifansicht und weiter zum bezahlen
  document.getElementById("display").innerHTML +=
    "<p>" +
    '<button id="more" onclick="listTarif();">weitere Fahrkarten kaufen</button>' +
    '<button id= "pay" onclick="bezahlen();">zur Kasse</button>' +
    '<button id= "storno" onclick="storno();">stornieren</button>' +
    "</p>";
}

*/