// 8. Arrays Repetição
// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function q8POO():void{}
class Funcionario{

    nome:string
    cargo:string
    salario:number

    constructor(nome:string, cargo:string, salario:number){
        this.nome=nome
        this.cargo=cargo
        this.salario=salario
    }

    exibir(){
        console.log(`O funcionário ${this.nome}, de cargo ${this.cargo}, tem um salario de ${this.salario}R$`)
    }
}
let listaFuncionarios:Funcionario[]=[]
let op:number=Number(prompt("Voce deseja entrar? 1-sim, 2-nao: "))

while(op!=2){

    let nome:string=String(prompt("Informe o nome: "))
    let cargo:string=String(prompt("Informe o cargo: "))
    let salario:number=Number(prompt("Informe o salario: "))

    let usuario= new Funcionario(nome,cargo,salario)

    listaFuncionarios.push(usuario)

    usuario.exibir()

     op=Number(prompt("Voce deseja continuar? 1-sim, 2-nao: "))
}