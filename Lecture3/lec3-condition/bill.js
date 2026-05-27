let prompt = require("prompt-sync")();
let bill = prompt("enter your electricity unit: ");
let pay = 0;

if (bill > 100) {
  pay += 100 * 4.2;
  bill = bill - 100;

  if (bill > 100) {
    pay += 100 * 6;
    bill = bill - 100;

    if (bill > 100) {
      pay += 100 * 8;
      bill = bill - 100;

      pay += bill*13;

    } else {
      pay += bill * 8;
    }

  } else {
    pay += bill * 6;
  }

} else {
  pay += bill * 4.2;
}


console.log(`You have to pay ${pay.toFixed(2)} rupees.`)