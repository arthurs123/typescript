// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function q21POO():void{
abstract class Projeto{

    private _titulo:string
    private _coordenador:string
    protected _nota:number

    constructor(titulo:string, coordenador:string, nota:number) {
        this._titulo=titulo
        this._coordenador=coordenador
        this._nota=nota
    }

    public get titulo():string {
        return this._titulo
    }

    public set titulo(value:string) {
        this._titulo=value
    }

    public get coordenador():string {
        return this._coordenador
    }

    public set coordenador(value:string) {
        this._coordenador=value
    }

    public get nota():number {
        return this._nota
    }

    public set nota(value:number){
        if (value >= 0 && value <= 10) {
            this._nota=value
        }
    }

    abstract mostrarProjeto():string
}


class ProjetoVerde extends Projeto{

    private _tipo="Plantio urbano"

    constructor(titulo:string, coordenador:string, nota:number) {
        super(titulo, coordenador, nota)
    }

    mostrarProjeto():string {
        return `Projeto Verde: ${this.titulo}, Coordenador: ${this.coordenador}, Nota: ${this.nota}`
    }
}


class ProjetoCultural extends Projeto{

    private _tipo="Conscientização"

    constructor(titulo:string, coordenador:string, nota:number) {
        super(titulo, coordenador, nota)
    }

    mostrarProjeto():string {
        return `Projeto Cultural: ${this.titulo}, Coordenador: ${this.coordenador}, Nota: ${this.nota}`
    }
}


let listaProjetos:Projeto[] = []

let op:number=Number(prompt("Deseja cadastrar um projeto? 1-Sim, 2-Não"))

while (op!=2){

    let tipo:number=Number(prompt("Qual o tipo do projeto?\n1 - Projeto Verde\n2 - Projeto Cultural"))

    let titulo:string=prompt("Informe o título do projeto: ") || ""

    let coordenador:string=prompt("Informe o coordenador: ") || ""

    let nota:number=Number(prompt("Informe a nota do projeto (0 a 10): "))

    while (nota < 0 || nota > 10) {
        nota=Number(prompt("Nota inválida! Informe uma nota entre 0 e 10: "))
    }

    if (tipo==1){

        let projeto=new ProjetoVerde(titulo, coordenador, nota)

        listaProjetos.push(projeto)

        console.log("projeto Verde cadastrado")

    } else if(tipo==2){

        let projeto=new ProjetoCultural(titulo, coordenador, nota)

        listaProjetos.push(projeto)

        console.log("Projeto Cultural cadastrado")
    }

    op=Number(prompt("Deseja cadastrar outro projeto? 1-Sim, 2-Não"))
}


let soma:number=0

for (let projeto of listaProjetos){
    soma += projeto.nota
}

let media:number=soma/listaProjetos.length

console.log(`media da competição: ${media}`)

console.log("Projetos acima da média:")

for (let i=listaProjetos.length-1; i>=0; i--){

    if (listaProjetos[i].nota > media) {
        console.log(listaProjetos[i].mostrarProjeto())

    }
}

}