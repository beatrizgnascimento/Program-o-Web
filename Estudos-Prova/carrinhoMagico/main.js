const nome = document.querySelector("#nome");
const quantidade = document.querySelector("#quantidade");
const btnAdd = document.querySelector("#btn");
const produtos = document.querySelector("#listaProdutos");

let listaCompras = [];

btnAdd.addEventListener("click", () => {
  if (nome.value == "") {
    alert("Preencha o nome");
    return;
  }
  nomeProduto = nome.value;
  quantidadeProduto = Number(quantidade.value);
  const li = document.createElement("li");
  li.innerHTML = `&bull;${nomeProduto}. Quantidade: ${quantidadeProduto}`;
  const btnRemover = document.createElement("button");
  btnRemover.innerHTML = "X";
  li.append(btnRemover);
  produtos.append(li);
  btnRemover.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
});
