// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). O sistema deve interagir com o
// atendente para registrar as compras do dia, solicitando o tipo de cliente e o valor gasto. Tudo deve ser
// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.


export function q38POO():void{
    class Cliente{

        private _nome:string
        private _email:string|number
        protected _cashback:number

        constructor(nome:string,email:string|number){
            this._nome=nome
            this._email=email
            this._cashback=0
        }

        public get nome():string{
            return this._nome
        }

        public get email(){
            return this._email
        }

        public get cashback():number{
            return this._cashback
        }

        processarCompra(valor:number):void{
        }
    }

    class ClientePadrao extends Cliente{

        processarCompra(valor:number):void{
            this._cashback+=valor*0.01
        }
    }

    class ClienteVIP extends Cliente{

        processarCompra(valor:number):void{
            this._cashback+=valor*0.05
        }
    }

    let clientes:Cliente[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Cliente Padrão, 2-Cliente VIP, 3-Encerrar"))

        if(op==1){
            let nome:string=String(prompt("Informe o nome: "))
            let email:string|number=(prompt("informe o E-mail: "))||""
            let valor:number=Number(prompt("Digite o valor da compra: "))

            let cliente=new ClientePadrao(nome,email)
            cliente.processarCompra(valor)
            clientes.push(cliente)
        }

        if(op==2){
            let nome:string=String(prompt("Informe o nome: "))
            let email:string|number=(prompt("informe o E-mail: "))||""
            let valor:number=Number(prompt("Digite o valor da compra: "))

            let cliente=new ClienteVIP(nome,email)
            cliente.processarCompra(valor)
            clientes.push(cliente)
        }
    }

    let totalCashback=0

    for(let cliente of clientes){
        console.log(`Cliente: ${cliente.nome} | Cashback: R$ ${cliente.cashback}`)
        totalCashback+=cliente.cashback
    }

    console.log(`Total de cashback concedido: R$ ${totalCashback}`)
}