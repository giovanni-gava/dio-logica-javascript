const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite a base: ', (valor) => {
    const base = parseFloat(valor) ** 3;
    console.log(`O resultado da potência é: ${base}`);
    rl.close();

})
