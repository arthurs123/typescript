// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.


export function q26POO():void{}
abstract class Gerenciamento{

    private _nomeTitular: string
   
    protected _saldo:number

    constructor(nameTitle:string, saldo:number){

        this._nomeTitular=nameTitle
        this._saldo=saldo
    }

     public get nomeTitular(): string {
        return this._nomeTitular
    }
    public set nomeTitular(value: string) {
        this._nomeTitular = value
    }
    public mostrarSaldo(){
        return(this._saldo)
    }


    abstract saque(saque:number):void

    abstract deposito(deposito:number):void
}

class ContaCorrente extends Gerenciamento{
    
    constructor(nomeTitular:string, saldo:number){

        super(nomeTitular,saldo)
    }

    saque(saque:number){
        let saqueTaxa= saque+2
        if(saque>0 && this._saldo>=saqueTaxa){
            this._saldo-=saqueTaxa
        }
        else{
            console.log("Valor Invalido")
        }
    }
    deposito(deposito:number){
        if (deposito>0){
            this._saldo+=deposito
        }
        else{
            console.log("valor Invalido")
        }
    }
}
class ContaPoupanca extends Gerenciamento{

    constructor(nomeTitular:string, saldo:number){

        super(nomeTitular,saldo)
    }

    saque(saque:number){
        
        if(saque>0 && this._saldo>=saque){
            this._saldo-=saque
        }
        else{
            console.log("Valor Invalido")
        }
    }
    deposito(deposito:number){
        if (deposito>0){
            this._saldo+=deposito
        }
        else{
            console.log("valor Invalido")
        }
    }
    rendimento(){
        if(this._saldo>0){
            this._saldo+=this._saldo*0.01
        }
    }

}

let quest:number=Number(prompt("Qual tipo de conta? 1-Corrente, 2-Poupança: "))
let nomeTitular:string=String(prompt("Informe o nome: "))
let saldo:number=Number(prompt("Informe o saldo: "))
let conta:Gerenciamento
if (quest===1){
     conta= new ContaCorrente(nomeTitular,saldo)

}
 else {
        conta= new ContaPoupanca(nomeTitular, saldo)
    }

let op:number=Number(prompt("Voce deseja entrar? 1-sim, 2-nao: "))

while(op!=2){

     quest = Number(prompt("Digite a alternativa desejada: 1-Sacar 2-Depositar 3-Aplicar rendimento 4-Mostrar saldo"))
    
    switch(quest){
        case 1:
            let questSaq:number=Number(prompt("Quanto voce deseja sacar?: "))
            conta.saque(questSaq)
            break
            


        case 2:
            let questDeposito:number=Number(prompt("Quanto voce deseja Depositar?: "))
            conta.deposito(questDeposito)
            break

        case 3:
            if(conta instanceof ContaPoupanca){
                conta.rendimento()
                console.log("Rendimento cadastrado!")
                
            }

            break
        case 4:
            console.log(`Olá ${nomeTitular}, seu saldo é de: ${conta.mostrarSaldo()}R$`)
            break

        }

    op=Number(prompt("Voce deseja continuar? 1-sim, 2-nao: "))
}