// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.


export function q35POO():void{
    class Paciente{

        private _nome:string
        private _cartaoSUS:number

        constructor(nome:string,cartaoSUS:number){
            this._nome=nome
            this._cartaoSUS=cartaoSUS
        }

        public get nome():string{
            return this._nome
        }

        public get cartaoSUS():number{
            return this._cartaoSUS
        }

        exibirFicha(){
            return (`Nome: ${this._nome}, Cartão SUS: ${this._cartaoSUS}`)
        }
    }

    class PacienteComum extends Paciente{

        exibirFicha():string{
            return (`Paciente comum, ${super.exibirFicha()}`)
        }
    }

    class PacientePrioritario extends Paciente{

        private _prioridade:string

        constructor(nome:string,cartaoSUS:number,prioridade:string){
            super(nome,cartaoSUS)
            this._prioridade=prioridade
        }

        exibirFicha(){
            return (`PRIORIDADE: ${this._prioridade}, ${super.exibirFicha()}`)
        }
    }

    let pacientes:Paciente[]=[]
    let prioritarios=0
    let op=0

    while(op!=3){
        op=Number(prompt("Escolha uma opção: 1-Paciente Comum, 2-Paciente Prioritário, 3-Encerrar"))

        if(op==1){
            let nome:string=String(prompt("Escreva o nome: "))
            let cartao:number=Number(prompt("Informe o numero do Cartão SUS: "))

            pacientes.push(new PacienteComum(nome,cartao))
        }

        if(op==2){
            let nome:string=String(prompt("Escreva o nome: "))
            let cartao:number=Number(prompt("Informe o numero do Cartão SUS: "))
            let prioridade:string=String(prompt("Tipo de prioridade: "))

            pacientes.push(new PacientePrioritario(nome,cartao,prioridade))
            prioritarios++
        }
    }

    for(let paciente of pacientes){
        console.log(paciente.exibirFicha())
    }

    console.log(`Total de pacientes prioritários: ${prioritarios}`)
}