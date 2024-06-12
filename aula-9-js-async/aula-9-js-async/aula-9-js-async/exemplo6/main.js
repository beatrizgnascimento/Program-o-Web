// //url swapi https://swapi.dev/api/(o que vc quer)
// //Exemplo 1: https://swapi.dev/api/planets => devolve os planetas do Star Wars
// //Exemplo 2: https://swapi.dev/api/people => devolve os personagens
// //Exemplo 3: https://swapi.dev/api/people/:id/ => devolve o personagem "id"
// //Para testar uma API podemos usar o link:
// //https://hoppscotch.io/


// const btnListPlaneta = document.querySelector('#btn-planetas');
// const btnListPessoas = document.querySelector('#btn-pessoas');
// const listaPlanetas = document.querySelector('#lista-planetas');
// const listaPessoas = document.querySelector('#lista-pessoas');


// btnListPlaneta.addEventListener('click', () => {
//     const planetasRes = fetch('https://swapi.dev/api/planets')
//                             .then(res => {
//                                 return res.json();
//                             })
//                             .then(data => {
//                                 populaListaPlaneta(data.results);
//                             })
//                             .catch(error => {
//                                 console.log(error);
//                             });

//     console.log(planetasRes);
    
// });

// btnListPessoas.addEventListener('click', () => {

//     const pessoasRes = fetch('https://swapi.dev/api/people')
//                             .then(res => {
//                                 return res.json(); //A função json também é uma promise e por isso podemos fazer o encadeamento.
//                                 //Basta retornar a promise (return) e seguir o encadeamento.
//                             })
//                             .then(data => {
//                                 populaListaPessoas(data.results);
//                             })
//                             .catch(error => {
//                                 console.log(error);
//                             })

// });

// function populaListaPlaneta(planetas){
//     for(let planeta of planetas){
//         const newLi = document.createElement('li');
//         newLi.innerText = planeta.name;
//         listaPlanetas.append(newLi);
//     }    
// }

// function populaListaPessoas(pessoas){
//     for(let pessoa of pessoas){
//         const newLi = document.createElement('li');
//         newLi.innerText = pessoa.name;
//         listaPessoas.append(newLi);
//     }    
// }








//url swapi https://swapi.info/api/(o que vc quer)
//Exemplo 1: https://swapi.info/api/planets => devolve os planetas do Star Wars
//Exemplo 2: https://swapi.info/api/people => devolve os personagens
//Exemplo 3: https://swapi.info/api/people/:id/ => devolve o personagem "id"
//Para testar uma API podemos usar o link:
//https://hoppscotch.io/


const btnListPlaneta = document.querySelector('#btn-planetas');
const btnListPessoas = document.querySelector('#btn-pessoas');
const listaPlanetas = document.querySelector('#lista-planetas');
const listaPessoas = document.querySelector('#lista-pessoas');


btnListPlaneta.addEventListener('click', () => {
    const planetasRes = fetch('https://swapi.dev/api/planets')
                            .then(res => {
                                return res.json();
                            })
                            .then(data => {
                                populaListaPlaneta(data.results);
                            })
                            .catch(error => {
                                console.log(error);
                            });

    console.log(planetasRes);
    
});

btnListPessoas.addEventListener('click', () => {

    const pessoasRes = fetch('https://swapi.dev/api/people')
                            .then(res => {
                                return res.json(); //A função json também é uma promise e por isso podemos fazer o encadeamento.
                                //Basta retornar a promise (return) e seguir o encadeamento.
                            })
                            .then(data => {
                                populaListaPessoas(data.results);
                            })
                            .catch(error => {
                                console.log(error);
                            })

});

function populaListaPlaneta(planetas){
    for(let planeta of planetas){
        const newLi = document.createElement('li');
        newLi.innerText = planeta.name;
        listaPlanetas.append(newLi);
    }    
}

function populaListaPessoas(pessoas){
    for(let pessoa of pessoas){
        const newLi = document.createElement('li');
        newLi.innerText = pessoa.name;
        listaPessoas.append(newLi);
    }    
}