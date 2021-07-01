//Ordenar o array em ordem crescente de idade das pessoas. Para pessoas da mesma idade, ordene-as em ordem alfabética.

const pessoas = [
    {
        nome: 'Diego',
        idade: 30
    },
    {
        nome: 'José',
        idade: 22
    },
    {
        nome: 'Maria',
        idade: 33
    },
    {
        nome: 'Ana',
        idade: 20
    },
    {
        nome: 'João',
        idade: 30
    },
    {
        nome: 'Roberta',
        idade: 32
    }
]

pessoas.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    } else if (b.idade > a.idade) {
        return 1;
    } else {
        return a.nome.localeCompare(b.nome);
    }
});

console.log(pessoas);