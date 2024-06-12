const qtd = document.querySelector("#qtd");
const nome = document.querySelector("#produto");
const listaComprasRef = document.querySelector("#lista-pedidos");
const btn = document.querySelector("#btnAdd");
const pMsgCarrinho = document.querySelector(".lista-pedidos p");
const msgCarrinhoVazio =
  "Seu pedido está vazio. Adicione produtos no carrinho!";

btn.addEventListener("click", () => {
  const qtdValue = qtd.value;
  const nomeValue = nome.value;

  //let n = Number('Itajubá')

  if (qtdValue === "" || nomeValue === "") {
    alert("Campo Vazio");
    return -1;
  }

  const newLi = document.createElement("li");
  newLi.innerText = `${qtdValue}: ${nomeValue}`;

  //e.target.parentNode.remove()
  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.innerText = "X";
  newDeleteBtn.addEventListener("click", funDelete);
  newLi.insertAdjacentElement("beforeend", newDeleteBtn); //inserir elemento, ligar o li no botão
  listaComprasRef.append(newLi);
  pMsgCarrinho.innerText = "";
});

const funDelete = (e) => {
  e.target.parentNode.remove();
  const liProdutos = document.querySelectorAll("#lista-pedidos li");
  if (liProdutos.length === 0) {
    pMsgCarrinho.innerText = pMsgCarrinho;
  }
};
