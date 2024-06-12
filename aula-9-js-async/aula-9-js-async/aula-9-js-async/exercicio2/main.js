//url da TV Maze API
//http://api.tvmaze.com/search/shows?q=
const btnLimpar = document.querySelector('#btn-limpar');
const form = document.querySelector('#form-busca');
form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const termoBusca = form.elements.query.value;
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${termoBusca}`);
    const json = await req.json();
    populaImagens(json);

    form.elements.query.value = '';

});

const populaImagens = (imagens) => {
    for(let imagem of imagens){
        if(imagem.show.image){
            const img = document.createElement('IMG');
            img.src = imagem.show.image.medium;
            document.body.append(img);
        }
    } 
}



const limpaImagens = () => {
    const imagens = document.querySelectorAll('img');
    for(let img of imagens)
        img.remove();
}

btnLimpar.addEventListener('click', limpaImagens);