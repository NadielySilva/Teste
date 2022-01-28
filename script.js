//if-else
/*if (condição){
    tarefa
} */

// >   Maior que
// <   Menor que
// >=  Maior ou igual que
// <=  Menor ou igual que
// ==  mesmo tipo de valor
// ===  mesmo tipo de dado e valor
// != verifica se os valores comparados são diferentes
// !== verifica se os valores o valor e o tipo são diferentes
// &&  (E)	o resultado será verdadeiro caso todas as comparações sejam  verdadeiras.
// ||  (OU)	o resultado será verdadeiro bastando apenas uma das comparações ser verdadeira.
// !  (NÂO)	é utilizado para inverter o resultado de uma determinada condição. Ou seja, se a condição for verdadeira esta torna-se falsa, e se a condição for falsa ela torna-se verdadeira.


//ATIVIDADE

//1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão retorne no console que ainda não anoiteceu

//2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o sabor for bolonhesa

//3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol

let ferias = true;
let clima = "ensolarado";

if (ferias==true || clima == "ensolarado"){
    console.log("Voce está de férias OU está Sol")
}

// LOOP

// for (variavel = valor; condicao; acao) {
//     console.log()
// }

// variavel = valor
// while(condicao) {
//     acao
// }

// for (variavel = valor; condicao; acao) {
//     console.log()
// }

// variavel = valor
// while(condicao) {
//     acao
//     iteracao
// }

//1 - Criar um loop que conte de 1 até 20 usando o FOR que conte os números ímpares

//2 - Criar um loop que conte de 20 até 1 usando o WHILE que conte os números pares
// for (variavel = valor; condicao; acao) {
//     console.log()
// }

// variavel = valor
// while(condicao) {
//     acao
//     iteracao
// }

//FUNCTION

// function nomeDafunção(parametro){
//  tarefa
// }

// nomeDafunção(argumento)

//ATIVIDADE

// 1 - Crie uma função que receba comida como (parâmetro) e exiba no console

// 2 - crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba no console

//let nomeDaLista = ["item", "item"]
// let jogos = ['zelda', 'gta', 'mario', 'sonic mania', 'god of war', 'the witcher']

// jogos.splice(6,6,"Tetris")

// 1- Utilize um método para adicionar dois jogos ao fim do array

// 2 - Utilize um método para remover o o último jogo dentro do array.

// 3 - Utilize um método para organizar os jogos em ordem alfabética

// * Push adiciona um ou mais elementos no final do array
// * Unshift adiciona um ou mais elementos no início do array
// * Pop remove o último elemento do array:
// * Shift remove o primeiro elemento do array:
// * Slice pode cortar um array 
// let myItems = items.slice(1, 4)

/*
const nomeDoObjeto = {
    propriedade1: valor1,
    propriedade2: valor2
}*/

// 1 - Crie um array chamado "pessoas" contendo ao menos 3 objetos.
// 2 - Cada objeto deve receber as seguintes propriedades: nome, idade, altura, musicas.
// 3 - Na propriedade musicas, adicione ao menos 3 itens.
// 4 - Mostre no console uma musica de cada lista.

let pessoas = [
    {
        nome: "Karynne",
        idade: 25,
        altura: 1.65,
        musica: ["rock","folk","punk"]
    },
    {
        nome: "Pâmela",
        idade: 24,
        altura: 1.60,
        musica: ["pagode", "forro", "samba"]
    },
    {
        nome: "Nadiely",
        idade: 29,
        altura: 1.60,
        musica: ["rock", "samba", "metal"]
    }
]

console.log(pessoas[2].musica[0]);
console.log(pessoas[1].musica[1]);
console.log(pessoas[0].musica[2]);

//SLICE
/*https://academia.vainaweb.com.br/module-2/complex-types*/

/*Manipulando arrays:
* Push adiciona um ou mais elementos no final do array
* Unshift adiciona um ou mais elementos no início do array
* Pop remove o último elemento do array:
* Shift remove o primeiro elemento do array:
* Slice pode cortar um array 
let myItems = items.slice(1, 4)*/