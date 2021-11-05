// km variable
const miles = prompt("How many miles do you have to cover?");
// print
document.getElementById("miles").innerHTML = miles;

// age variable
const age = prompt("What is your age?");
// print
document.getElementById("age").innerHTML = age;

// calc ticket price without sale
const initialPrice = miles * 0.21;
// check the outcome
console.log("initial price:", initialPrice);
// print the result with only two decimals
document.getElementById("initialPrice").innerHTML = initialPrice.toFixed(2);

// calc jr sale
if (age < 18) {
  const jrPrice = (initialPrice - (initialPrice * 20 / 100));
  // check the outcome
  console.log("jr price", jrPrice);
  // print the resut with only two decimals
  document.getElementById("jrPrice").innerHTML = jrPrice.toFixed(2);

  // calc sen sale
} else if (age > 65) {
  const senPrice = (initialPrice - (initialPrice * 40 / 100));
  // check the outcome
  console.log("sen price", senPrice);
  // print the resut with only two decimals
  document.getElementById("senPrice").innerHTML = senPrice.toFixed(2);
}
