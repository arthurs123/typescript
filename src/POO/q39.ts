// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal():number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.


export function q39POO():void{
    abstract class Pedido{

        private _numeroPedido:number
        private _valorBase:number

        constructor(numeroPedido:number,valorBase:number){
            this._numeroPedido=numeroPedido
            this._valorBase=valorBase
        }

        public get numeroPedido():number{
            return this._numeroPedido
        }

        public get valorBase():number{
            return this._valorBase
        }

        abstract calcularTotal():number
    }

    class PedidoLocal extends Pedido{

        calcularTotal():number{
            return (this.valorBase+(this.valorBase*0.10))
        }
    }

    class PedidoDriveThru extends Pedido{

        calcularTotal():number{
            return (this.valorBase+3)
        }
    }

    let pedidos:Pedido[]=[]
    let faturamento=0
    let op=0

    while(op!=3){
        op=Number(prompt("1-Pedido Local, 2-Pedido Drive-Thru, 3-Fechar caixa"))

        if(op==1){
            let numero:number=Number(prompt("Informe o número do pedido: "))
            let valor:number=Number(prompt("Informe o valor dos itens: "))

            let pedido=new PedidoLocal(numero,valor)
            pedidos.push(pedido)
            faturamento+=pedido.calcularTotal()

            console.log(`Pedido: ${numero} | Total: R$ ${pedido.calcularTotal()}`)
        }

        if(op==2){
            let numero:number=Number(prompt("Informe o número do pedido: "))
            let valor:number=Number(prompt("Informe o valor dos itens: "))

            let pedido=new PedidoDriveThru(numero,valor)
            pedidos.push(pedido)
            faturamento+=pedido.calcularTotal()

            console.log(`Pedido: ${numero}, Total: R$ ${pedido.calcularTotal()}`)
        }
    }

    console.log(`Faturamento bruto: R$ ${faturamento}`)
}