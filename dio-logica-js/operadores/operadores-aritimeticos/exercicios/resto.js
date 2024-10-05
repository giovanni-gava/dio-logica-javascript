const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o primeiro valor: ', (primeiroValor) => {
    rl.question('Digite o segundo valor: ', (segundoValor) => {

        const primeiroValorNum = parseFloat(primeiroValor);
        const segundoValorNum = parseFloat(segundoValor);

        const resto = primeiroValorNum % segundoValorNum
        console.log(`O resto da divisão entre ${primeiroValorNum} e ${segundoValorNum} é: ${resto}`)
        rl.close()
    });
});


