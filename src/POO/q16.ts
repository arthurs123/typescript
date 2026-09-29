// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação (ex: &quot;Carnívoro&quot;, &quot;Herbívoro”, ...). Para as aves precisa-se saber
// se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.
// O Método &quot;Hora da Alimentação&quot; (Rotina Polimórfica): Crie uma função ou método executável
// chamado simularHoraAlimentacao(listaAnimais: Animal[]). Esse método deve percorrer o array de
// animais com um laço de repetição, imprimindo o nome do animal sendo alimentado pelo tratador e
// acionando o seu método emitirSom()
// Fluxo do Programa: O sistema deve cadastrar vários animais, listar por tipo (Mamíferos ou Aves) e
// ao final a disparar a rotina simularHoraAlimentacao() chamando o método de som de cada um.


export function q16POO():void{

    abstract class Animal{

        private _nome:string
        private _especie:string
        private _idade:number
        private _sexo:string

        constructor(nome:string,especie:string,idade:number,sexo:string){
            this._nome=nome
            this._especie=especie
            this._idade=idade
            this._sexo=sexo
        }

        public get nome():string{
            return this._nome
        }

        public set nome(value:string){
            this._nome=value
        }

        public get especie():string{
            return this._especie
        }

        public set especie(value:string){
            this._especie=value
        }

        public get idade():number{
            return this._idade
        }

        public set idade(value:number){
            this._idade=value
        }

        public get sexo():string{
            return this._sexo
        }

        public set sexo(value:string){
            this._sexo=value
        }

        abstract emitirSom():void
        abstract mover():void
    }

    class Mamifero extends Animal{

        private _alimentacao:string

        constructor(nome:string,especie:string,idade:number,sexo:string,alimentacao:string){
            super(nome,especie,idade,sexo)
            this._alimentacao=alimentacao
        }

        public get alimentacao():string{
            return this._alimentacao
        }

        public set alimentacao(value:string){
            this._alimentacao=value
        }

        emitirSom():void{
            console.log(`${this.nome}: emitindo som de mamífero`)
        }

        mover():void{
            console.log(`${this.nome}: andando`)
        }
    }

    class Ave extends Animal{

        private _migratoria:boolean

        constructor(nome:string,especie:string,idade:number,sexo:string,migratoria:boolean){
            super(nome,especie,idade,sexo)
            this._migratoria=migratoria
        }

        public get migratoria():boolean{
            return this._migratoria
        }

        public set migratoria(value:boolean){
            this._migratoria=value
        }

        emitirSom():void{
            console.log(`${this.nome}: emitindo som de ave`)
        }

        mover():void{
            console.log(`${this.nome}: voando`)
        }
    }

    function simularHoraAlimentacao(listaAnimais:Animal[]):void{

        for(let animal of listaAnimais){
            console.log(`Tratador alimentando: ${animal.nome}`)
            animal.emitirSom()
        }
    }

    let animais:Animal[]=[]
    let op:number=0

    while(op!=3){

        op=Number(prompt("1-Mamífero, 2-Ave, 3-Encerrar"))

        if(op==1){

            let nome:string=String(prompt("Informe o Nome: "))
            let especie:string=String(prompt("informe a Espécie: "))
            let idade:number=Number(prompt("Digite a Idade: "))
            let sexo:string=String(prompt("Informe o Sexo: "))
            let alimentacao:string=String(prompt("Tipo de alimentação: "))

            let animal:Animal=new Mamifero(nome,especie,idade,sexo,alimentacao)

            animais.push(animal)
        }

        if(op==2){

            let nome:string=String(prompt("Informe o Nome: "))
            let especie:string=String(prompt("informe a Espécie: "))
            let idade:number=Number(prompt("Digite a Idade: "))
            let sexo:string=String(prompt("Informe o Sexo: "))
            let migratoria:boolean=Boolean(prompt("É migratória? true/false"))

            let animal:Animal=new Ave(nome,especie,idade,sexo,migratoria)

            animais.push(animal)
        }
    }

    console.log("Mamíferos: ")

    for(let animal of animais){
        if(animal instanceof Mamifero){
            console.log(animal.nome)
        }
    }

    console.log("Aves:")

    for(let animal of animais){
        if(animal instanceof Ave){
            console.log(animal.nome)
        }
    }

    simularHoraAlimentacao(animais)
}