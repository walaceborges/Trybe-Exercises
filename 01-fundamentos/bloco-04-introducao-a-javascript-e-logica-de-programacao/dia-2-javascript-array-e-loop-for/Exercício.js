//Exercício 1 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let list = 0; list < numbers.length; list ++){
    console.log(numbers[list]);
}

//Exercício 2
let total = 0;

for (let valor = 0; valor < numbers.length; valor++){
    total = total + numbers[valor];
}
console.log("resultado :", total);

//Exercício 3
let resultado = 0;

for (let valor = 0; valor < numbers.length; valor++){
    resultado = resultado + numbers[valor];
    console.log("soma:", resultado);
}
let contagem = 0;

for (let elemento = 0; elemento <= numbers.length;  elemento++){
    contagem  = elemento 
}
console.log("contagem: ", contagem) 

let divisao = (resultado / contagem );
console.log("não aguento mais:" , (divisao));

//Exercício 4
if (divisao >= 20){
    console.log("Valor maior que 20");
}
else if(divisao <= 20){
    console.log("Valor menor ou igual a 20");
}

//Exercício 5
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let armazenamentoMaior = 0;
let armazenamentoAtual = 0;
for (let index = 0; index < numbers.length; index++){
    armazenamentoAtual = numbers[index];
    if (armazenamentoAtual > armazenamentoMaior){
        armazenamentoMaior = numbers[index]
    }
    
}
console.log("Esse numero é o :" , armazenamentoMaior)




