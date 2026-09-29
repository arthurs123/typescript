export function q33POO():void{
    abstract class Obra{

        private _titulo:string
        private _autor:string

        constructor(titulo:string,autor:string){
            this._titulo=titulo
            this._autor=autor
        }

        public get titulo():string{
            return this._titulo
        }

        public get autor():string{
            return this._autor
        }

        abstract registrarAtraso(dias:number):number
    }

    class LivroFisico extends Obra{

        registrarAtraso(dias:number):number{
            return dias*2.5
        }
    }

    class ArtigoDigital extends Obra{

        registrarAtraso(dias:number):number{
            console.log(`Advertência registrada para ${this.titulo}`)
            return 0
        }
    }

    let obras:Obra[]=[]
    let totalMultas=0
    let op=0

    while(op!=3){
        op=Number(prompt("Escolha uma opção: 1-Livro Físico, 2-Artigo Digital, 3-Encerrar"))

        if(op==1){
            let titulo:string=String(prompt("informe o título do livro: "))
            let autor:string=String(prompt("Informe o autor do livro: "))
            let dias:number=Number(prompt(" Digite os dias de atraso: "))

            if(dias>=0){
                let livro=new LivroFisico(titulo,autor)
                obras.push(livro)
                totalMultas+=livro.registrarAtraso(dias)
            }
        }

        if(op==2){
            let titulo:string=String(prompt("Título: "))
            let autor:string=String(prompt("Autor: "))
            let dias:number=Number(prompt("Dias de atraso: "))

            if(dias>=0){
                let artigo=new ArtigoDigital(titulo,autor)
                obras.push(artigo)
                totalMultas+=artigo.registrarAtraso(dias)
            }
        }
    }

    console.log(`Total de multas: R$ ${totalMultas}`)
}