// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.


export function q30POO():void{
    class Passagem{

        private _nome:string
        private _cpf:string
        protected _valorBase:number

        constructor(nome:string,cpf:string,valorBase:number){
            this._nome=nome
            this._cpf=cpf
            this._valorBase=valorBase
        }

        public get nome():string{
            return this._nome
        }

        public get cpf():string{
            return this._cpf
        }

        calcularValor():number{
            return this._valorBase
        }
    }

    class PassagemEstudantil extends Passagem{

        calcularValor():number{
            return this._valorBase*0.5
        }
    }

    let passagens:Passagem[]=[]
    let op=0
    let faturamento=0

    while(op!=3){
        op=Number(prompt("Escolha uma opção: 1-Passagem comum, 2-Passagem estudantil, 3-Encerrar"))

        if(op==1){
            let nome=String(prompt("Nome: "))
            let cpf=String(prompt("CPF: "))
            let valor=Number(prompt("Valor da passagem: "))

            if(nome!="" && cpf!="" && valor>0){
                let passagem=new Passagem(nome,cpf,valor)
                passagens.push(passagem)
                faturamento+=passagem.calcularValor()
            }
        }

        if(op==2){
            let nome=String(prompt("Nome: "))
            let cpf=String(prompt("CPF: "))
            let valor=Number(prompt("Valor da passagem: "))

            if(nome!="" && cpf!="" && valor>0){
                let passagem=new PassagemEstudantil(nome,cpf,valor)
                passagens.push(passagem)
                faturamento+=passagem.calcularValor()
            }
        }
    }

    for(let passagem of passagens){
        console.log(`Nome: ${passagem.nome}, CPF: ${passagem.cpf}, Valor: R$ ${passagem.calcularValor()}`)
    }

    console.log(`Faturamento total: R$ ${faturamento}`)
}