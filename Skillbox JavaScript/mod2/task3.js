let m = 100;
let n = 0;

let range = Math.abs(m-n);
let number1InRange = Math.round(Math.random() * range);
let number2InRange = Math.round(Math.random() * range);
let min = Math.min(m,n);

let a = min + number1InRange
let b = min + number2InRange
console.log(a,b)

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a === b)
console.log(a !== b)
