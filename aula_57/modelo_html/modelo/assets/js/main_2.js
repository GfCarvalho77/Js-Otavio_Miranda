const listaPar = document.querySelector('.paragrafos');
const parIndividual= listaPar.querySelectorAll('p');

const configStyleBody = getComputedStyle(document.body)

const colorBodyStyle = configStyleBody.backgroundColor;

console.log(colorBodyStyle)

for (let p of parIndividual) {
    p.style.backgroundColor = colorBodyStyle;
    p.style.color='yellow'
}