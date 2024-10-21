//Default é executado quando nenhum case é satisfeito

let fruit = "morango";

switch(fruit) {
    case "laranja":
    console.log("Suco de laranja");
    break;

    case "banana":
    console.log("Vitamina de banana");
    break;

    case "mamao":
    console.log("Vitamina de mamão");
    break;
//Vocë pode ter mais de um case para a mesma ação, como abaixo
    case "limao":
    case "morango":
    console.log("Suco");
    break
//Tambem é possivel incluir if else dentro do case, for each, while, etc
    default:
    console.log("Sem frutas");
} 