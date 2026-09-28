// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function q3POO():void{}
class Retangulo{
    comprimento:number
    largura:number

    constructor(width:number, lenght:number){
        this.largura=width
        this.comprimento=lenght
        
    }

    mudarLados(novoComprimento:number, novaLargura:number):void{
        this.comprimento=novoComprimento
        this.largura=novaLargura
    }
   retornarLados(): string {
    return `Comprimento: ${this.comprimento}M, Largura: ${this.largura}M`;
}
    calcularArea(){
            return this.largura*this.comprimento
                 
    }
    calcularPerimetro(){  
        return 2*(this.largura+this.comprimento)
    }
}

let retangulo = new Retangulo(6,12)

console.log(retangulo)
console.log(`Área: ${retangulo.calcularArea()}M²`)
console.log(`Perímetro: ${retangulo.calcularPerimetro()}cm²`)

retangulo.mudarLados(4,15)
console.log(`Novos lados: ${retangulo.retornarLados()}`)