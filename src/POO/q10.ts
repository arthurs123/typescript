// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico) com as
// seguintes regras:
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então
// não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a
// qualquer momento.
// Cálculo do Humor (Campo Calculado): O humor não deve ser um atributo salvo no construtor. Ele
// deve ser um método getter público (get humor()) que calcula a média ponderada ou simples da
// felicidade do bichinho.
//  Fórmula do Humor: (Saúde + (10 - Fome)) / 2
//  Regra de Negócio do Humor:
// o Média entre 8.0 e 10.0  &quot;Muito Feliz &quot;
// o Média entre 5.0 e 7.9  &quot;Neutro / Ok &quot;
// o Média abaixo de 5.0  &quot;Triste / Transtornado&quot;



class Bichinho{
    nome:string
    fome:number
    saude:number
    idade:number

    constructor(name:string, hunger:number, life:number, age:number){
        this.nome=name
        this.fome=hunger
        this.saude=life
        this.idade=age

    }

    alterarNome(novoNome:string){
        this.nome=novoNome
    }
    alterarFome(novaFome:number){
        this.fome=novaFome
    }
    alterarSaude(novaSaude:number){
        this.saude=novaSaude
    }
    alterarIdade(novaIdade:number){
        this.idade=novaIdade
    }

    get retornarNome(): string {
    return this.nome
    }

    get retornarFome(): number {
        return this.fome
    }

    get retornarSaude(): number {
        return this.saude
    }

    get retornarIdade(): number {
        return this.idade
    }


    get humor():string{
        let humorBrin=(this.saude+(10 - this.fome))/2

        if (humorBrin>=8 && humorBrin<=10){
            return("Humor: muito feliz")
        }
        else if (humorBrin>=5 && humorBrin<8){
            return("Humor: neutro/OK")
        }
        else{
            return("Humor: triste/transtornado")
        }
    }
}