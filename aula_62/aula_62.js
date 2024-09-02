function FizzBuzz (num1) {
    if(typeof num1 !== 'number') return num1;
    
    if (num1 %15 ===  0) return 'FizzBuzz';
    
    if(num1 %3 ===0 ) return 'Fizz';
    if (num1 %5 === 0) return 'Buz';
    return num1
}
        for (let i=0; i<=100;i++){
         console.log(i, FizzBuzz(i))
}

