
const pessoa1 = {
    nome: 'Guiga',
    sobrenome: 'Carvalho',
    idade: 47,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} com idade ${this.idade} tem diz Oi...`)
    },

    incrementaIdade(){
        this.idade++
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();