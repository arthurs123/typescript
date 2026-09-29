// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.


export function q19POO():void{

    abstract class Sensor{

        private _codigo:string
        private _leitura:number

        constructor(codigo:string,leitura:number){
            this._codigo=codigo
            this._leitura=leitura
        }

        public get codigo():string{
            return this._codigo
        }

        public set codigo(value:string){
            this._codigo=value
        }

        public get leitura():number{
            return this._leitura
        }

        public set leitura(value:number){
            this._leitura=value
        }

        abstract exibirLeitura():void
        abstract alerta():boolean
    }

    class SensorTemperatura extends Sensor{

        exibirLeitura():void{
            console.log(`${this.codigo}: ${this.leitura} °C`)
        }

        alerta():boolean{
            return (this.leitura>40)
        }
    }

    class SensorPressao extends Sensor{

        exibirLeitura():void{
            console.log(`${this.codigo}: ${this.leitura} atm`)
        }

        alerta():boolean{
            return (this.leitura>5)
        }
    }

    let sensores:Sensor[]=[]
    let op:number=0

    while(op!=3){

        op=Number(prompt("1-Sensor de Temperatura, 2-Sensor de Pressão, 3-Encerrar"))

        if(op==1){

            let codigo:string=String(prompt("Código do sensor: "))
            let leitura:number=Number(prompt("Leitura em °C: "))

            let sensor:Sensor=new SensorTemperatura(codigo,leitura)

            sensores.push(sensor)
        }

        if(op==2){

            let codigo:string=String(prompt("Código do sensor: "))
            let leitura:number=Number(prompt("Leitura em atm: "))

            let sensor:Sensor=new SensorPressao(codigo,leitura)

            sensores.push(sensor)
        }
    }

    console.log("Sensores em situação de perigo:")

    for(let sensor of sensores){

        if(sensor.alerta()){
            sensor.exibirLeitura()
        }
    }
}