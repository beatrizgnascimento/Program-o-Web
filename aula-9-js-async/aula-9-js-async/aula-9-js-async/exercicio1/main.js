const btnLiga = document.querySelector("#btn-ligar");
const btnPausa = document.querySelector("#btn-pausar");
const btnZerar = document.querySelector("#btn-zerar");
const p = document.querySelector("p");

let contador = 0;
let tHoras = 0,
  tMinutos = 0,
  tSegundos = 0;
let cronometroFunc;
let cronoPausado = false;
let cronoIniciado = false;

btnLiga.addEventListener("click", () => {
  if (cronoIniciado) return;
  cronometroFunc = setInterval(ligarConometro, 1000);
  cronoIniciado = true;
});

btnPausa.addEventListener("click", () => {
  if (cronoIniciado) {
    if (!cronoPausado) {
      clearInterval(cronometroFunc);
      btnPausa.innerText = `Retomar Cronômetro`;
      cronoPausado = true;
    } else {
      cronometroFunc = setInterval(ligarConometro, 1000);
      btnPausa.innerText = `Pausar Cronômetro`;
      cronoPausado = false;
    }
  }
});

btnZerar.addEventListener("click", () => {
  resetar();
});

const resetar = () => {
  clearInterval(cronometroFunc);
  cronoIniciado = false;
  cronoPausado = false;
  contador = 0;
  p.innerText = `00:00:00`;
  btnPausa.innerText = `Pausar Cronômetro`;
};

const ligarConometro = () => {
  contador++;
  tSegundos = String(contador % 60).padStart(2, "0");
  tMinutos = String(Math.trunc(contador / 60) % 60).padStart(2, "0"); //garante que o resultado fique entre 0 e 59
  tHoras = String(Math.trunc(contador / 3600)).padStart(2, "0"); //math.trunc tira as casas decimais
  p.innerText = `${tHoras}:${tMinutos}:${tSegundos}`;
};
