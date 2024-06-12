const btnEquacao = document.querySelector("#btnEquacao");
const btnResposta = document.querySelector("#btnResposta");
const resposta = document.querySelector("#resposta");
const respostaFinal = document.querySelector("#respostaFinal");
const equacao = document.querySelector("#equacao");
let simbolos = ["+", "-", "x"];
let a;
let b;
let resp;
btnEquacao.addEventListener("click", () => {
  a = Math.floor(Math.random() * 9);
  b = Math.floor(Math.random() * 9);
  op = simbolos[Math.floor(Math.random() * simbolos.length)];
  console.log(a);
  console.log(b);
  console.log(op);
  if (op === "+") {
    resp = a + b;
    equacao.innerText = `${a} + ${b}`;
  }
  if (op === "-") {
    resp = a - b;
    equacao.innerText = `${a} - ${b}`;
  }
  if (op === "x") {
    resp = a * b;
    equacao.innerText = `${a} x ${b}`;
  }
});

btnResposta.addEventListener("click", () => {
  if (resposta.value != resp) {
    respostaFinal.innerText = `Deu ruim! A resposta correta é ${resp}`;
    respostaFinal.style.color = "red";
  } else {
    respostaFinal.innerText = `Parabéns!`;
    respostaFinal.style.color = "blue";
  }
});
