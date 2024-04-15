const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]


const maiorNumero = numeros.reduce(function (acumulador, atual) {
    return Math.max(acumulador, atual);
});

console.log(maiorNumero);