// function isEven(x) { 
   
//    return x % 2 === 0 ? true : false;
// }

const isEven = x => x % 2 !== 0

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18];

//console.log(isEven(numbers))

//console.log("teste 1: " + numbers.every(isEven)); //para de rodar o isEvent quando devolver false

//console.log("teste 2: " + numbers.some(isEven)); //para de rodar o isEvent quando devolver true

//numbers.forEach(x => console.log(x % 2 === 0)); //mostra todos os estados de cada item no array

//const myMap = numbers.map(isEven) // map devolve um array de todos os resultados
//console.log(myMap)

// const positiveNum = numbers.filter(isEven); // mostra só os numeros true no caso par
// console.log(positiveNum);

// const stringArray = numbers.join() // junta tudo em uma string
// console.log(stringArray)

console.log(numbers.reduce((anteriorm, atual) => anteriorm + atual))

