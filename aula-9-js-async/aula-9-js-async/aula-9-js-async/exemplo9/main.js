//Exemplo 7 com async/await

//url swapi https://swapi.dev/api/(o que vc quer)
//https://swapi.dev/api/people/:id/ => devolve o personagem "id"
//Para testar uma API podemos usar o link:
//https://hoppscotch.io/


const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const url = `https://swapi.dev/api/people/${input.value}`;

    try {
        const res = await fetch(url);
        const jsonData = await res.json();
        const newP = document.createElement('p');
        newP.innerText = jsonData.name;
        form.after(newP);  
    } catch (error) {
        console.log(error);
    }
    
    
});


