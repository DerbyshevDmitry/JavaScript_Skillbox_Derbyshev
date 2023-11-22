let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]

function filter(objects, key, value) {
    let filteredObjects = [];
    for (let i = 0; i < objects.length; i++) {
      if (objects[i][key] === value) {
        filteredObjects.push(objects[i]);
      }
    }
    return filteredObjects;
  }
  

let result = filter(objects, 'name', 'Иван');

console.log(result);