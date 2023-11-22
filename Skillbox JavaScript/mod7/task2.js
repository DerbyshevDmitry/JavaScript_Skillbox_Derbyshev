function createStudentCard(student) {

    let {name, age} = student;

    let studentCard = document.createElement('div');
    let heading = document.createElement('h2');
    let ageSpan = document.createElement('span');

    heading.textContent = name;
    ageSpan.textContent = `Возраст: ${age} лет`;

    
    studentCard.appendChild(heading);
    studentCard.appendChild(ageSpan);

    document.body.appendChild(studentCard);
}

let studentObj = {
    name: 'Игорь',
    age: 17
  };

createStudentCard(studentObj);