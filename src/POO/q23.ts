// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.


export function q23POO():void{


abstract class Produtos{

    private _codigo:number
    protected _nomeProduto:string
    protected _preco:number

    constructor(code:number, name:string, price:number){
        this._codigo=code
        this._nomeProduto=name
        this._preco=price
    }

    abstract valor():void
}

class ProdutosPer extends Produtos{
    
    private _validade:number
    constructor(codigo:number, nome:string, preco:number, validade:number){
        super(codigo,nome,preco)
        this._validade=validade
    }
    get validade():number{
    return this._validade
}


    set validade(novaValidade:number){
        this._validade = novaValidade
}

    
    valor(){
        if (this._validade===27){
        let valorPer=this._preco*0.7

        console.log(`o valor final do ${this._nomeProduto} será de: ${valorPer.toFixed(2)}R$`)
        }
        else{
            console.log(`o valor final do ${this._nomeProduto} será de: ${this._preco}R$`)
        }
    }
}

class ProdutosNPer extends Produtos{
    constructor(codigo:number, nome:string, preco:number){
        super(codigo,nome,preco)
        
    }

    valor(){

        console.log(`o valor final do ${this._nomeProduto} será de: ${this._preco}R$`)
    }

}
let listaPordutos:Produtos[]=[]
let op:number=Number(prompt("Voce deseja entrar? 1-sim, 2-nao: "))

while(op!=2){
    let tipo:number=Number(prompt("Qual o tipo do produto? 1- Perecíveis, 2-Não Perecíveis: "))
    let codigo:number=Number(prompt("Digite o codigo do produto: "))
    let nomeProduto:string=String(prompt("Informe o nome do produto: "))
    let preco:number=Number(prompt("Informe o preço do produto: "))
    
    if (tipo===1){
        let validade:number=Number(prompt("Informe a data de validade do produto: "))
       
        let usuario = new ProdutosPer(codigo,nomeProduto,preco,validade)
        usuario.valor()
        listaPordutos.push(usuario)
        
    }
    else if (tipo===2){
        let usuario = new ProdutosNPer(codigo,nomeProduto,preco)
        usuario.valor()
        listaPordutos.push(usuario)
    }
    op=Number(prompt("Voce deseja continuar? 1-sim, 2-nao: "))
}
}