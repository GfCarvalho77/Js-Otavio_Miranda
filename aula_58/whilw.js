function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r)
}

const min= 10;
const max = 50;

let randing = random(min, max)

while (randing !== 10) {
    randing = random(min,max);
    console.log(randing)
}
