const pessoa = 'Guilherme Carvalho';

const grupo = ['José','Maria','Celso','Mario'];

const notas = {
    Matematica: 7.0,
    Fisica: 7.5,
    Qumica: 6.5,
    Geografia: 8.0
}

for (let disciplina in notas) {
    console.log(disciplina, notas[disciplina])
}
