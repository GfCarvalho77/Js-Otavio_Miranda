
const nome='Guilherme';
const sobrenome='Carvalho'
const idade = 47;
const peso = 94;
const alturaEmMetros = 1.80;
let indiceMassaCorporal = peso/(alturaEmMetros * alturaEmMetros);
let anoNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome}, tem ${idade} anos e pesa ${peso} kg. Tem ${alturaEmMetros} e seu IMC é ${indiceMassaCorporal}. ${nome} nasceu em ${anoNascimento}.`)