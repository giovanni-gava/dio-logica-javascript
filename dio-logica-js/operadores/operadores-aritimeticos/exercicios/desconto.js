const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira o valor do produto: ', (valorProduto) => {
    // Calculando o valor do produto com 15% de desconto
    const valorDesconto = parseFloat(valorProduto) - ((parseFloat(valorProduto) * 15) / 100);
    
    // Usando template string para formatar a saída
    console.log(`O valor do produto com 15% de desconto é: R$ ${valorDesconto.toFixed(2)}`);
    
    rl.close();
});


