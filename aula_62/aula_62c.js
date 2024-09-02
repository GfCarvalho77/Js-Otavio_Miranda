function fizzBuzz(i) {
    if(typeof i !=='number') return i;
    if (i %15===0) return 'FizzBuzz';
    if(i %3===0) return 'Fizz';
    if (i %5===0) return 'Buzz';
    return i
}

console.log(fizzBuzz('a'))

// for (let i = 0; i <= 100; i++) {
//         console.log(i,fizzBuzz(i))
//     }

