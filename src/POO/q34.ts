// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.


export function q34POO():void{
    abstract class Veiculo{

        private _placa:number|string
        private _horaEntrada:Number

        constructor(placa:number|string,horaEntrada:number){
            this._placa=placa
            this._horaEntrada=horaEntrada
        }

        public get placa(){
            return (this._placa)
        }

        public get horaEntrada(){
            return this._horaEntrada
        }

        abstract calcularValor(horasPermanencia:number):number
    }

    class Carro extends Veiculo{

        calcularValor(horasPermanencia:number):number{
            return horasPermanencia*5
        }
    }

    class Moto extends Veiculo{

        calcularValor(horasPermanencia:number):number{
            return horasPermanencia*3
        }
    }

    let veiculos:Veiculo[]=[]
    let op=0
    let faturamento=0

    while(op!=3){
        op=Number(prompt("Escolha a opção: 1-Carro, 2-Moto, 3-Encerrar"))

        if(op==1){
            let placa:number|string=(prompt("Informe a Placa: "))||""
            let horaEntrada:number=Number(prompt("Hora de entrada: "))
            let horas=Number(prompt("Horas de permanência: "))

            if(horas>0){
                let carro=new Carro(placa,horaEntrada)
                veiculos.push(carro)
                faturamento+=carro.calcularValor(horas)
            }
        }

        if(op==2){
            let placa:number=Number(prompt("Placa: "))
            let horaEntrada:number=Number(prompt("Hora de entrada: "))
            let horas=Number(prompt("Horas de permanência: "))

            if(horas>0){
                let moto=new Moto(placa,horaEntrada)
                veiculos.push(moto)
                faturamento+=moto.calcularValor(horas)
            }
        }
    }

    for(let veiculo of veiculos){
        console.log(`Placa: ${veiculo.placa}, Entrada: ${veiculo.horaEntrada}`)
    }

    console.log(`Faturamento total: R$ ${faturamento}`)
}