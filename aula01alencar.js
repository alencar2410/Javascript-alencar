// window.alert("alencar te avisou!")

// window.confirm("hoje e sexta?")

//comentario em linha

/**
 comentado em varias linhas
 */










// let nome = window.prompt("Qual é o seu nome?")

// window.alert("Bem vindo(a)! " + nome)

// console.log("BAKAAAAAAA")

// let numero01= parseInt (prompt("Digite o primeiro numero:"))

// let numero02= parseInt (prompt("Digite o segundo numero:"))


// let soma = numero01 + numero02

// console.log(soma)




// let num01 = parseFloat(prompt("Digite algum numero: "))

// let num02 = parseFloat(prompt("Digite algum numero: "))

// let resultado = num01 + num02

// console.log(resultado)

// let idade = parseInt (prompt("Qual a sua idade?"))
// if (idade >= 18) {
//     console.log("voce é maior de idade, da-lheeee😁" )
// }
// else{
//     console.log("Voce é menor de idade baixinho😔")
// }

let estacoes = prompt("Digite uma estcao do ano: ")

switch (estacoes) {
    case "Verao":
        console.log("muito calor e praia")
        break;

    case "Outono":
        console.log("as folhas caem no final")
        break;


    case "Inverno":
        console.log("Esta muito frio")
        break;

    case "Primavera":
        console.log("eu vejo flores em voce")
        break;



    default:
        console.log("nao existe esta estacao!!!")
        break;
}