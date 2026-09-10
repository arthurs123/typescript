//11. Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

class Pedidos{
    nomeCliente:string
    nomePedido:string
    valorPedido:number

    constructor(nameClient:string, nameOrder:string, valueOrder:number){
        this.nomeCliente=nameClient
        this.nomePedido=nameOrder
        this.valorPedido=valueOrder
    }


    
}