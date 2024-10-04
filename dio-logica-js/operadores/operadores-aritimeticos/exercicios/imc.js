const readline = require('readline');  // Importando corretamente o módulo readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o seu peso atual (kg): ', (peso) => {
    rl.question('Digite a sua altura atual (m): ', (altura) => {
        // Cálculo do IMC (Índice de Massa Corporal)
        const imcTotal = parseFloat(peso) / (parseFloat(altura) ** 2);
        
        // Exibir o resultado com 2 casas decimais
        console.log(`O seu IMC é: ${imcTotal.toFixed(2)}`);
        
        rl.close();
    });
});
