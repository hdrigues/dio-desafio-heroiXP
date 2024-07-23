// objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeHeroi = "Juao das Neves"
let nivel = ""
let xp = 1
let i = 0

//Para facilitar o teste criei um Loop que após a comparação e exibição do frase haja um incremento de 1000 de xp, assim usando todos 4 tipos de operadores solicitados
for (i = 0; i < 12; i++) {
    if (xp <1001){
        nivel = "Ferro"
    }else if ((xp >=1001) && (xp <2001)){
        nivel ="Bronze"
    }else if ((xp >=2001) && (xp <5001)){
        nivel ="Prata"
    }else if ((xp >=5001) && (xp <7001)){
        nivel ="Ouro"
    }else if ((xp >=7001) && (xp <8001)){
        nivel ="Platina"
    }else if ((xp >=8001) && (xp <9001)){
        nivel ="Ascendente"
    }else if ((xp >=9001) && (xp <10001)){
        nivel ="Imortal"
    }else {
        nivel ="Radiante"
    }

    console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel + " com "+ xp + "XP")
    xp +=1000
}