// 41. Abstração Herança Polimorfismo Repetição Encapsulamento
// Gerenciador de Encomendas de Correios
// Um centro de distribuição precisa calcular o frete de suas entregas. A classe Encomenda possui o peso
// em kg e a cidade de destino privados. A classe EncomendaPadrão cobra R$ 10,00 por kg. A classe
// EncomendaExpressa cobra R$ 20,00 por kg e garante entrega em até 24 horas. O sistema solicita em
// um laço de repetição os dados das encomendas registradas no balcão. O programa processa cada uma,
// calcula o valor do frete utilizando o método sobrescrito nas subclasses e exibe o valor acumulado
// cobrado em taxas de frete expresso durante o dia.


export function q41POO():void{
    abstract class Encomenda{

        private _peso:number
        private _cidade:string

        constructor(peso:number,cidade:string){
            this._peso=peso
            this._cidade=cidade
        }

        public get peso():number{
            return this._peso
        }

        public get cidade():string{
            return this._cidade
        }

        abstract calcularFrete():number
    }

    class EncomendaPadrao extends Encomenda{

        calcularFrete():number{
            return (this.peso*10)
        }
    }

    class EncomendaExpressa extends Encomenda{

        calcularFrete():number{
            return (this.peso*20)
        }
    }

    let encomendas:Encomenda[]=[]
    let freteExpresso:number=0
    let op:number=0

    while(op!=3){
        op=Number(prompt("1-Encomenda Padrão, 2-Encomenda Expressa, 3-Encerrar"))

        if(op==1){
            let peso:number=Number(prompt("Digite o peso em kg: "))
            let cidade:string=String(prompt("Informe a cidade de destino: "))

            let encomenda:Encomenda=new EncomendaPadrao(peso,cidade)
            encomendas.push(encomenda)

            console.log(`Frete: R$ ${encomenda.calcularFrete()}`)
        }

        if(op==2){
            let peso:number=Number(prompt("Digite o peso em kg: "))
            let cidade:string=String(prompt("Informe a cidade de destino: "))

            let encomenda:Encomenda=new EncomendaExpressa(peso,cidade)
            encomendas.push(encomenda)

            freteExpresso+=encomenda.calcularFrete()

            console.log(`Frete: R$ ${encomenda.calcularFrete()}`)
        }
    }

    console.log(`Total cobrado em fretes expressos: R$ ${freteExpresso}`)
}