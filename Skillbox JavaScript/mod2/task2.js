let a =13.890123
let b =2.891564
let n = 2

let aFractional = Math.floor(a % 1 * 10**n)
let bFractional = Math.floor(b % 1 * 10**n) 

console.log(aFractional)
console.log(bFractional)
console.log(aFractional > bFractional)
console.log(aFractional < bFractional)
console.log(aFractional >= bFractional)
console.log(aFractional <= bFractional)
console.log(aFractional === bFractional)
console.log(aFractional !== bFractional)