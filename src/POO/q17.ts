export function q17POO():void{
    // 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

abstract class Usuario {
    nome:string
    id:number

    constructor(name:string, identificador:number){
        this.nome=name
        this.id=identificador
    }

    abstract identificar():string
}

class Aluno extends Usuario {
    curso:string

    constructor(name:string, identificador:number, course:string){
        super(name, identificador)
        this.curso=course
    }

    identificar(){
        return(`Aluno: ${this.nome} - Curso: ${this.curso}`)
    }
}

class Servidor extends Usuario {
    departamento:string

    constructor(name:string, identificador:number, department:string){
        super(name, identificador)
        this.departamento=department
    }

    identificar(){
        return(`Servidor: ${this.nome} - Departamento: ${this.departamento}`)
    }
}


let historico:Usuario[] = []

let op:number=Number(prompt("Deseja cadastrar um usuário? 1-Sim, 2-Não: "))

while(op!=2){

    let tipo:number=Number(prompt("Digite o tipo de usuário: 1-Aluno, 2-Servidor: "))

    let nome:string=String(prompt("Digite o nome completo: "))
    let id:number=Number(prompt("Digite o identificador: "))

    if(tipo==1){
        let curso:string=String(prompt("Digite o curso: "))

        let aluno=new Aluno(nome,id,curso)

        historico.push(aluno)

        console.log("Acesso registrado!")
    }
    else{
        let departamento:string=String(prompt("Digite o departamento: "))

        let servidor=new Servidor(nome,id,departamento)

        historico.push(servidor)

        console.log("Acesso registrado!")
    }

    op=Number(prompt("Deseja cadastrar outro usuário? 1-Sim, 2-Não: "))
}


let totAlunos:number=0
let totServidores:number=0

console.log("----- HISTÓRICO DO REFEITÓRIO -----")

let i:number=0

while(i<historico.length){

    console.log(historico[i].identificar())

    if(historico[i] instanceof Aluno){
        totAlunos++
    }
    else{
        totServidores++
    }

    i++
}

console.log(`Total de acessos de alunos: ${totAlunos}`)
console.log(`Total de acessos de servidores: ${totServidores}`)
}