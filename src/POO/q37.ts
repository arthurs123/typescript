// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.


export function q37POO():void{
    abstract class Consumidor{

        private _numeroConta:number
        private _consumo:number

        constructor(numeroConta:number,consumo:number){
            this._numeroConta=numeroConta
            this._consumo=consumo
        }

        public get numeroConta():number{
            return this._numeroConta
        }

        public get consumo():number{
            return this._consumo
        }

        abstract calcularValor():number
    }

    class ConsumidorResidencial extends Consumidor{

        calcularValor():number{
            return (this.consumo*0.75)
        }
    }

    class ConsumidorComercial extends Consumidor{

        calcularValor():number{
            if(this.consumo<=1000){
                return (this.consumo*0.60)
            }else{
                return (1000*0.60)+((this.consumo-1000)*0.50)
            }
        }
    }

    let consumidores:Consumidor[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Residencial\n2-Comercial\n3-Encerrar"))

        if(op==1){
            let conta:number=Number(prompt("Número da conta: "))
            let consumo:number=Number(prompt("Consumo em kWh: "))

            consumidores.push(new ConsumidorResidencial(conta,consumo))
        }

        if(op==2){
            let conta:number=Number(prompt("Número da conta: "))
            let consumo:number=Number(prompt("Consumo em kWh: "))

            consumidores.push(new ConsumidorComercial(conta,consumo))
        }
    }

    let soma=0

    for(let consumidor of consumidores){
        console.log(`Conta: ${consumidor.numeroConta}, Consumo: ${consumidor.consumo} kWh, Valor: R$ ${consumidor.calcularValor()}`)
        soma+=consumidor.consumo
    }

    let media=soma/consumidores.length

    console.log(`Média de consumo: ${media} kWh`)
}