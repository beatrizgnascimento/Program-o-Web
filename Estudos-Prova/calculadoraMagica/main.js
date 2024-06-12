const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const btnAdd = document.querySelector("#btnAdd");
const btnSub = document.querySelector("#btnSub");
const btnMult = document.querySelector("#btnMult");
const btnIgual = document.querySelector("#btnIgual");
const resultado = document.querySelector("#resultado");
const operador = document.querySelector("#operador");

let conta = 0;

btnIgual.addEventListener("click", () => {
  if (op1.value == "" || op2.value == "") {
    alert("Operandos não podem ser vazios");
  }
  resultado.innerText = conta;
});

btnAdd.addEventListener("click", () => {
  conta = Number(op1.value) + Number(op2.value);
});

btnSub.addEventListener("click", () => {
  conta = Number(op1.value) - Number(op2.value);
  operador.innerText = "-";
});

btnMult.addEventListener("click", () => {
  conta = Number(op1.value) * Number(op2.value);
  operador.innerText = "X";
  
});
