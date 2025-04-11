// 1)объект с вашим описанием 
// const userOptions = {
//     name: 'Max',
//     age: 24 ,
//     height: 186 ,
// }
// console.log(userOptions)

// 2)метод объекта
// const userName = {
//     names:function(name) {
//         return `Hello ${name}`;
//     }
// };
// const allUsers = ['John', ' Alex', ' Anna',' Max']
// const message = userName.names(allUsers);
// console.log(message)

// 3)массив объектов  

const users = [
    {
        name: 'Max',
        age: 24,
        height: 186,
        isAdmin: false,
    },
    {
        name: 'Anna',
        age: 21,
        height: 186,
        isAdmin: false,
    },
    {
        name: 'John',
        age: 22,
        height: 186,
        isAdmin: false,
    },
    {
        name: 'Nikola',
        age: 28,
        height: 186,
        isAdmin: true,
    }
]

let allUsers = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin !== true) {
        allUsers++;
    }
}
console.log('Кол-во пользователей:', allUsers);


let allAdmins = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == true) {
        allAdmins++;
    }
}
console.log('Кол-во админов:', allAdmins);

