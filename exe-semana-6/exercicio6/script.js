document.addEventListener('DOMContentLoaded', function () {
function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response=>{
        if(!response.ok){
            throw new Error("Não foi possivel localizar dados")
        }
        return response.json()
    })
    .then(data=>{
        if(data.logradouro || data.complemento || data.bairro || data.uf){
            const string= `CEP: ${cep}\n Rua: ${data.logradouro}\n Bairro: ${data.bairro}\n Complemento: ${data.complemento}\n UF: ${data.uf}`
            mostrarDados(string)
        }else{
            mostrarDados('Dados nao encontrados!')
        }
    })
    .catch(error=>{
        console.log("Erro",error)
    })
}

function mostrarDados(string){
    const dadosCep= document.getElementById('dadosHtml')
    string = string.replace(/\n/g, '<br>');
    dadosCep.innerHTML=string
}

const form = document.getElementById('formCep');
form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const cepInformado = document.getElementById('cepInput').value;
    if (cepInformado) {
        buscaCep(cepInformado);
    }
});


});