// É um método de arrays que coloca seus elementos em ordem.
//Para isso, é possível passar uma função callback de comparação.

const numeros = [1, 2, 10, 23, 4, 3];

// Ordenar em ordem crescente


numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
});

console.log(numeros);

// refatorando:

numeros.sort((a, b) => a - b);

