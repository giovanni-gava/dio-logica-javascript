//Crie uma constante chamada PI com o valor de 3.14. Em seguida, crie um vetor que armazene os raios de três círculos diferentes. Para cada valor de raio, calcule a área do círculo (Área = PI * raio * raio) e exiba o resultado no console.

const valuePi = 3.14;

let circleRadius = [5, 10, 15];

let circleArea1 = valuePi * circleRadius[0] * circleRadius[0];
let circleArea2 = valuePi * circleRadius[1] * circleRadius[1];
let circleArea3 = valuePi * circleRadius[2] * circleRadius[2];

console.log("A área do círculo 1 é " + circleArea1 +
            "\nA area do circulo 2 é "+ circleArea2 +
            "\nA area do circulo 3 é " + circleArea3

);

// const valuePi = 3.14;  // Definindo a constante PI

// let circleRadius = [5, 10, 15];  // Vetor com os raios dos círculos

// // Calcula a área de cada círculo e armazena em um vetor de áreas
// let circleAreas = [
//   valuePi * circleRadius[0] * circleRadius[0],
//   valuePi * circleRadius[1] * circleRadius[1],
//   valuePi * circleRadius[2] * circleRadius[2]
// ];

// // Exibe cada área no console usando os índices do vetor de áreas
// console.log(
//   "A área do círculo 1 é: " + circleAreas[0] +
//   "\nA área do círculo 2 é: " + circleAreas[1] +
//   "\nA área do círculo 3 é: " + circleAreas[2]
// );


//Sugestao de uso, armazenar o valor da variavel de controle como um array e no output chamar somente a variavel de controle com seu respectivo indice




