const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  //Ligar um temporizador
  setTimeout(() => {
    let pElem1 = document.createElement("p");
    setInterval(mostraRelogio, 1000);
    pElem1.innerText = "Vou aparecer em segundo!";
    document.body.append(pElem1);
  }, 5000); //Será executado 5 segundos após ser acionado.

  //Ligar um temporizador com parametro
  setTimeout(minhaFunc, 7000, "Vou aparecer em terceiro!");
  //Será executado 10 segundos após ser acionado.

  //Esse código vai executar antes do código dentro
  //do setTimeout
  let pElem2 = document.createElement("p");
  pElem2.innerText = "Vou aparecer primeiro!";
  document.body.append(pElem2);
});

function minhaFunc(conteudo) {
  let pElem3 = document.createElement("p");
  pElem3.innerText = conteudo;
  document.body.append(pElem3);
}

const mostraRelogio = () => {
  let date = new Date();
  let dateS = date.toLocaleTimeString();
  p.innerText = dateS;
};
