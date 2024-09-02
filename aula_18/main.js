const a = {
    nome: 'Guiga',
    sobrenome:'Carvalho',
    idade: 45,
} 

let b={...a};

b.nome='Xandegas';
console.log(a);
console.log(b);