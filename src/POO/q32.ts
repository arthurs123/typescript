export function q32POO():void{
    abstract class Jogador{

        private _nickname:string
        private _pontuacao:number

        constructor(nickname:string){
            this._nickname=nickname
            this._pontuacao=0
        }

        public get nickname():string{
            return this._nickname
        }

        public getPontuacao():number{
            return this._pontuacao
        }

        protected adicionarPontuacao(valor:number):void{
            this._pontuacao+=valor
        }

        abstract realizarMissao():void
    }

    class JogadorComum extends Jogador{

        realizarMissao():void{
            this.adicionarPontuacao(100)
        }
    }

    class JogadorPremium extends Jogador{

        realizarMissao():void{
            this.adicionarPontuacao(150)
        }
    }

    let jogadores:Jogador[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Jogador Comum\n2-Jogador Premium\n3-Encerrar cadastro"))

        if(op==1){
            let nickname=String(prompt("Nickname: "))
            jogadores.push(new JogadorComum(nickname))
        }

        if(op==2){
            let nickname=String(prompt("Nickname: "))
            jogadores.push(new JogadorPremium(nickname))
        }
    }

    op=0

    while(op!=2){
        op=Number(prompt("Escolha uma opção: 1-Realizar missão, 2-Encerrar"))

        if(op==1){
            let nickname=String(prompt("Qual jogador realizou a missão: "))

            for(let jogador of jogadores){
                if(jogador.nickname==nickname){
                    jogador.realizarMissao()
                }
            }
        }
    }

    for(let jogador of jogadores){
        console.log(`Jogador: ${jogador.nickname}, Pontuação: ${jogador.getPontuacao()}`)

        if(jogador.getPontuacao()>1000){
            console.log(`CAMPEÃO: ${jogador.nickname}`)
        }
    }
}