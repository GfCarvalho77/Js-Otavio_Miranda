const ListaParagrafos = document.querySelector('.paragrafos');
const paragrafoIndividual = ListaParagrafos.querySelectorAll('p');

const configStyleBody = getComputedStyle(document.body);

const colorBody = configStyleBody.backgroundColor;

for (let p of paragrafoIndividual) {
    p.style.backgroundColor = colorBody;
    p.style.color = 'yellow'
}


