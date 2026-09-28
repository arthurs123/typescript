// 25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o
// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.


export function q25POO():void{
abstract class Assinatura{

    protected _email:number|string
    protected _valorPlano:number

    constructor(email:number|string, valorPlano:number){
        this._email=email
        this._valorPlano=valorPlano
    }
    public get email():number|string{
    return this._email
}

    abstract assinatura():void
}

class AssianturaPadrao extends Assinatura{

    constructor(email:number|string, valorPlano:number){
        super(email,valorPlano)
    }

    assinatura(){
        console.log(`A assinatura do ${this._email} tem direito a 2 telas simultaneas, com um valor de ${this._valorPlano}!!`)
    }
}
class AssianturaPremium extends Assinatura{

    constructor(email:number|string, valorPlano:number){
        super(email,valorPlano)
    }

    assinatura(){
        console.log(`A assinatura do ${this._email} tem direito a 4 telas simultaneas e resolução 4k, com um valor de ${this._valorPlano}!!`)
    }
}

let listaAssinatueras:Assinatura[]=[]

let op:number=Number(prompt("Voce deseja entrar? 1-sim, 2-nao: "))

while(op!=2){

    let tipo:number=Number(prompt("Qual o tipo de assinatura deseja cadastrar? 1-padrão, 2-premium: "))
    let email:string|number=prompt("Informe o email: ")||"".toLowerCase()
    if (tipo===1){
        
        let valorPlano:number=Number(prompt("Informe o valor do plano"))
        let usuario= new AssianturaPadrao(email,valorPlano)
        
        listaAssinatueras.push(usuario)
        console.log("Assinatura padrão cadastrada!!")
    }
    else if (tipo===2){
        let valorPlano:number=Number(prompt("Informe o valor do plano"))
        let usuario= new AssianturaPremium(email,valorPlano)
        
        listaAssinatueras.push(usuario)
        console.log("Assinatura premium cadastrada!!")
    }
    else{
        console.log("Valor invalido, tente 1 ou 2!!!")
    }

    let quest:number=Number(prompt("Voce deseja buscar um email? 1-sim, 2-não: "))

    if (quest!=2){
        let buscarEmail:string=prompt("Informe o email que deseja achar: ")|| ""

        for(let assinatura of listaAssinatueras){

            if(assinatura.email==buscarEmail){

                assinatura.assinatura()
            }
        }
    }

    op=Number(prompt("Voce deseja continuar? 1-sim, 2-nao: "))
}

}