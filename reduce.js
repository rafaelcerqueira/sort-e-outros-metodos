//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const array = [0, 1, 2, 3, 4, 5];

const somaTotal = array.reduce((acc, item) => acc + item);

console.log(somaTotal);

//Fazendo a soma te todos os itens do array sem o reduce:

/*

let somaTotal = array[0];

for (let i = 1; i < array.length; i++) {
    let item = array[i];
    somaTotal = somaTotal + item;
}

*/