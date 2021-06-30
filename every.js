//Utilizando o every()

const numero = [1, 2, 3, 4, 5];

console.log(numero.every(x => x < 10));
//retora true

//every() é um método de arrays que verifica se todos os elementos atendem a condição passada no callback.

//Fazer um programa que verifica se todos os elementos da lista são números inteiros e positivos.

const precos = [100, 131, 2432, 324, 4234];

const ehValido = precos.every(x => {
    const ehPositivo = x >= 0;
    const ehInteiro = x % 1 === 0;

    if (ehPositivo && ehInteiro) {
        return true;
    } else {
        return false;
    }
});

/* Outra forma:

const ehValido = precos.every(x => x >= 0 && x === Math.floor(x));

*/