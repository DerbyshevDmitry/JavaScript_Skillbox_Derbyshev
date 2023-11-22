function createStudentCard(name, age) {
    let studentCard = document.createElement('div');
    let heading = document.createElement('h2');
    let ageSpan = document.createElement('span');

    heading.textContent = name;
    ageSpan.textContent = `Возраст: ${age} лет`;

    
    studentCard.appendChild(heading);
    studentCard.appendChild(ageSpan);

    document.body.appendChild(studentCard);
}

createStudentCard('Игорь', 17);