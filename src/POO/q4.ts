// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function q4POO():void{}
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
let comprimento:number= Number(prompt("Digite o valor do comprimento em metros: "))
let largura:number= Number(prompt("Digite o valor da largura em metros: "))

let total= new Retangulo(comprimento,largura)

alert(`Comprimento: ${comprimento}
       Largura: ${largura}
       Quantidade de pisos: ${total.calcularArea}
       Quantidade de rodapés: ${total.calcularPerimetro}`)