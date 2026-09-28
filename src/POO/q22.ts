// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente

export function q22POO():void{
abstract class Veiculos{

    private _placa:number|string
    private _quilometragem:number

    constructor(plate:number|string, km:number){
        this._placa=plate
        this._quilometragem=km
    }

    public get placa():number|string{
        return this._placa
    }

    public get quilometragem():number{
        return this._quilometragem
    }

    abstract revisao():void
}


class Onibus extends Veiculos{

    revisao():void{

        if(this.quilometragem >= 10000){
            console.log(`Olá, o ônibus de placa ${this.placa} precisa de revisão!`)
        }
        else{
            console.log(`O ônibus de placa ${this.placa} não precisa de revisão.`)
        }
    }
}


class Ambulancia extends Veiculos{

    revisao():void{

        if(this.quilometragem >= 5000){
            console.log(`Olá, a ambulância de placa ${this.placa} precisa de revisão!`)
        }
        else{
            console.log(`A ambulância de placa ${this.placa} não precisa de revisão.`)
        }
    }
}


let listaVeiculos:Veiculos[]=[]

let op:number=Number(prompt("Você deseja entrar no sistema? 1-Sim, 2-Não"))

while(op!=2){

    let tipo:number=Number(
        prompt("Qual o tipo do veículo? 1-Ônibus, 2-Ambulância"))

    let placa:number|string=prompt("Informe a placa do veículo: ") || ""

    let quilometragem:number=Number(prompt("Informe a quilometragem do veículo: "))

    if(tipo==1){

        let veiculo=new Onibus(placa,quilometragem)
        veiculo.revisao()
        listaVeiculos.push(veiculo)

    }

    else if(tipo==2){

        let veiculo=new Ambulancia(placa,quilometragem)
        veiculo.revisao()
        listaVeiculos.push(veiculo)
        
    }

    op=Number(prompt("Você deseja cadastrar outro veículo? 1-Sim, 2-Não") )
}
}
