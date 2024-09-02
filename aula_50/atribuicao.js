
// Se quisesse trocá-las entre si ( b = a , c = b , a = a),
// teriamos que ter uma quarta variável.
// ex. 
// let a = 'A';
// let b = 'B';
// let c = 'c';

// Da maneira abaixo não seria necessário:
//  Desestruturação => Atribuição

let [a, b, c] = ['b', 'c', 'a'];

// console.log([a, b, c]);

// outro exemplo
let numeros = [13, 7, 32];
[a, b, c] = numeros;
//Para cada índice estou atribuindo valor para

console.log([a,b,c])