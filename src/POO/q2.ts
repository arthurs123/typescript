// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function q2POO():void{}
class Quadrado{
    tamanhoLado:number

    constructor(tamanhoLado:number){
        this.tamanhoLado=tamanhoLado
    }

    mudarValorLado(){
        let area=this.tamanhoLado**2
        console.log(`O valor do lado é de ${this.tamanhoLado} e o valor da area é de ${area}`)
    }
}

