// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function q14POO():void{

    class Livro{

        private _titulo:string
        private _autor:string
        private _ano:number
        private _disponivel:boolean

        constructor(titulo:string,autor:string,ano:number){
            this._titulo=titulo
            this._autor=autor
            this._ano=ano
            this._disponivel=true
        }

        public get titulo():string{
            return this._titulo
        }

        public set titulo(value:string){
            this._titulo=value
        }

        public get autor():string{
            return this._autor
        }

        public set autor(value:string){
            this._autor=value
        }

        public get ano():number{
            return this._ano
        }

        public set ano(value:number){
            this._ano=value
        }

        public get disponivel():boolean{
            return this._disponivel
        }

        public set disponivel(value:boolean){
            this._disponivel=value
        }
    }

    let livros:Livro[]=[]
    let quantidade:number=0

    while(quantidade<15){

        let titulo:string=String(prompt("Escreva o Título: "))
        let autor:string=String(prompt("Informe o Autor: "))
        let ano:number=Number(prompt("Informe o Ano de publicação: "))

        let livro:Livro=new Livro(titulo,autor,ano)

        livros.push(livro)
        quantidade++
    }

    console.log("Livros disponíveis:")

    for(let livro of livros){
        if(livro.disponivel){
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`)
        }
    }

    let pesquisa:string=String(prompt("Digite o título do livro para empréstimo: "))
    let encontrado:boolean=false

    for(let livro of livros){
        if(livro.titulo==pesquisa){

            encontrado=true

            if(livro.disponivel){
                livro.disponivel=false
                console.log("Livro emprestado com sucesso!")
            }else{
                console.log("Livro indisponível!")
            }
        }
    }

    if(!encontrado){
        console.log("Livro não encontrado!")
    }
}