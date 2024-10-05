const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a primeira medida: ', (medidaA) => {
    rl.question('Digite a segunda medida: ', (medidaB) => {
        rl.question('Digite a terceira medida: ', (medidaC) => {
            // Converta as medidas para números decimais
            const mediaTotal = (parseFloat(medidaA) + parseFloat(medidaB) + parseFloat(medidaC)) / 3;
            
            // Limitar o resultado a 2 casas decimais
            console.log(`A média das medidas é: ${mediaTotal.toFixed(2)}`);
            
            rl.close();
        });
    });
});


