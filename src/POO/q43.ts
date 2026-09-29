// 43. Repetição Encapsulamento Arrays
// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar &quot;SAIR&quot;. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).


export function q43POO():void{
    class Atleta{

        private _nome:string
        private _idade:number
        private _tempoMinutos:number

        constructor(nome:string,idade:number,tempoMinutos:number){
            this._nome=nome
            this._idade=idade
            this._tempoMinutos=tempoMinutos
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

        public get tempoMinutos():number{
            return this._tempoMinutos
        }

        public set tempoMinutos(value:number){
            this._tempoMinutos=value
        }
    }

    let atletas:Atleta[]=[]
    let nome:string=""

    while(nome!="SAIR"){
        nome=String(prompt("Nome do atleta ou SAIR: ")).toUpperCase()

        if(nome!="SAIR"){
            let idade:number=Number(prompt("Digite a Idade: "))
            let tempo:number=Number(prompt("Digite a quantidade de Tempo em minutos: "))

            let atleta:Atleta=new Atleta(nome,idade,tempo)
            atletas.push(atleta)
        }
    }

    let campeao:Atleta=atletas[0]

    for(let atleta of atletas){
        if(atleta.tempoMinutos<campeao.tempoMinutos){
            campeao=atleta
        }
    }

    console.log(`Campeão: ${campeao.nome}`)
    console.log(`Idade: ${campeao.idade}`)
    console.log(`Tempo: ${campeao.tempoMinutos} minutos`)
}