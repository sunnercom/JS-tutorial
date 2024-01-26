"use strict"

let user = prompt("Ma'lumotni qidiring???", "")

const users = [
   {
    _id: 'userId',
    username: 'Username',
    email: 'userEmail',
    password: 'userPassword',
    createAt: '',
    isLoggedin: 'true',
    }
]

function findUserById(userList, userId) {
    return userList.filter(user.id === userId);
}

  function findUserByEmail(userList, userEmail) {
    return userList.filter(user.email === userEmail);
}

  function findLoggedInUsers(userList) {
    return userList.filter(user.isLoggedin === true);
}

console.log(users)