// ------------- SEM ARGUMENTO THIS ABAIXO

function mapSemThis(arr) {
    return arr.map(function(item){
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));
console.log(nums)

// ------------- USANDO THIS ABAIXO
// const maca = {
//     value: 2,
// }

// const laranja = {
//     value: 3,
// }

// function mapComThis(arr, thiArg) {
//     return arr.map(function(item){
//         return item * this.value;
//     }, thiArg);    
// }

// const nums = [1, 2];

// console.log('this -> maçã', mapComThis(nums, maca));
// console.log('this -> laranja', mapComThis(nums, laranja));