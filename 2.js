const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const MaiorString = cidades.reduce(function (acumulador, atual) {
    return atual.length > acumulador.length ? atual : acumulador;
});

console.log(MaiorString);

