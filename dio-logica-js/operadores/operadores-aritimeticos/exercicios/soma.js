const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro numero: ', (firstValue) => {
    rl.question('Digite o segundo numero: ', (secondValue)  => {
        const totalValue = parseInt(firstValue) + parseInt(secondValue);
        console.log(`O total da soma é: ${totalValue}`);
        rl.close();
    });
});
