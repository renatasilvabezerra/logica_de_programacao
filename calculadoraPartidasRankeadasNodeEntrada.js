const readline = require('readline');
// readline é um módulo nativo do Node.js que fornece uma interface para ler dados de forma assíncrona.
const rl = readline.createInterface({  // interface de leitura e escrita
    input: process.stdin,
    output: process.stdout
});

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`);
}

// Capturar entrada do usuário
rl.question("Digite o número de vitórias: ", (vitorias) => { //rl.question() serve para perguntar. 
    rl.question("Digite o número de derrotas: ", (derrotas) => {
        // Converter as entradas para números inteiros
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // isNaN valida se as entradas são números válidos
        if (isNaN(vitorias) || isNaN(derrotas)) {
            console.log("Por favor, insira valores numéricos válidos.");
        } else {
            calcularNivel(vitorias, derrotas);
        }

        rl.close();
    });
});

/* Importação do módulo readline
Ele permite interagir com o terminal e receber entradas do usuário. */




