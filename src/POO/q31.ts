


export function q31POO():void{
    abstract class Projeto{

        private _titulo:string
        private _coordenador:string
        private _nota:number

        constructor(titulo:string,coordenador:string,nota:number){
        this._titulo=titulo
        this._coordenador=coordenador
        this._nota=0
        this.setNota(nota)
    }


        public get titulo():string{
            return this._titulo
        }

        public get coordenador():string{
            return this._coordenador
        }

        public get nota():number{
            return this._nota
        }

        public setNota(valor:number):void{
            if(valor>=0 && valor<=10){
                this._nota=valor
            }else{
                console.log("Nota inválida!")
            }
        }

        abstract descricaoCategoria():string
    }

    class ProjetoVerde extends Projeto{

        descricaoCategoria():string{
            return "Plantio urbano"
        }
    }

    class ProjetoCultural extends Projeto{

        descricaoCategoria():string{
            return "Conscientização"
        }
    }

    let projetos:Projeto[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Projeto Verde, 2-Projeto Cultural\n3-Encerrar"))

        if(op==1){
            let titulo=String(prompt("Título: "))
            let coordenador=String(prompt("Coordenador: "))
            let nota=Number(prompt("Nota: "))

            if(nota>=0 && nota<=10){
                projetos.push(new ProjetoVerde(titulo,coordenador,nota))
            }
        }

        if(op==2){
            let titulo=String(prompt("Título: "))
            let coordenador=String(prompt("Coordenador: "))
            let nota=Number(prompt("Nota: "))

            if(nota>=0 && nota<=10){
                projetos.push(new ProjetoCultural(titulo,coordenador,nota))
            }
        }
    }

    let soma=0

    for(let projeto of projetos){
        soma+=projeto.nota
    }

    let media=soma/projetos.length

    console.log(`Média das notas: ${media}`)

    for(let projeto of projetos){
        if(projeto.nota>media){
            console.log(`Título: ${projeto.titulo} | Coordenador: ${projeto.coordenador} | Nota: ${projeto.nota} | Categoria: ${projeto.descricaoCategoria()}`)
        }
    }
}