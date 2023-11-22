let count = 7;
let n = 6;
let array = [];
for (let i = 1 ; i < count + 1 ; ++i){
    array.push(i)
}

for (let i = array.length - 1; i >= 0; i--){
    let j = (Math.floor(Math.random() * i+1));
    [array[i], array[j]] = [array[j], array[i]];
}
console.log(`array = [${array}]`)
if (n >= array.length){
    console.log('Элемент не найден')
}else{
    console.log(`n = ${n}; индекс элемента = ${array[n]}`)
}