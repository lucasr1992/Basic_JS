// const fibonacci = []; // {1}
// fibonacci[1] = 1; // {2}
// fibonacci[2] = 1; // {3}
// for (let i = 3; i < 20; i++) { 
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; 
// }
// for (let i = 1; i < fibonacci.length; i++) { 
//     console.log(fibonacci[i]); 
// }

let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numero);
numero[numero.length] = 22;
console.log(numero);

[numero[2], numero[10]] = [numero [10], numero[2]];

console.log(numero);

