// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.


class Livro{
    titulo:string
    autor:string
    anoPubli:number
    disponibilidade:boolean

    constructor(title:string, author:string, publication:number, disponibility:boolean){
        this.titulo=title
        this.autor=author
        this.anoPubli=publication
        this.disponibilidade=disponibility
    }

    public listarLivros():void{
        
    }
}