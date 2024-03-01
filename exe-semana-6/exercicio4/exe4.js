const mostrarDados= document.getElementById('usuario');
function salvarUsuario(){
   

    const nome = prompt('Digite seu nome: ')
    const idade= prompt('Digite sua idade: ')
    const email= prompt('Digite seu email: ')

    const usuarioNovo={
        nome: nome,
        idade: idade,
        email: email
    }

    fetch('usuario.json')
    .then(response=>{
        if(!response.ok){
            throw new Error('Não foi possível obter os dados');
        }
        return response.json()
    })
    .then(usuario=>{
        const usuariofinal = Object.assign({},usuario,usuarioNovo)
        localStorage.setItem('user', JSON.stringify(usuariofinal))
        mostrarDados.innerHTML = `
        <p><strong>Nome:</strong> ${usuariofinal.nome}</p>
        <p><strong>Idade:</strong> ${usuariofinal.idade}</p>
        <p><strong>Email:</strong> ${usuariofinal.email}</p>
    `;
    })
    .catch(error=>{
        console.error('Ocorreu um erro:',error)
    })
}
salvarUsuario();




