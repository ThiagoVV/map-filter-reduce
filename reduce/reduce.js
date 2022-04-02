
// EXERCÍCIO 01
// function somaNumeros(arr) {
//     return arr.reduce(function(prev, current) {
//         console.log({ prev });
//         console.log({ current });
//         return prev + current;
//     }, 0);
// }

// const arr = [1, 2];

// console.log(somaNumeros(arr));

// EXERCÍCIO 02

const lista = [
    {
        name: 'sabao em po',
        preco: 16,
    },
    {
        name: 'cereal',
        preco: 13,
    },
    {
        name: 'toalha',
        preco: 32,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('\n','rodada' , index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));