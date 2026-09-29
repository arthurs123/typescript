// 40. Abstração Herança Polimorfismo Repetição Encapsulamento
// Simulador de Investimentos Financeiros
// Uma corretora de valores quer disponibilizar uma calculadora para seus clientes. A classe abstrata
// Investimento possui o valor aplicado e o tempo em meses privados, além do método abstrato
// calcularRendimento():number. O investimento em RendaFixa rende 0,8% ao mês de forma
// simples. O investimento em Acoes possui uma taxa de variação informada pelo usuário (podendo ser
// positiva ou negativa). O programa deve abrir um menu para o usuário testar simulações de
// investimento. A cada iteração, o sistema calcula o retorno financeiro via polimorfismo e exibe o saldo
// final projetado para o investidor.


export function q40POO():void{
    abstract class Investimento{

        private _valorAplicado:number
        private _tempoMeses:number

        constructor(valorAplicado:number,tempoMeses:number){
            this._valorAplicado=valorAplicado
            this._tempoMeses=tempoMeses
        }

        public get valorAplicado():number{
            return this._valorAplicado
        }

        public get tempoMeses():number{
            return this._tempoMeses
        }

        abstract calcularRendimento():number
    }

    class RendaFixa extends Investimento{

        calcularRendimento():number{
            return (this.valorAplicado+(this.valorAplicado*0.008*this.tempoMeses))
        }
    }

    class Acoes extends Investimento{

        private _taxa:number

        constructor(valorAplicado:number,tempoMeses:number,taxa:number){
            super(valorAplicado,tempoMeses)
            this._taxa=taxa
        }

        calcularRendimento():number{
            return (this.valorAplicado+(this.valorAplicado*(this._taxa/100)*this.tempoMeses))
        }
    }

    let investimentos:Investimento[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Renda Fixa, 2-Ações, 3-Encerrar"))

        if(op==1){
            let valor=Number(prompt("Informe o valor aplicado: "))
            let meses=Number(prompt("Digite o tempo em meses: "))

            let investimento=new RendaFixa(valor,meses)
            investimentos.push(investimento)

            console.log(`Saldo final: R$ ${investimento.calcularRendimento()}`)
        }

        if(op==2){
            let valor=Number(prompt("Informe o valor aplicado: "))
            let meses=Number(prompt("Digite o tempo em meses: "))
            let taxa=Number(prompt("Digite a taxa de variação (%): "))

            let investimento=new Acoes(valor,meses,taxa)
            investimentos.push(investimento)

            console.log(`Saldo final: R$ ${investimento.calcularRendimento()}`)
        }
    }
}