//Ordem alfabética

const nomes = ["ana", "pedro", "maria", "José", "Carlos", "Álvaro", "roberta"];

// nomes.sort()


//vai imprimir o nome que tiver a letra maiúscula antes do nome que tiver a letra minúscula, independente se estiver em ordem alfabética.

//Resolvendo utilizando o localeCompare():
// É um método de comparação que ordena alfabeticamente levando em consideração o idioma e seus caracteres especiais.

nomes.sort((a, b) => a.localeCompare(b));

console.log(nomes);