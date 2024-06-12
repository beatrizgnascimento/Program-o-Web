const login = async (user,pass) => {
    if(!user || !pass)
        throw 'Credenciais Vazias';
    if(pass == 'senha')
        return 'Bem Vindo ao Portal UNIFEI';//poderia ser qualquer valor. Basta retornar um valor que a promesa será fulfilled
    throw ('Senha Errada');
}

login('user', 'senha')
    .then(msg => {
        console.log('Logado');
    })
    .catch(err => {
        console.log('Erro');
        console.log(err);
    })