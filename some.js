//Método some()

const array = [1, 2, 3, 4, 5, 6];

//Verificar se tem algum item maior que cinco

const temMaiorQue5 = array.some(x => x > 5);

console.log(temMaiorQue5);

/* É um método de arrays qye verifica se existe algum elemento que atende a condição passada no callback. 
*/

//Fazer um programa que verifica se existe algum elemento par num array

const temPar = array.some(x => x % 2 === 0);

console.log(temPar);