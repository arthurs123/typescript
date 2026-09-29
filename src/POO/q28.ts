// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function q28POO():void{
    class Acomodacao{

        private _numeroQuarto:number
        protected _precoDiaria:number

        constructor(numeroQuarto:number,precoDiaria:number){
            this._numeroQuarto=numeroQuarto
            this._precoDiaria=precoDiaria
        }

        public get numeroQuarto():number{
            return this._numeroQuarto
        }

        calcularTotal(dias:number):number{
            return this._precoDiaria*dias
        }
    }

    class SuiteMaster extends Acomodacao{

        private _valorHidro:number

        constructor(numeroQuarto:number,precoDiaria:number,valorHidro:number){
            super(numeroQuarto,precoDiaria)
            this._valorHidro=valorHidro
        }

        calcularTotal(dias:number):number{
            return (this._precoDiaria+this._valorHidro)*dias
        }
    }

    let lista:Acomodacao[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("Qual opção voce deseja? 1-Acomodação básica, 2-Suíte Master, 3-Encerrar"))

        if(op==1){
            let quarto=Number(prompt("Número do quarto: "))
            let preco=Number(prompt("Preço da diária: "))
            let dias=Number(prompt("Quantidade de dias: "))

            if(quarto>0 && preco>0 && dias>0){
                let acomodacao=new Acomodacao(quarto,preco)
                lista.push(acomodacao)
            }
        }

        if(op==2){
            let quarto=Number(prompt("Número do quarto: "))
            let preco=Number(prompt("Preço da diária: "))
            let hidro=Number(prompt("Valor da hidromassagem: "))
            let dias=Number(prompt("Quantidade de dias: "))

            if(quarto>0 && preco>0 && hidro>0 && dias>0){
                let acomodacao=new SuiteMaster(quarto,preco,hidro)
                lista.push(acomodacao)
            }
        }
    }

    for(let acomodacao of lista){
        let dias=Number(prompt(`Quantidade de dias do quarto ${acomodacao.numeroQuarto}:`))
        let total=acomodacao.calcularTotal(dias)

        if(total>1000){
            console.log(`Quarto: ${acomodacao.numeroQuarto}, Total: R$ ${total}`)
        }
    }
}