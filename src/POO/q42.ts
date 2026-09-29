// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.


export function q42POO():void{
    class Medicamento{

        private _nome:string
        private _lote:number
        private _preco:number
        private _quantidadeEstoque:number

        constructor(nome:string,lote:number,preco:number,quantidadeEstoque:number){
            this._nome=nome
            this._lote=lote
            this._preco=preco
            this._quantidadeEstoque=quantidadeEstoque
        }

        public get nome():string{
            return this._nome
        }

        public set nome(value:string){
            this._nome=value
        }

        public get lote():number{
            return this._lote
        }

        public set lote(value:number){
            this._lote=value
        }

        public get preco():number{
            return this._preco
        }

        public set preco(value:number){
            this._preco=value
        }

        public get quantidadeEstoque():number{
            return this._quantidadeEstoque
        }

        public set quantidadeEstoque(value:number){
            if(value>=0){
                this._quantidadeEstoque=value
            }else{
                console.log("Quantidade inválida!")
            }
        }
    }

    let medicamentos:Medicamento[]=[]
    let quantidade:number=0

    while(quantidade<10){
        let nome:string=String(prompt("Informe o Nome do medicamento: "))
        let lote:number=Number(prompt("DIgite o Lote: "))
        let preco:number=Number(prompt("Digite o Preço: "))
        let estoque:number=Number(prompt("Digite a Quantidade em estoque: "))

        if(estoque>=0){
            let medicamento:Medicamento=new Medicamento(nome,lote,preco,estoque)
            medicamentos.push(medicamento)
            quantidade++
        }else{
            console.log("Quantidade inválida!")
        }
    }

    for(let medicamento of medicamentos){
        if(medicamento.quantidadeEstoque<5){
            console.log(`Medicamento: ${medicamento.nome}, Estoque: ${medicamento.quantidadeEstoque}`)
        }
    }
}