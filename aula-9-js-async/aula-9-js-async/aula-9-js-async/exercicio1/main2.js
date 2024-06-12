const btnLigar = document.querySelector("#btn-ligar");
const btnPausar = document.querySelector("#btn-pausar");
const btnZerar = document.querySelector("#btn-zerar");
const temp = document.querySelector(p);

let cont = 0;
let cronoRodando = false;
let cronoPausado = false;
let cronometroFunc;

btnZerar.addEventListener("click", () => {
  p.innerText = "00:00:00";
});

btnLigar.addEventListener("click", () => {
  if (cronoRodando) {
    return;
  }
  cronometroFunc = setInterval(ligarCronometro, 1000);
});
