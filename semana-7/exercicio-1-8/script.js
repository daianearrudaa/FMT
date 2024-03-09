class Produto{
    nome;
    preco;
    quantidade;

    constructor(valornome, valorpreco, valorquantidade){
        this.nome= valornome;
        this.preco= valorpreco;
        this.quantidade= valorquantidade;
    }

     Vender(quantidadeVendida){
        if (this.quantidade<=quantidadeVendida){
            console.log("Estoque insuficiente")
        }else{
            this.quantidade-= quantidadeVendida;
            console.log(`${quantidadeVendida} unidade de ${this.nome} vendidas`)
        }
    }

    Repor(quantidadeResposta){
        this.quantidade += quantidadeResposta;

    }

    MostrarEstoque(){
        console.log("O produto CANETA BIC AZUL possui 5 unidades disponíveis")
    }

    AtualizarPreco(novoValor){
        this.preco = novoValor;
    }
}

class Pessoa{
    constructor(nomePessoa, idadePessoa, profissaoPessoa){
        this.nome = nomePessoa;
        this.idade= idadePessoa;
        this.profissao= profissaoPessoa;
    }
}

class Cliente extends Pessoa{
    constructor(nomePessoa, idadePessoa, profissaoPessoa, telefonePessoa, emailPessoa, clienteDesde){
        super(nomePessoa, idadePessoa, profissaoPessoa);
        this.telefone= telefonePessoa;
        this.email = emailPessoa;
        this.clienteDesde = clienteDesde;

    }
}

const camiseta = new Produto("Camiseta",10,50);
const quantidadeVendida = 15;
camiseta.Vender(quantidadeVendida);
camiseta.Repor(quantidadeVendida);
console.log("Quantidade disponível: ", camiseta.quantidade);
let novoValor = 50;
camiseta.AtualizarPreco(novoValor);
console.log("Preço atualizado: ", camiseta.preco);



