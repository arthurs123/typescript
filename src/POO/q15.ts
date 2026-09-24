export function q15POO():void{
    // 15. Herança Polimorfismo Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.


abstract class Funcionario{
    nome:string
    private _cpf:number
    salario=1500
    constructor(name:string, cpf:number){
        this.nome=name
        this._cpf=cpf
    }
   
    abstract calcSalario():void
}

class FuncionarioAssalariado extends Funcionario{

    
    
    constructor(nome:string,cpf:number,wage:number){
        super(nome,cpf)
        this.salario=wage
    }

    calcSalario(){
        return(`Olá ${this.nome}, seu salário é de ${this.salario}`)
    }
}

class FuncionarioHorista extends Funcionario {
    private horasTrab:number
    private valorHora:number

    constructor(nome:string, cpf:number, hourWork:number, valueHour:number) {
        super(nome, cpf)
        this.horasTrab=hourWork
        this.valorHora=valueHour
    }

    calcSalario(): string {
        let salaFinal =this.horasTrab * this.valorHora

        return (`Olá ${this.nome}, seu salário é de R$ ${salaFinal}`)
    }


}
}