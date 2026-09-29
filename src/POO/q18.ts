// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.
// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja &quot;DE&quot;, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.


export function q18POO():void{

    abstract class Funcionario{

        private _nome:string
        private _matricula:string
        private _salarioBase:number

        constructor(nome:string,matricula:string,salarioBase:number){
            this._nome=nome
            this._matricula=matricula
            this._salarioBase=salarioBase
        }

        public get nome():string{
            return this._nome
        }

        public set nome(value:string){
            this._nome=value
        }

        public get matricula():string{
            return this._matricula
        }

        public set matricula(value:string){
            this._matricula=value
        }

        public get salarioBase():number{
            return this._salarioBase
        }

        public set salarioBase(value:number){
            this._salarioBase=value
        }

        calcularSalario():number{
            return (this._salarioBase)
        }
    }

    class Professor extends Funcionario{

        private _regime:string

        constructor(nome:string,matricula:string,salarioBase:number,regime:string){
            super(nome,matricula,salarioBase)
            this._regime=regime
        }

        calcularSalario():number{

            if(this._regime=="DE"){
                return (this.salarioBase*1.20)
            }

            return this.salarioBase
        }
    }

    class TecnicoAdministrativo extends Funcionario{

        private _auxilio:number=1000

        constructor(nome:string,matricula:string,salarioBase:number){
            super(nome,matricula,salarioBase)
        }

        calcularSalario():number{
            return this.salarioBase+this._auxilio
        }
    }

    class Diretor extends Funcionario{

        private _departamento:string
        private _gratificacao:number

        constructor(nome:string,matricula:string,salarioBase:number,departamento:string,gratificacao:number){
            super(nome,matricula,salarioBase)
            this._departamento=departamento
            this._gratificacao=gratificacao
        }

        calcularSalario():number{
            return (this.salarioBase+this._gratificacao)
        }
    }

    let professores:number=0
    let tecnicos:number=0
    let diretores:number=0
    let total:number=0
    let op:number=0

    while(op!=4){

        op=Number(prompt("1-Professor, 2-Técnico Administrativo, 3-Diretor, 4-Encerrar"))

        if(op==1){

            let nome:string=String(prompt("Informe o Nome: "))
            let matricula:string=String(prompt("Informe a Matrícula: "))
            let salario:number=Number(prompt("Digite o Salário base: "))
            let regime:string=String(prompt("Regime de trabalho: "))

            let funcionario:Funcionario=new Professor(nome,matricula,salario,regime)

            let valor:number=funcionario.calcularSalario()

            professores+=valor
            total+=valor
        }

        if(op==2){

            let nome:string=String(prompt("Informe o Nome: "))
            let matricula:string=String(prompt("Informe a Matrícula: "))
            let salario:number=Number(prompt("Digite o Salário base: "))

            let funcionario:Funcionario=new TecnicoAdministrativo(nome,matricula,salario)

            let valor:number=funcionario.calcularSalario()

            tecnicos+=valor
            total+=valor
        }

        if(op==3){

            let nome:string=String(prompt("Informe o Nome: "))
            let matricula:string=String(prompt("Informe a Matrícula: "))
            let salario:number=Number(prompt("Digite o Salário base: "))
            let departamento:string=String(prompt("Departamento: "))
            let gratificacao:number=Number(prompt("Gratificação: "))

            let funcionario:Funcionario=new Diretor(nome,matricula,salario,departamento,gratificacao)

            let valor:number=funcionario.calcularSalario()

            diretores+=valor
            total+=valor
        }
    }

    console.log(`Total com professores: R$ ${professores}`)
    console.log(`Total com técnicos: R$ ${tecnicos}`)
    console.log(`Total com diretores: R$ ${diretores}`)
    console.log(`Total geral: R$ ${total}`)
}