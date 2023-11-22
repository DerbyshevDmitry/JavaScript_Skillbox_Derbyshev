function getOlderUserArray(allUsers) {
    let olderUser = allUsers[0];
    for (let i = 1; i < allUsers.length; i++) {
      if (allUsers[i].age > olderUser.age) {
        olderUser = allUsers[i];
      }
    }
    return olderUser.name;
  }

  let allUsers=[
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]

   let result = getOlderUserArray(allUsers);
   console.log(result)