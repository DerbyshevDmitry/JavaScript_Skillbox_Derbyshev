let userName = 'DiMa'
let userSurname = 'DerByshev'

let firstLetterName = userName.substring(0,1)
let firstLetterSurname = userSurname.substring(0,1)

let restLettersName = userName.substring(1)
let restLettersSurname = userSurname.substring(1)

let newName = firstLetterName.toUpperCase() + restLettersName.toLowerCase()
let newSurname = firstLetterSurname.toUpperCase() + restLettersSurname.toLowerCase()
    
console.log(newName, newSurname)

if (userName !== newName) {
    console.log('Имя было преобразовано')
}else{
    console.log('Имя осталось без изменений')
}
if (userSurname !== newSurname) {
    console.log('Фамилия была преобразована')
}else{
    console.log('Фамилия осталась без изменений')
}