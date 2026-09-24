// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).

export function q13POO():void{
class Nota{
    nomeAluno:string
    nota1:number
    nota2:number

    constructor(nameStudent:string, grade1:number, grade2:number){
        this.nomeAluno=nameStudent
        this.nota1=grade1
        this.nota2=grade2
    }

    media(){
        let mediaNota= (this.nota1+this.nota2)/2

        if(mediaNota >=7){
            return(`Parabens ${this.nomeAluno}, você foi aprovado com ${mediaNota}!!!`)
        }
        else{
            return(`Que pena ${this.nomeAluno}, você foi reprovado com ${mediaNota} melhore pra passar na proxima vez :)`)
        }
    }

}

let op:number=Number(prompt("Você deseja iniciar? 1-sim, 2-Não: "))

while(op!=2){
    let nomeAluno:string=String(prompt("Escreva o nome do aluno: "))
    let nota1:number=Number(prompt("Digite a primeira nota: "))
    let nota2:number=Number(prompt("Digite a segunda nota: "))

    let aluno= new Nota(nomeAluno,nota1,nota2)
    console.log(aluno.media())

    op=Number(prompt("Você deseja continuar? 1-sim, 2-Não: "))
}
}