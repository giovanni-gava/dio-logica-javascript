const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite a base do retangulo: ', (base) => {
    rl.question('Digite a altura do retangulo: ', (altura) => {
        
        const baseNum = parseFloat(base);
        const alturaNum = parseFloat(altura);
        
        const area = base * altura
        console.log(`A area do retangulo é: ${area}`)
        rl.close()
    });
});

