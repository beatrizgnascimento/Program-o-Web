//url swapi https://swapi.dev/api/(o que vc quer)
//https://swapi.dev/api/people/:id/ => devolve o personagem "id"
//Para testar uma API podemos usar o link:
//https://hoppscotch.io/


const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const url = `https://swapi.dev/api/people/${input.value}`;

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