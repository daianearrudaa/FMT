class Produto{
    constructor(nome, preco, quantidade){
        this.nome= nome;
        this.preco= preco;
        this.quantidade= quantidade;
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
    constructor(){
        this.nome = nome;
        this.idade= idade;
        this.profissao= this.profissao;
    }
}

class Cliente extends Pessoa{
    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao);
        this.telefone= telefone;
        this.email = email;
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



