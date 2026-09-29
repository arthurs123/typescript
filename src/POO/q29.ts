// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.


export function q29POO():void{
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

        abstract calcularMulta(dias:number):number
    }

    class LivroFisico extends Obra{

        calcularMulta(dias:number):number{
            return dias*2.5
        }
    }

    class ArtigoDigital extends Obra{

        calcularMulta(dias:number):number{
            return 0
        }
    }

    let obras:Obra[]=[]
    let totalMultas:number=0
    let op=0

    while(op!=3){
        op=Number(prompt("escolha uma opção: 1-Livro físico, 2-Artigo digital, 3-Encerrar"))

        if(op==1){
            let titulo=String(prompt("Título: "))
            let autor=String(prompt("Autor: "))
            let dias=Number(prompt("Dias de atraso: "))

            if(titulo!="" && autor!="" && dias>=0){
                let livro=new LivroFisico(titulo,autor)
                obras.push(livro)
                totalMultas+=livro.calcularMulta(dias)
            }
        }

        if(op==2){
            let titulo=String(prompt("Título: "))
            let autor=String(prompt("Autor: "))
            let dias=Number(prompt("Dias de atraso: "))

            if(titulo!="" && autor!="" && dias>=0){
                let artigo=new ArtigoDigital(titulo,autor)
                obras.push(artigo)
                console.log(`Advertência virtual registrada para: ${titulo}`)
            }
        }
    }

    console.log(`Total de multas: R$ ${totalMultas}`)
}