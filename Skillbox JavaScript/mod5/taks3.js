let array = [2,5,1,3,4];
function arrSort(array){
    for(let i =0; i <array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            if (array[j] > array[j + 1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
}
arrSort(array);
console.log(array)