// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function q9POO():void{}
class Estoque{

    nomeProduto:string
    preco:number
    quantProduto:number

    constructor(nomeProduto:string, preco:number, quantProduto:number){
        this.nomeProduto=nomeProduto
        this.preco=preco
        this.quantProduto=quantProduto

    }

    valor(){
        let valorFinal= this.preco*this.quantProduto

        console.log(`O produto:${this.nomeProduto} vale: ${valorFinal}R$`)
    }
}

let op:number=Number(prompt("Voce deseja entrar? 1-sim, 2-nao: "))

while(op!=2){

    let nomeProduto:string=String(prompt("Informe o nome do produto: "))
    let preco:number=Number(prompt("Informe o preço do produto: "))
    let quantProduto:number=Number(prompt("Informe a quantidade de produtos: "))

    let usuario= new Estoque(nomeProduto,preco,quantProduto)

    usuario.valor()

    op=Number(prompt("Voce deseja entrar? 1-sim, 2-nao: "))
}