const marco = { name: "Marco", lastName: "Rossi", isAmbassador: true };
const paul  = { name: "Paul", lastName: "Flynn", isAmbassador: false };
const amy   = { name: "Amy", lastName: "Reed", isAmbassador: false };

const prices = [34, 5, 2];
const shippingCost = 50;

const utenteCheEffettuaLAcquisto = amy;

// utenti
const users = [];
users.push(marco);
users.push(paul);
users.push(amy);

// stampa ambassador / non ambassador
for (let i = 0; i < users.length; i++) {
  const u = users[i];
  console.log(u.name + " " + u.lastName + (u.isAmbassador ? " e' un ambassador" : " non e' un ambassador"));
}

// array solo ambassador
const ambassadors = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isAmbassador === true) ambassadors.push(users[i]);
}
console.log(ambassadors);

// totale carrello
let subtotal = 0;
let expr = "" + prices[0];

for (let i = 0; i < prices.length; i++) {
  subtotal = subtotal + prices[i];
  if (i > 0) expr = expr + "+" + prices[i];
}

console.log(expr + "=" + subtotal);

// sconto (prima spedizione)
let totale = subtotal;
if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
  totale = totale * 0.7;
}

// spedizione
if (totale <= 100) {
  totale = totale + shippingCost;
}

console.log("totale:", totale);
