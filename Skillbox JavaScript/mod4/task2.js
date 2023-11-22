let count = 7;
let array = [];
for (let i = 1 ; i < count + 1 ; ++i){
    array.push(i)
}
console.log(array)

for (let i = array.length - 1; i >= 0; i--){
    let j = (Math.floor(Math.random() * i+1));
    [array[i], array[j]] = [array[j], array[i]];
}
console.log(array)