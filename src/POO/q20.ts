// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.


export function q20POO():void{
class Pedidos{
    
    private _numMesa: number
    
    protected _valorIng:number

    constructor(numTab:number, valueIng:number){
        this._numMesa=numTab
        this._valorIng=valueIng
    }

    public get numMesa(): number {
        return this._numMesa
    }
    public set numMesa(value: number) {
        this._numMesa = value
    }

      pedido(): number {
        return this._valorIng
    }
}

class PedidosEntrega extends Pedidos{

    protected _taxaEntrega=5
    private _endereco: string
    

    constructor(taxDeliv:number, adress:string, numMesa:number, valorIng:number){
        super(numMesa,valorIng)

        this._endereco=adress
        this._taxaEntrega=taxDeliv
    }
    public get endereco(): string {
        return this._endereco
    }
    public set endereco(value: string) {
        this._endereco = value
    }

   pedido(): number {
        return this._valorIng + this._taxaEntrega
    }

    

}



let listaPedidos:Pedidos[] = []

let op:number=Number(prompt("Deseja entrar no programa? 1-Sim, 2-Não"))

while (op!=2) {

    let tipo:number=Number(prompt("Qual o tipo do pedido?, 1 - Pedido normal\n2 - Pedido de entrega: "))

    let valorIng:number=Number( prompt("Qual o valor dos ingredientes: "))

    if (tipo==1) {

        let numMesa: number=Number(prompt("Qual o número da mesa: "))

        let pedido = new Pedidos(numMesa, valorIng)

        listaPedidos.push(pedido)

        console.log("Pedido normal cadastrado!")

    } else if (tipo==2) {

        let endereco:string=prompt("Informe o endereço: ") || ""

        let pedido = new PedidosEntrega(5,endereco,0, valorIng)

        listaPedidos.push(pedido)

        console.log("Pedido de entrega cadastrado!")
    }

    op = Number(
        prompt("Deseja cadastrar outro pedido? 1-Sim, 2-Não")
    )
}



    let faturamento=0

    for (let pedido of listaPedidos) {

        faturamento += pedido.pedido()
    }

    console.log(`Faturamento total: R$ ${faturamento}`)

}