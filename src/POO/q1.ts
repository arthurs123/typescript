
// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function q1POO():void{
class Bola{
    cor:string
    circuferencia:number
    material:string

    constructor(color:string, circumference:number, material:string){
        this.cor=color
        this.circuferencia=circumference
        this.material=material
    }

    trocaCor(novaCor:string):void{
        this.cor=novaCor
    }
    mostraCor():string{
            return this.cor
    }
}
let bola= new Bola("verde",34,"couro")

console.log(`Cor atual: ${bola.mostraCor()}`)

bola.trocaCor("Azul")

console.log(`Nova cor: ${bola.mostraCor()}`)
}