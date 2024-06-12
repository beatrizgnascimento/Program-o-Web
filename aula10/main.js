//fetch é assincrono. Devolve uma promise
async function buscaStarWars() {
  const resposta = await fetch("https://swapi.dev/api/people");
  const dados = await resposta.json();
  console.log(dados.results[0].name);
}
console.log("Antes do busca");
buscaStarWars();
console
  .log("Depois do busca")
  //resposta
  .then((retorno) => {
    return retorno.json();
  })
  .then((dados) => {
    console.log(dados);
    console.log(dados.results[0].name);
  })
  .catch((e) => {
    console.log(e);
  });

console.log("FIm do arquivo");


