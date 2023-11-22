let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
let blackList = ['jsfunc@mail.ru','goodday@day.ru'];

let cleanedList = [];

function filter(whiteList,blackList){
    for (i in whiteList){
        if (!(blackList.includes(whiteList[i]))){
            cleanedList.push(whiteList[i])
        }
    }
    console.log(cleanedList)
    return cleanedList
}

filter(whiteList,blackList)