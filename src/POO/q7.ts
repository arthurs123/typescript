// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.


class Cadastro{

    nome:string
    cargo:string
    private _salario:number

    constructor(name:string, position:string, wage:number){
       this.nome=name
       this.cargo=position
       this._salario=wage
    }

    public get salario(): number {
        return this._salario
    }
    public set salario(value: number) {
        this._salario = value
    }
     aumentoSalarial(percentual: number): void {
        this._salario += this._salario * (percentual / 100)

        console.log(`Nome: ${this.nome}`)
        console.log(`Novo salário: R$ ${this._salario}`)
        console.log(`Cargo: ${this.cargo}`)
    }




}

let usuario = new Cadastro("pedro","professor",1200)

console.log(usuario.aumentoSalarial(20))