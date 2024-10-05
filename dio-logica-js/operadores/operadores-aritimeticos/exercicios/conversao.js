const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entre com a temperatura em Celsius: ', (temperatura) => {
    // Convertendo a temperatura para Fahrenheit
    const fahrenheit = (parseFloat(temperatura) * 9/5) + 32;
    
    // Exibindo a temperatura convertida com 2 casas decimais
    console.log(`A temperatura convertida é de: ${fahrenheit.toFixed(2)} °F`);
    
    rl.close();
});


