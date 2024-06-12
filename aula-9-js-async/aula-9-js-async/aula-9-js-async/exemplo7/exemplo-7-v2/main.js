//url pokemon api https://pokeapi.co/api/v2/
//Exemplo 1: https://pokeapi.co/api/v2/pokemon/<nome-pokemon> => devolve informações do pokemon
//Exemplo 2: https://pokeapi.co/api/v2/pokemon/ => devolve pokemons
//Para testar uma API podemos usar o link:
//https://hoppscotch.io/
//Para modificar o retorno pode ser modificar o parametro "limit"
//https://pokeapi.co/api/v2/pokemon?limit=60


const input = document.querySelector('input');
const form = document.querySelector('form');

const api = 'https://pokeapi.co/api/v2/pokemon/';

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const url = `${api}${input.value}`;
    console.log(input.value);

    fetch(url)
        .then(res => res.json())// versao reduziada para return res.json()
        .then(data => {
            const newP = document.createElement('p');
            newP.innerText = data.name;
            form.after(newP);
        })
        .catch(err => {
            console.log(err);
        })
});