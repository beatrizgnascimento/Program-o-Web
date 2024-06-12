const inicio = document.querySelector("#inicio");
const fim = document.querySelector("#fim");
const btnPensar = document.querySelector("#pensar");
const resposta = document.querySelector("#resposta");
const btnAdivinhar = document.querySelector("#adivinhar");
const mensagem = document.querySelector("#mensagem");

let x;
let y;
let cont = 0;
btnPensar.addEventListener("click", () => {
  if (inicio.value == "" || fim.value == "") {
    mensagem.innerText = "Selecione o inicio e fim";

    return;
  }
  if (inicio.value < 0 || fim.value < 0) {
    mensagem.innerText = "só pode número inteiro";
    return;
  }
  x = inicio.value;
  y = fim.value;
  mensagem.innerText = `Pronto. Pensei em um número de ${x} e ${y}`;
});

const resp = Math.floor(Math.random() * fim.value + inicio.value);

btnAdivinhar.addEventListener("click", () => {
  if (inicio.value == "" || fim.value == "") {
    mensagem.innerText = "Calma jovem! Nem pensei em nenhum número";
    return;
  }
  if (resposta.value < 0) {
    mensagem.innerText = "só pode número inteiro";
    return;
  }
  mensagem.innerText =
    "Digite um número inteiro para tentar adivinhar o que pensei";

  console.log(resp);
  if (resposta.value < resp) {
    mensagem.innerText = "O número que eu pensei é maior";
    cont++;
  } else if (resposta.value > resp) {
    mensagem.innerText = "O número que eu pensei é mnor";
    cont++;
  } else {
    mensagem.innerText = `Parabens!!! Eu pensei no número ${resp} Você acertou após ${cont} tentativas`;
  }
});
