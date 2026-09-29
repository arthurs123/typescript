// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.


export function q5POO():void{

    class Pessoa{

        private _nome:string
        private _idade:number
        private _peso:number
        private _altura:number

        constructor(nome:string,idade:number,peso:number,altura:number){
            this._nome=nome
            this._idade=idade
            this._peso=peso
            this._altura=altura
        }

        public get nome():string{
            return this._nome
        }

        public set nome(value:string){
            this._nome=value
        }

        public get idade():number{
            return this._idade
        }

        public set idade(value:number){
            this._idade=value
        }

        public get peso():number{
            return this._peso
        }

        public set peso(value:number){
            this._peso=value
        }

        public get altura():number{
            return this._altura
        }

        public set altura(value:number){
            this._altura=value
        }

        envelhecer():void{
            this._idade++

            if(this._idade<21){
                this._altura+=0.5
            }
        }

        engordar(kg:number):void{
            this._peso+=kg
        }

        emagrecer(kg:number):void{
            this._peso-=kg
        }

        crescer(cm:number):void{
            this._altura+=cm
        }
    }

    let nome:string=String(prompt("Escreva o Nome: "))
    let idade:number=Number(prompt("Digite a Idade: "))
    let peso:number=Number(prompt("Digite o Peso: "))
    let altura:number=Number(prompt("Digirte a Altura em cm: "))

    let pessoa:Pessoa=new Pessoa(nome,idade,peso,altura)

    pessoa.envelhecer()

    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade}`)
    console.log(`Peso: ${pessoa.peso}`)
    console.log(`Altura: ${pessoa.altura} cm`)
}