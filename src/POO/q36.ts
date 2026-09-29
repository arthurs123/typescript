// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.


export function q36POO():void{
    class Curso{

        private _titulo:string
        private _cargaHoraria:number

        constructor(titulo:string,cargaHoraria:number){
            this._titulo=titulo
            this._cargaHoraria=cargaHoraria
        }

        public get titulo():string{
            return this._titulo
        }

        public get cargaHoraria():number{
            return this._cargaHoraria
        }

        emitirCertificado():string{
            return (`Certificado liberado: ${this._titulo}`)
        }
    }

    class CursoLivre extends Curso{

        emitirCertificado():string{
            return (`Certificado liberado: ${this.titulo}`)
        }
    }

    class CursoTecnico extends Curso{

        private _notaProjeto:number

        constructor(titulo:string,cargaHoraria:number,notaProjeto:number){
            super(titulo,cargaHoraria)
            this._notaProjeto=notaProjeto
        }

        emitirCertificado():string{
            if(this._notaProjeto>=7){
                return (`Certificado liberado: ${this.titulo}`)
            }else{
                return (`Certificado pendente: ${this.titulo}`)
            }
        }
    }

    let cursos:Curso[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Curso Livre, 2-Curso Técnico, 3-Encerrar"))

        if(op==1){
            let titulo:string=String(prompt("Título: "))
            let carga:number=Number(prompt("Carga horária: "))

            cursos.push(new CursoLivre(titulo,carga))
        }

        if(op==2){
            let titulo:string=String(prompt("Título: "))
            let carga:number=Number(prompt("Carga horária: "))
            let nota:number=Number(prompt("Nota do projeto final: "))

            cursos.push(new CursoTecnico(titulo,carga,nota))
        }
    }

    for(let curso of cursos){
        console.log(curso.emitirCertificado())
    }
}