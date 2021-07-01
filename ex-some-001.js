//Verificar se tem algum quadrado perfeito dentro de um array

const array = [1, 2, 3, 4, 5];

const temQuadradoPerfeito = array.some(x => {
    
    //verificar se é raiz quadrada
    const raiz = Math.sqrt(x);

    if (raiz >= 0 && raiz % 1 === 0) {
        return true;
    } else {
        return false;
    }

})

console.log(temQuadradoPerfeito);
//retorna true


//Código mais enxuto:

const resultado = array.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0);

console.log(resultado);
//retorna true