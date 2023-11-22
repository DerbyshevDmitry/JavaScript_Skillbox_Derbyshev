

function  createStudentsList(allStudents){
    let studentsList = document.createElement('ul')

    for (let i = 0; i < allStudents.length; i++ ){
        let list = document.createElement('li')
        let heading = document.createElement('h2');
        let ageSpan = document.createElement('span');
        
        let {name, age} = allStudents[i];
        heading.textContent = name;
        ageSpan.textContent = `Возраст: ${age} лет`;
        
        list.appendChild(heading);
        list.appendChild(ageSpan);
        studentsList.appendChild(list)
    }
    document.body.appendChild(studentsList);
}



let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]


let showListButton = document.querySelector('button');
function onClick(){
    createStudentsList(allStudents)
}

showListButton.addEventListener('click', onClick);