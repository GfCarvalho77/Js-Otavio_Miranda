const paragrafos = document.querySelector('.paragrafos');

const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);

const backGroundBody = estilosBody.backgroundColor;

console.log(backGroundBody)

 for (let p of ps) {
     p.style.backgroundColor= backGroundBody;
     p.style.color='white'
 }   