let jogador1 = document.querySelector("#jogador1");
let jogador2 = document.querySelector("#jogador2");
const btnJogador1 = document.querySelector("#btnJogador1");
const btnJogador2 = document.querySelector("#btnJogador2");
const btnReiniciar = document.querySelector("#btnReiniciar");
let tipoPonto = document.querySelector("#tipoPonto");

let vitoria = false;
let soma1 = 0;
let soma2 = 0;

btnReiniciar.addEventListener("click", () => {
  jogador1.innerText = 0;
  jogador2.innerText = 0;
  vitoria = false;
  soma1 = 0;
  soma2 = 0;
  jogador1.style.color = "black";
  jogador2.style.color = "black";
});

btnJogador1.addEventListener("click", () => {
  soma1++;
  if (soma1 === Number(tipoPonto.value) && vitoria === false) {
    vitoria = true;
    jogador1.innerText = soma1;
    jogador1.style.color = "green";
    jogador2.style.color = "red";
    return;
  } else if (vitoria == false) {
    jogador1.innerText = soma1;
  }
});

btnJogador2.addEventListener("click", () => {
  soma2++;
  if (soma2 === Number(tipoPonto.value) && vitoria === false) {
    vitoria = true;
    jogador2.innerText = soma2;
    jogador2.style.color = "green";
    jogador1.style.color = "red";
    return;
  } else if (vitoria == false) {
    jogador2.innerText = soma2;
  }
});

