//url pokemon api https://pokeapi.co/api/v2/
//Exemplo 1: https://pokeapi.co/api/v2/pokemon/<nome-pokemon> => devolve informações do pokemon
//Exemplo 2: https://pokeapi.co/api/v2/pokemon/ => devolve pokemons
//Para testar uma API podemos usar o link:
//https://hoppscotch.io/
//Para modificar o retorno pode ser modificar o parametro "limit"
//https://pokeapi.co/api/v2/pokemon?limit=60

const btnListarPokemons = document.querySelector("#btn-pokemons");
const listaPokemons = document.querySelector("#lista-pokemons");

const url = "https://pokeapi.co/api/v2/pokemon";

btnListarPokemons.addEventListener("click", () => {
  const pokemonsRes = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      populaListaPokemons(data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(pokemonsRes);
  
});

const populaListaPokemons = (pokemons) => {
  for (let pokemon of pokemons) {
    const newLi = document.createElement("li");
    newLi.innerText = `${pokemon.name
      .charAt(0)
      .toUpperCase()}${pokemon.name.slice(1)}`;
    listaPokemons.append(newLi);
  }
};
