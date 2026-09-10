// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.



class Conta{
    private _numeroConta: number
    
    nomeCliente:string
    private _saldo = 0
    
    constructor(numberAccount:number, nameClient:string, balance:number){
        this._numeroConta=numberAccount
        this.nomeCliente=nameClient
        this._saldo=balance

    }

    public get numeroConta(): number {
        return this._numeroConta
    }
    public set numeroConta(value: number) {
        this._numeroConta = value
    }

    public get saldo() {
        return this._saldo
    }
    public set saldo(value) {
        this._saldo = value
    }

    alterarNome(novoNome:string):void{
        this.nomeCliente=novoNome
    }
    deposito(){
       let depositar:number=Number(prompt("Digite o valor que deseja depositar: "))
        if(depositar>0){
        this._saldo+=depositar
        console.log(this._saldo)
        }
        else{
            console.log("Você só poder depositar um valor maior que 0!!!")
        }
    }
    saque(){
        let sacar=Number(prompt("Digite o valor que deseja sacar: "))
        if(sacar>0 && sacar<=this._saldo){
        this._saldo-=sacar
        console.log(this._saldo)
    }
        else{
            console.log("Operação inválida, Digite outro valor!")
        }

}

    
}
let conta= new Conta(12345,"carlos",400)


// console.log(conta.deposito())
console.log(conta.saque())