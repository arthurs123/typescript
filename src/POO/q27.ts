// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.


export function q27POO():void{
    abstract class Equipamento{
        
        private _tombamento:number
        private _descricao:string

        constructor(tombamento:number,descricao:string){
            this._tombamento=tombamento
            this._descricao=descricao
        }

        public get tombamento():number{
            return this._tombamento
        }

        public get descricao():string{
            return this._descricao
        }

        abstract autoInspecao():string
    }

    class Computador extends Equipamento{

        private _memoriaRam:number

        constructor(tombamento:number,descricao:string,memoriaRam:number){
            super(tombamento,descricao)
            this._memoriaRam=memoriaRam
        }

        autoInspecao():string{
            return (`Tombamento: ${this.tombamento}, Descrição: ${this.descricao}, RAM: ${this._memoriaRam} GB`)
        }
    }

    class Roteador extends Equipamento{

        private _portas:number

        constructor(tombamento:number,descricao:string,portas:number){
            super(tombamento,descricao)
            this._portas=portas
        }

        autoInspecao():string{
            return (`Tombamento: ${this.tombamento}, Descrição: ${this.descricao}, Portas: ${this._portas}`)
        }
    }

    let equipamentos:Equipamento[]=[]
    let op=0

    while(op!=3){
        op=Number(prompt("1-Computador\n2-Roteador\n3-Encerrar"))

        if(op==1){
            let tombamento=Number(prompt("Número de tombamento: "))
            let descricao=String(prompt("Descrição: "))
            let ram=Number(prompt("Quantidade de RAM: "))

            if(tombamento>0 && descricao!="" && ram>0){
                equipamentos.push(new Computador(tombamento,descricao,ram))
            }
        }

        if(op==2){
            let tombamento=Number(prompt("Número de tombamento: "))
            let descricao=String(prompt("Descrição: "))
            let portas=Number(prompt("Quantidade de portas: "))

            if(tombamento>0 && descricao!="" && portas>0){
                equipamentos.push(new Roteador(tombamento,descricao,portas))
            }
        }
    }

    for(let equipamento of equipamentos){
        console.log(equipamento.autoInspecao())
    }
}