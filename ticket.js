let num1 = 2;
let num2 = 2;

let result = num1 + num2;

function init(inum1, inum2) {
  let result = inum1 + inum2;
  console.log("Result is: " + result);
}

let city = "Frankfurt";
let name = "Ahmad";
function changeHeader() {
  document.getElementById("Fh1").innerText = name;
}

changeHeader(name);
let ramiIsHere = true;
function printInput(IsHere) {
  if (IsHere) {
    console.log("Rami is here!");
  } else {
    console.log("Rami is not here!");
  }
  console.log(
    document.getElementById("in1").value + document.getElementById("in2").value
  );
  console.log("ich bin da!");
}

printInput(ramiIsHere);
