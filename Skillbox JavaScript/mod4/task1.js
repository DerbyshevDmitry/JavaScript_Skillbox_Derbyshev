let n = 0;
let m = 100;
let count = 7;
let array = [];
let range = Math.abs(m-n);
for (let i = 0 ; i < count ; ++i){
    array.push(Math.round(Math.random() * range))
}
console.log(array)