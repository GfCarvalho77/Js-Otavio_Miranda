function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

        const pessoas = [];

        function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //const pessoas=[nome.value,sobrenome.value,peso.value,altura.value];
        pessoas.push({
            nome: nome.value, //sempre (chave):(valor) 
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value,});
            
        console.log(pessoas);
        resultado.innerHTML+= ` </br> ${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}`;
                //console.log(nome.value, sobrenome.value, peso.value, altura.value);        
    }

    form.addEventListener('submit', recebeEventoForm);
    };
meuEscopo();