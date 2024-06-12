const h1 = document.querySelector("#titulo");
const btn = document.querySelector("button");
const main = document.querySelector(".centro");

//funcao para gerar cor aleatoria
const gerarNovaCor = () => {
  const novaCor = {
    r: Math.floor(Math.random() * 255),
    //numero aleatorio entre 0 e 1
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  };

  return novaCor;
};

btn.addEventListener("click", () => {
  const cor = gerarNovaCor();

  //mudar o texto do h1
  h1.innerText = `Cor de fundo: rgb(${cor.r}, ${cor.g}, ${cor.b})`;

  //aplicar a cor de fundo
  main.style.backgroundColor = `rgb(${cor.r}, ${cor.g}, ${cor.b})`;
});

const paragrafos = document.querySelectorAll("p");

for (p of paragrafos) {
  console.log(p.innerText);
  console.log(p.innerHTML);
  console.log(p.textContent);
}
