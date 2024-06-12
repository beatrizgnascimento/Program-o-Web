//Esse código é apenas demonstrativo


//Essa função devolve um objeto do tipo Promise
//Salvaremos uma ref para esse objeto na constante "promise"
const promise = algumaFuncaoAssincrona();

//O objeto do tipo promise representa uma eventual conclusão de uma operação assíncrona.
//Ela pode apresentar os valores "pending" (aguardando)
//fulfilled (sucesso)
//rejected (falha)

//Caso a promessa seja resolvida "então" faremos alguma coisa
promise.then(callbackSucesso, callbackFalha);
//Ser resolvida pode ser fulfilled (sucesso) ou rejected (falha)
//Se sucesso, chamamos o primeiro callback
//Se falha, chamamos o segundo callback

//Podemos também chamar diretamente a função que retorna um Promise e "então"
//penduramos os callbacks para caso de sucesso e falha
algumaFuncaoAssincrona().then(callbackSucesso, callbackFalha);

//Outra forma de encadear uma promise é usando catch, que executará em caso de falha
//Essa notação é mais comum
algumaFuncaoAssincrona()
    .then(callbackSucesso)
    .catch(callbackFalha);


function callbackSucesso(){
    console.log("Deu boa!");
}

function callbackFalha(){
    console.log("Deu ruim");
}

algumaFuncaoAssincrona()
    .then((resposta) => {
        return resposta.outraFuncaAssinc();
    })
    .then((retorno) => {
        //faz alguma coisa se outraFunaAssinc tiver sucesso
        //perceba que primeiro algumaFuncaoAssincrona precisa resolver.
        //pois o encadeamento sugere que essa promise depende da primeira
    })
    .catch(erro => {
        //se qualquer promise falhar, o catch será executado
    })