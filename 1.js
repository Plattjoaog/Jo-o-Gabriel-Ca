const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const numerosEmordemCrescente = numeros.sort(function (a, b) {
    return a - b;
});

console.log(numerosEmordemCrescente);

const numerosEmordemdeCrescente = numeros.sort(function (a, b) {
    return b - a;
});

console.log(numerosEmordemdeCrescente);


const numerosEmordemCrescenteunicode = numeros.sort();
console.log(numerosEmordemCrescenteunicode);

const frutas = ['Banana', 'Amora', 'Abacaxi', 'Uva', 'Pera']

const frutasemordemAlfabetica = frutas.sort(function (a, b) {
    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
        return 1;
    }

    if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
        return -1;
    }
    return 0;
});
