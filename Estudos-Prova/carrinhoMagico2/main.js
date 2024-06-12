const nomeProduto = document.querySelector("#nome");
const btnMais = document.querySelector("#btnMais");
const btnMenos = document.querySelector("#btnMenos");
const btnAdd = document.querySelector("#btnAdd");
const listaProd = document.querySelector("#listaProd");
const numProd = document.querySelector("#numProd");
const qtd = document.querySelector("#qtd");

let quantidade = 1;
let cont = 0;

btnAdd.addEventListener("click", () => {
  if (nomeProduto.value == "") {
    alert("Nome do produto não pode ser vazio");
  }
  const li = document.createElement("li");
  li.innerText = `${nomeProduto.value}. Quantidade: ${quantidade}`;
  const btnRem = document.createElement("button");
  btnRem.innerHTML = "X";
  li.append(btnRem);
  listaProd.append(li);
  btnRem.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    cont = cont - quantidade;
    numProd.innerText = cont;
  });
  cont = cont + quantidade;
  numProd.innerText = cont;
});

btnMais.addEventListener("click", () => {
  quantidade++;
  console.log(quantidade);
  qtd.innerText = quantidade;
});

btnMenos.addEventListener("click", () => {
  qtd.innerText = quantidade;
  if (quantidade <= 1) {
    return;
  }
  quantidade--;
});
